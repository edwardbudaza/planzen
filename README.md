# 🌱 Planzen

Planzen is your ultimate collaborative whiteboarding solution — designed for teams to brainstorm, visualize ideas, and create magic in real time! Built with cutting-edge technologies like Next.js, Liveblocks, Clerk, and Convex, it’s a perfect showcase of my technical expertise and passion for building scalable, interactive applications.

---

## 🌍 Features

### Core Features
- ✨ **Real-Time Collaboration**: Multiple users can edit boards simultaneously with live cursors and instant updates.
- 🎨 **Customizable Boards**: Create visually appealing boards with support for rectangles, ellipses, text, and freehand paths.
- 🛠️ **User Presence**: See who’s online and track their actions in real time.
- 💼 **Organization Management**: Seamlessly create or join organizations for streamlined team collaboration.
- 🌟 **Favorite Boards**: Mark your frequently accessed boards as favorites for quick navigation.

### User Experience
- ⚡ **Search Functionality**: Quickly find boards with a responsive search bar.
- 🖐 **Drag-and-Drop Layers**: Intuitive interactions for moving and managing board elements.
- 🖌️ **Custom Colors**: Style layers with a built-in color picker.
- ↩️ **Undo/Redo**: Never lose your flow with undo and redo capabilities.
- ⌨️ **Keyboard Shortcuts**: Boost productivity with easy-to-use shortcuts.

---

## 🏢 Architecture

Planzen is built to scale and ensures real-time, fault-tolerant performance. Here’s a high-level overview of the architecture:

```plaintext
User Interface (UI):
- Next.js: Frontend framework for building a dynamic, responsive interface.
- Tailwind CSS: For beautiful, consistent styling.

Authentication:
- Clerk: Handles user authentication, organization switching, and user management.

Real-Time Collaboration:
- Liveblocks: Powers real-time updates, cursor synchronization, and shared state management.

Backend:
- Convex: Serverless database and backend for efficient data queries and mutation handling.

Deployment:
- Vercel: Hosting the frontend with seamless CI/CD integration.
```

### Workflow Diagram

1. **Frontend (Next.js)**: Users interact with a responsive interface built for seamless collaboration.
2. **Clerk Authentication**: Handles secure login and user identity.
3. **Liveblocks Integration**: Manages real-time collaboration data.
4. **Convex Backend**: Processes and stores board data in a highly scalable manner.
5. **Deployment**: Vercel ensures the app is fast and globally accessible.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- 📂 Node.js >= 18
- 📂 npm, Yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/planzen.git
   cd planzen
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file and configure the following variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api>
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   NEXT_PUBLIC_LIVEBLOCKS_SECRET=<your-liveblocks-secret>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🔧 Directory Structure

```
edwardbudaza-planzen/
├── app/
│   ├── (dashboard)/
│   │   ├── _components/
│   │   └── layout.tsx
│   ├── board/
│   │   ├── [boardId]/
│   │   └── _components/
│   ├── api/
│   └── globals.css
├── components/
└── convex/
```

---

## 🔖 Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm start`: Start the production server
- `npm run lint`: Run linting checks

---

## 🚜 Deployment

The easiest way to deploy Planzen is using [Vercel](https://vercel.com):

1. Connect your GitHub repository to Vercel.
2. Configure environment variables in the Vercel dashboard.
3. Deploy your app and share it with your team!

---

## 🎓 Why Hire Me?

Planzen is more than just a whiteboarding app; it’s a testament to my ability to design and build complex, scalable, and user-friendly applications from the ground up. Key highlights:

- ✅ Expertise in **Next.js**, **Clerk**, **Liveblocks**, and **Convex**.
- ⚙️ Proficient in **real-time data synchronization** and **state management**.
- ✨ Strong focus on **user experience** and **visual design**.
- 🎨 Passionate about building tools that empower teams to collaborate effectively.

---

## ✨ Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

---

## 📚 License

Planzen is licensed under the MIT License. See the LICENSE file for more details.

---

## 👏 Acknowledgments

Special thanks to:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/)
- [Liveblocks](https://liveblocks.io/)
- [Convex](https://convex.dev/)

