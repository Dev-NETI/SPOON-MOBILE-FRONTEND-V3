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

const passwordRules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const calculateBMI = (heightFt, heightCm, weightKg, weightLbs) => {
    // Convert height to meters
    const heightInMeters = heightFt ? heightFt * 0.3048 : heightCm / 100;

    // Convert weight to kilograms
    const weightInKg = weightLbs ? weightLbs * 0.453592 : weightKg;

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);

    return bmi.toFixed(2);
};

export {
    cn,
    computeAge,
    convertToCm,
    convertToFeet,
    convertToKg,
    convertToLbs,
    passwordRules,
    calculateBMI,
};
