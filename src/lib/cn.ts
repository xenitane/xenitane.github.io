import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export default function cn(...cls: ClassValue[]) {
    return twMerge(clsx(cls));
}
