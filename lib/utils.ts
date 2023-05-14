import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fetcher(resource: string, init: any) {
  return fetch(resource, init).then(res => res.json())
}
