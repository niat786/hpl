type FormatDictionary = {
    [key: string]: string;
}
function getDayWithSuffix(day:any) {
    if (day >= 11 && day <= 13) {
        return day + 'th';
    }
    switch (day % 10) {
        case 1:  return day + 'st';
        case 2:  return day + 'nd';
        case 3:  return day + 'rd';
        default: return day + 'th';
    }
}

function date(format = 'numeric') {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = String(currentDate.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[currentDate.getMonth()];
    const dayWithSuffix = getDayWithSuffix(currentDate.getDate());
    const monthFullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFullName = monthFullNames[currentDate.getMonth()];

    const formatDictionary: FormatDictionary ={
        'dd/mm/yyyy': `${day}/${month}/${year}`,
        'dd-mm-yyyy': `${day}-${month}-${year}`,
        'yyy/mm/dd': `${year}/${month}/${day}`,
        'mm-dd-yyyy': `${month}-${day}/${year}`,
        'dd.mm.yyyy': `${day}.${month}.${year}`,
        'yyy.mm.dd': `${year}.${month}.${day}`,
        'mm.dd.yyyy': `${month}.${day}.${year}`,
        'ordinal': `${dayWithSuffix} ${monthName}, ${year}`,
        'yyyy/dd/mm': `${year}-${day}-${month}`,
        'yyyy-mm-dd': `${year}-${month}-${day}`, // ISO 8601
        'dd/mm/yy': `${day}/${month}/${year.toString().slice(-2)}`, // European 2-digit year
        'mm/dd/yy': `${month}/${day}/${year.toString().slice(-2)}`, // American 2-digit year
        'DD MMM YYYY': `${day} ${monthName} ${year}`, // International
        'dd mmm yyyy': `${day} ${monthName} ${year}`, // International
        'D MMM YYYY': `${day} ${monthName} ${year}`, // International
        'd mmm yyyy': `${day} ${monthName} ${year}`, // International
        'MMM DD, YYYY': `${monthName} ${day}, ${year}`, // International
        'MMM D, YYYY': `${monthName} ${day}, ${year}`, // International
        'DD/MM/YYYY': `${day}/${month}/${year}`, // European
        'mm/dd/yyyy': `${month}/${day}/${year}`,
        'MM/DD/YYYY': `${month}/${day}/${year}`, // American
        'yyy-mm-dd': `${year}-${month}-${day}`,
        'YYYY-MM-DD': `${year}-${month}-${day}`, // ISO 8601
        'YYYY-MM': `${year}-${month}`, // ISO 8601
        'yyyy-mm': `${year}-${month}`, // ISO 8601
        'YYYY': `${year}`, // ISO 8601
        'yyyy': `${year}`, // ISO 8601
        'dd': `${day}`, 
        'DD': `${day}`, 
        'MM': `${month}`, 
        'mm': `${month}`, 
        'DD MMMM YYYY': `${day} ${monthFullName} ${year}`, // International with full month name
        'dd mmmm yyyy': `${day} ${monthFullName} ${year}`, // International with full month name
        'D MMMM YYYY': `${day} ${monthFullName} ${year}`, // International with full month name
        'd mmmm yyyy': `${day} ${monthFullName} ${year}`, // International with full month name
    };
    

    if (format in formatDictionary) {
        return formatDictionary[format];
    } else if (format === 'numeric') {
        return currentDate;
    } else {
        
        throw new Error(`\x1b[41mInvalid format argument - date('${format}').\x1b[0m\n\nSupported formats are:\n'dd/mm/yyyy', \n'dd-mm-yyyy', \n'yyy/mm/dd', \n'mm-dd-yyyy', \n'dd.mm.yyyy', \n'yyy.mm.dd', \n'mm.dd.yyyy', \n'ordinal', \n'yyyy-mm-dd', \n'dd/mm/yy', \n'mm/dd/yy', \n'DD MMM YYYY', \n'dd mmm yyyy', \n'D MMM YYYY', \n'd mmm yyyy', \n'MMM DD, YYYY', \n'MMM D, YYYY', \n'DD/MM/YYYY', \n'mm/dd/yyyy', \n'MM/DD/YYYY', \n'yyy-mm-dd', \n'YYYY-MM-DD', \n'YYYY-MM', \n'yyyy-mm', \n'YYYY', \n'yyyy', \n'dd', \n'DD', \n'MM', \n'mm', \n'DD MMMM YYYY', \n'dd mmmm yyyy', \n'D MMMM YYYY', \n'd mmmm yyyy'\nPlease ensure you are using one of the supported formats.\n`);
        }
}

export default date;
