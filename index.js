const getSleepHours = (day) => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 5;
    } else {
        return "error";
    }
};

console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed by ' + (actualSleepHours - idealSleepHours) + ' hours.');
    } else {
        console.log('You should get ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep.');
    }
};

calculateSleepDebt();
