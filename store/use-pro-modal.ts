import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IPromodal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const usePromodal = create<IPromodal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));