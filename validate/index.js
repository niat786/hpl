export function isValidEmail(email, rules) {
    const emailSyntaxRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;
    if (!emailSyntaxRegex.test(email)) {
        return {
            message: 'The email syntax is incorrect',
            type: 'error',
            code: 'INVALID_EMAIL_SYNTAX'
        };
    }
    const defaultRules = {
        min: (email, minChars) => {
            return email.length >= minChars;
        },
        max: (email, maxChars) => {
            return email.length <= maxChars;
        },
        unique: (email, emails) => {
            return emails.indexOf(email) === -1;
        },
        domains: (email, allowedDomains) => {
            const domain = email.split('@')[1];
            return allowedDomains.includes(domain);
        },
        TLD: (email, allowedTLDs) => {
            const domain = email.split('@')[1];
            const tld = domain.split('.').pop();
            return tld !== undefined && (allowedTLDs.includes('.' + tld) || allowedTLDs.includes(tld));
        }
    };
    const validationResult = {
        message: 'Email is valid',
        type: 'success',
        code: 'VALID_EMAIL'
    };
    if (rules) {
        rules.forEach(rule => {
            const [ruleName, ruleValue] = rule.split(':');
            switch (ruleName) {
                case 'min':
                    if (!defaultRules.min(email, parseInt(ruleValue))) {
                        validationResult.message = `Email should have minimum ${ruleValue} characters`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_EMAIL_MIN_LENGTH';
                    }
                    break;
                case 'max':
                    if (!defaultRules.max(email, parseInt(ruleValue))) {
                        validationResult.message = `Email should have maximum ${ruleValue} characters`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_EMAIL_MAX_LENGTH';
                    }
                    break;
                case 'unique':
                    if (!defaultRules.unique(email, ['list', 'of', 'emails'])) {
                        validationResult.message = 'Email should be unique';
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_EMAIL_UNIQUE';
                    }
                    break;
                case 'domains':
                    if (!defaultRules.domains(email, ruleValue.split('|'))) {
                        validationResult.message = `Email domain should be one of ${ruleValue.replace('|', ',')}`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_EMAIL_DOMAIN';
                    }
                    break;
                case 'TLD':
                case 'tld':
                    if (!defaultRules.TLD(email, ruleValue.split('|'))) {
                        validationResult.message = `Email TLD should be one of ${'.' + ruleValue.replace('|', ', .')}`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_EMAIL_TLD';
                    }
                    break;
                default:
                    break;
            }
        });
    }
    return validationResult;
}
export function isValidPassword(password, rules) {
    const defaultRules = {
        min: (password, minChars) => {
            return password.length >= minChars;
        },
        max: (password, maxChars) => {
            return password.length <= maxChars;
        },
        uppercase: (password) => {
            return /[A-Z]/.test(password);
        },
        lowercase: (password) => {
            return /[a-z]/.test(password);
        },
        digit: (password) => {
            return /\d/.test(password);
        },
        specialChar: (password) => {
            return /[!@#$%^&*(),.?":{}|<>]/.test(password);
        },
        noSpaces: (password) => {
            return /^\S*$/.test(password);
        }
    };
    const validationResult = {
        message: 'Password is valid',
        type: 'success',
        code: 'VALID_PASSWORD'
    };
    if (rules) {
        rules.forEach(rule => {
            const [ruleName, ruleValue] = rule.split(':');
            switch (ruleName) {
                case 'min':
                    if (!defaultRules.min(password, parseInt(ruleValue))) {
                        validationResult.message = `Password should have minimum ${ruleValue} characters`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_MIN_LENGTH';
                    }
                    break;
                case 'max':
                    if (!defaultRules.max(password, parseInt(ruleValue))) {
                        validationResult.message = `Password should have maximum ${ruleValue} characters`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_MAX_LENGTH';
                    }
                    break;
                case 'uppercase':
                case 'upper':
                    if (!defaultRules.uppercase(password)) {
                        validationResult.message = `Password should contain at least one uppercase letter`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_UPPERCASE';
                    }
                    break;
                case 'lowercase':
                case 'lower':
                    if (!defaultRules.lowercase(password)) {
                        validationResult.message = `Password should contain at least one lowercase letter`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_LOWERCASE';
                    }
                    break;
                case 'digit':
                case 'number':
                    if (!defaultRules.digit(password)) {
                        validationResult.message = `Password should contain at least one digit`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_DIGIT';
                    }
                    break;
                case 'specialChar':
                case 'symbols':
                    if (!defaultRules.specialChar(password)) {
                        validationResult.message = `Password should contain at least one special character`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_SPECIAL_CHAR';
                    }
                    break;
                case 'noSpaces':
                    if (!defaultRules.noSpaces(password)) {
                        validationResult.message = `Password should not contain any spaces`;
                        validationResult.type = 'error';
                        validationResult.code = 'INVALID_PASSWORD_SPACES';
                    }
                    break;
                default:
                    break;
            }
        });
    }
    return validationResult;
}
export function isValidURL(url, rules) {
    const urlRegex = /^(?:(https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-_.]+\.[a-zA-Z]{2,})(?:\/\S*)?$/i;
    const ftpUrlRegex = /^ftp:\/\/(?:\S+:\S+@)?(?:[a-zA-Z\d.-]+|\[[a-fA-F\d:]+\])(?::\d+)?(?:\/\S*)?$/i;
    const validationResult = {
        message: 'URL is valid',
        type: 'success',
        code: 'VALID_URL'
    };
    if (!(urlRegex.test(url) || ftpUrlRegex.test(url)) && !(rules?.includes('ftponly') || rules?.includes('ftpOnly') || rules?.includes('ftp'))) {
        return {
            message: 'The URL syntax is incorrect',
            type: 'error',
            code: 'INVALID_URL_SYNTAX'
        };
    }
    const defaultRules = {
        allowHttp: (url) => /^https?:\/\//i.test(url),
        allowFtp: (url) => /^ftp:\/\//i.test(url),
    };
    if (rules) {
        rules.forEach(rule => {
            switch (rule.toLowerCase()) {
                case 'http':
                case 'https':
                    if (!defaultRules.allowHttp(url)) {
                        validationResult.message = 'URL should start with "http://" or "https://"';
                        validationResult.code = 'INVALID_URL_PROTOCOL';
                        validationResult.type = 'error';
                    }
                    break;
                case 'ftp':
                    if (!defaultRules.allowFtp(url)) {
                        validationResult.message = 'URL should start with "ftp://"';
                        validationResult.code = 'INVALID_URL_PROTOCOL';
                        validationResult.type = 'error';
                    }
                    break;
                case 'httponly':
                    if (!/^http:\/\//i.test(url)) {
                        validationResult.message = 'URL should start with "http://" only';
                        validationResult.code = 'INVALID_URL_PROTOCOL_HTTP_ONLY';
                        validationResult.type = 'error';
                    }
                    break;
                case 'httpsonly':
                    if (!/^https:\/\//i.test(url)) {
                        validationResult.message = 'URL should start with "https://" only';
                        validationResult.code = 'INVALID_URL_PROTOCOL_HTTPS_ONLY';
                        validationResult.type = 'error';
                    }
                    break;
                case 'ftponly':
                    if (!ftpUrlRegex.test(url)) {
                        const ftpSyntax = 'ftp://user:password@host:port/path';
                        validationResult.message = `URL is not a FTP URL! FTP syntax is: ${ftpSyntax}`;
                        validationResult.code = 'INVALID_URL_PROTOCOL_FTP_ONLY';
                        validationResult.type = 'error';
                    }
                    break;
                default:
                    validationResult.message = `Invalid Rule: ${rule}`;
                    validationResult.code = 'INVALID_URL_RULE';
                    validationResult.type = 'error';
                    break;
            }
        });
    }
    return validationResult;
}
