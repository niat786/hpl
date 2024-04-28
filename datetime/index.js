export function time() {
    return new Date().getTime();
}
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
export function date(format = 'numeric') {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[currentDate.getMonth()];
    const dayWithSuffix = getDayWithSuffix(currentDate.getDate());
    const monthFullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFullName = monthFullNames[currentDate.getMonth()];
    const formatDictionary = {
        'dd/mm/yyyy': `${day}/${month}/${year}`,
        'dd-mm-yyyy': `${day}-${month}-${year}`,
        'yyy/mm/dd': `${year}/${month}/${day}`,
        'mm-dd-yyyy': `${month}-${day}/${year}`,
        'dd.mm.yyyy': `${day}.${month}.${year}`,
        'yyy.mm.dd': `${year}.${month}.${day}`,
        'mm.dd.yyyy': `${month}.${day}.${year}`,
        'ordinal': `${dayWithSuffix} ${monthName}, ${year}`,
        'yyyy/dd/mm': `${year}-${day}-${month}`,
        'yyyy-mm-dd': `${year}-${month}-${day}`,
        'dd/mm/yy': `${day}/${month}/${year.toString().slice(-2)}`,
        'mm/dd/yy': `${month}/${day}/${year.toString().slice(-2)}`,
        'DD MMM YYYY': `${day} ${monthName} ${year}`,
        'dd mmm yyyy': `${day} ${monthName} ${year}`,
        'D MMM YYYY': `${day} ${monthName} ${year}`,
        'd mmm yyyy': `${day} ${monthName} ${year}`,
        'MMM DD, YYYY': `${monthName} ${day}, ${year}`,
        'MMM D, YYYY': `${monthName} ${day}, ${year}`,
        'DD/MM/YYYY': `${day}/${month}/${year}`,
        'mm/dd/yyyy': `${month}/${day}/${year}`,
        'MM/DD/YYYY': `${month}/${day}/${year}`,
        'yyy-mm-dd': `${year}-${month}-${day}`,
        'YYYY-MM-DD': `${year}-${month}-${day}`,
        'YYYY-MM': `${year}-${month}`,
        'yyyy-mm': `${year}-${month}`,
        'YYYY': `${year}`,
        'yyyy': `${year}`,
        'dd': `${day}`,
        'DD': `${day}`,
        'MM': `${month}`,
        'mm': `${month}`,
        'DD MMMM YYYY': `${day} ${monthFullName} ${year}`,
        'dd mmmm yyyy': `${day} ${monthFullName} ${year}`,
        'D MMMM YYYY': `${day} ${monthFullName} ${year}`,
        'd mmmm yyyy': `${day} ${monthFullName} ${year}`,
    };
    if (format in formatDictionary) {
        return formatDictionary[format];
    }
    else if (format === 'numeric') {
        return currentDate;
    }
    else {
        throw new Error(`\x1b[41mInvalid format argument - date('${format}').\x1b[0m\n\nSupported formats are:\n'dd/mm/yyyy', \n'dd-mm-yyyy', \n'yyy/mm/dd', \n'mm-dd-yyyy', \n'dd.mm.yyyy', \n'yyy.mm.dd', \n'mm.dd.yyyy', \n'ordinal', \n'yyyy-mm-dd', \n'dd/mm/yy', \n'mm/dd/yy', \n'DD MMM YYYY', \n'dd mmm yyyy', \n'D MMM YYYY', \n'd mmm yyyy', \n'MMM DD, YYYY', \n'MMM D, YYYY', \n'DD/MM/YYYY', \n'mm/dd/yyyy', \n'MM/DD/YYYY', \n'yyy-mm-dd', \n'YYYY-MM-DD', \n'YYYY-MM', \n'yyyy-mm', \n'YYYY', \n'yyyy', \n'dd', \n'DD', \n'MM', \n'mm', \n'DD MMMM YYYY', \n'dd mmmm yyyy', \n'D MMMM YYYY', \n'd mmmm yyyy'\nPlease ensure you are using one of the supported formats.\n`);
    }
}
export function day() {
    return new Date().getDay();
}
export function hours() {
    return new Date().getHours();
}
export function minutes() {
    return new Date().getMinutes();
}
export function month() {
    return new Date().getMonth() + 1;
}
export function seconds() {
    return new Date().getSeconds();
}
export function milliseconds() {
    return new Date().getMilliseconds();
}
export function year() {
    return new Date().getFullYear();
}
