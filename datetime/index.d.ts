export declare function time(): {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    day: number;
    month: number;
    year: number;
};
export declare function date(format?: string): string | Date;
export declare function day(): {
    dayNumber: number;
    dayString: string;
};
export declare function hours(): {
    hours: number;
    AM: boolean;
};
export declare function minutes(): number;
export declare function month(): {
    monthNumber: number;
    monthName: string;
    numberOfDays: number;
};
export declare function seconds(): number;
export declare function milliseconds(): number;
export declare function year(): {
    year: number;
    isLeapYear: boolean;
};
export declare function isLeapYear(year?: number): boolean;
