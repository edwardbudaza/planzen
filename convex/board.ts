import {v} from "convex/values";
 
import { mutation, query } from "./_generated/server";

const   ORG_BOARD_LIMIT = 5;

const images = [
    "/placeholders/1.svg","/placeholders/2.svg","/placeholders/3.svg",
    "/placeholders/4.svg","/placeholders/5.svg","/placeholders/6.svg",
    "/placeholders/7.svg","/placeholders/8.svg","/placeholders/9.svg",
    "/placeholders/10.svg","/placeholders/11.svg","/placeholders/12.svg",
    "/placeholders/13.svg","/placeholders/14.svg","/placeholders/15.svg",
    "/placeholders/16.svg","/placeholders/17.svg","/placeholders/18.svg",
    "/placeholders/19.svg","/placeholders/20.svg","/placeholders/21.svg",
    "/placeholders/22.svg","/placeholders/23.svg","/placeholders/24.svg",
    "/placeholders/25.svg","/placeholders/26.svg","/placeholders/27.svg",
    "/placeholders/28.svg","/placeholders/29.svg","/placeholders/30.svg", 
]

export const create = mutation({
    args: {
        orgId: v.string(),
        title: v.string(),
    }, 
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const randomImage = images[Math.floor(Math.random() * images.length)];

        const existingBoards = await ctx.db
            .query("boards")
            .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
            .collect()

        if(existingBoards.length >= ORG_BOARD_LIMIT) {
            throw new Error("Organisation limit reached")
        }
        
        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImage,
        });

        return board;
    },  
});

export const remove = mutation({
    args: {id: v.id("boards")},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if(!identity) {
            throw new Error("Unauthorized");
        }

        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userId)
                    .eq("boardId", args.id) 
            )
            .unique();
        
        if (existingFavorite) { 
            await ctx.db.delete(existingFavorite._id)
        }
        

        await ctx.db.delete(args.id)
    },
});

export const update = mutation({
    args: {
        id: v.id("boards"),
        title: v.string(),
    },
    handler: async(ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const title = args.title.trim();
        
        if (!title) {
            throw new Error("Title is required");
        }

        if(title.length > 60) {
            throw new Error("Title cannot be longer than 60 characters");
        }

        const board = await ctx.db.patch(args.id, {
            title: args.title,
        });

        return board;
    },
});

export const favorite = mutation({
    args: {
        id: v.id("boards"),
        orgId: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await ctx.db.get(args.id)

        if (!board) {
            throw new Error("Board not found");
        }

        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userId)
                    .eq("boardId", board._id)
            )
            .unique();
        
        if (existingFavorite) {
            throw new Error("Board already favorited");
        }

        await ctx.db.insert("userFavorites", {
            userId,
            boardId: board._id,
            orgId: args.orgId,
        });

        return board;
    }
});

export const unfavorite = mutation({
    args: {
        id: v.id("boards"),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await ctx.db.get(args.id)

        if (!board) {
            throw new Error("Board not found");
        }

        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userId)
                    .eq("boardId", board._id)
            )
            .unique();
        
        if (!existingFavorite) {
            throw new Error("Favorited board not found");
        }

        await ctx.db.delete(existingFavorite._id);

        return board;
    }
});

export const get = query({
    args: { id: v.id("boards") },
    handler: async (ctx, args) => {
        const board = ctx.db.get(args.id);

        return board;
    },
});