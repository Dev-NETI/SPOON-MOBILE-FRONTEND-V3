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

const counter = (setState, propName, targetValue, intervalDuration) => {
    const intervalId = setInterval(() => {
        setState(prevState => {
            const currentValue = prevState[propName];
            if (currentValue < targetValue) {
                return {
                    ...prevState,
                    [propName]: currentValue + 1,
                };
            } else {
                clearInterval(intervalId);
                return prevState;
            }
        });
    }, intervalDuration);

    return intervalId;
};

function formatDate(dateString, format) {
    const date = new Date(dateString);

    const pad = number => String(number).padStart(2, '0');

    const formatMap = {
        'yyyy-mm-dd': () =>
            `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
        'd F, Y': () =>
            `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`,
        'mm/dd/yyyy': () =>
            `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`,
        'dd-mm-yyyy': () =>
            `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`,
        'MMMM d, yyyy': () =>
            `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`,
        'yyyy-mm-dd hh:mm:ss': () =>
            `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`,
        'dd-mm-yyyy hh:mm:ss': () =>
            `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`,
        'd F, Y hh:mm:ss': () =>
            `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`,
    };

    if (!formatMap[format]) {
        throw new Error('Unsupported format');
    }

    return formatMap[format]();
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
    counter,
    formatDate,
};
