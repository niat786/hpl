function getDayWithSuffix(day) {
    if (day >= 11 && day <= 13) {
        return day + 'th';
    }
    switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
    }
}

function year(format = 'numeric') {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = String(currentDate.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[currentDate.getMonth()];
    const dayWithSuffix = getDayWithSuffix(currentDate.getDate());

    const formatDictionary = {
        'dd/mm/yyyy': `${day}/${month}/${year}`,
        'dd-mm-yyyy': `${day}-${month}-${year}`,
        'yyy/mm/dd': `${year}/${month}/${day}`,
        'mm/dd/yyyy': `${month}/${day}/${year}`,
        'yyy-mm-dd': `${year}-${month}-${day}`,
        'mm-dd-yyyy': `${month}-${day}/${year}`,
        'dd.mm.yyyy': `${day}.${month}.${year}`,
        'yyy.mm.dd': `${year}.${month}.${day}`,
        'mm.dd.yyyy': `${month}.${day}.${year}`,
        'ordinal': `${dayWithSuffix} ${monthName}, ${year}`
    };

    if (format in formatDictionary) {
        return formatDictionary[format];
    } else if (format === 'numeric') {
        return year.toString();
    } else if (format === 'roman') {
        // Convert the year to Roman numeral format
        const romanNumerals = {
            1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X',
            40: 'XL', 50: 'L', 90: 'XC', 100: 'C',
            400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
        };

        let result = '';
        let num = year;

        Object.keys(romanNumerals).sort((a, b) => b - a).forEach(value => {
            while (num >= value) {
                result += romanNumerals[value];
                num -= value;
            }
        });

        return result;
    } else {
        throw new Error('Invalid format argument. Supported formats are "numeric", "roman", ordinal and formats like "dd/mm/yyyy", "dd-mm-yyyy", "yyy/mm/dd", "mm/dd/yyyy", "yyy-mm-dd", "mm-dd-yyyy" etc.');
    }
}

export default year;
