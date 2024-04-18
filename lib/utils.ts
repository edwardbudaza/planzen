import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#DC6262", 
  "#5FA2DD", 
  "#A865CE", 
  "#70C18F", 
  "#F5C364", 
  "#DB2777"
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}