import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

function computeAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export {
  cn,
  computeAge
}
