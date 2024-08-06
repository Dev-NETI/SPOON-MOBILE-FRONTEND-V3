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

const computeBloodPressure = (sys, dia) => {
    if (sys > 180 || dia > 120) {
        return 'Hypertensive Crisis';
    } else if (sys >= 140 || dia >= 90) {
        return 'Hypertension Stage 2';
    } else if (sys >= 130 || dia >= 80) {
        return 'Hypertension Stage 1';
    } else if (sys >= 120 && dia < 80) {
        return 'Elevated';
    } else if (sys < 120 && dia < 80) {
        return 'Normal';
    }
    return 'Unknown';
};

const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

function calculatePercentage(value1, value2) {
    if (value2 === 0) {
        return 0; // Avoid division by zero
    }
    const percentage = (value1 / value2) * 100;
    return Math.min(percentage, 100).toFixed(2); // Ensure it doesn't exceed 100% and format to two decimal places
}

export {
    cn,
    computeAge,
    convertToCm,
    convertToFeet,
    convertToKg,
    convertToLbs,
    passwordRules,
    calculateBMI,
    computeBloodPressure,
    getCurrentDate,
    calculatePercentage,
};
