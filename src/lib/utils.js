import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

function computeAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

const convertToCm = decimalFeet => {
    if (decimalFeet) {
        const feetPart = Math.floor(decimalFeet);
        const inchesPart = (decimalFeet - feetPart) * 12;
        const totalInches = feetPart * 12 + inchesPart;
        const cm = totalInches * 2.54;
        return cm.toFixed(2); // Returns the result rounded to 2 decimal places
    } else {
        return null;
    }
};

const convertToFeet = cm => {
    if (cm) {
        const totalInches = cm / 2.54;
        const feetPart = Math.floor(totalInches / 12);
        const inchesPart = totalInches % 12;
        const decimalFeet = feetPart + inchesPart / 12;
        return decimalFeet.toFixed(2); // Returns the result rounded to 2 decimal places
    } else {
        return null;
    }
};

const convertToKg = lbs => {
    if (lbs) {
        const kg = lbs * 0.453592;
        return kg.toFixed(2); // Returns the result rounded to 2 decimal places
    } else {
        return null;
    }
};

const convertToLbs = kg => {
    if (kg) {
        const lbs = kg / 0.453592;
        return lbs.toFixed(2); // Returns the result rounded to 2 decimal places
    } else {
        return null;
    }
};

export {
    cn,
    computeAge,
    convertToCm,
    convertToFeet,
    convertToKg,
    convertToLbs,
};
