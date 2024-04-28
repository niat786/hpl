function help(topic) {
    switch (topic) {
        case 'info':
            return `
HPL HELP:
\x1b[90mName: \x1b[0m\x1b[32mHPL JS Helper Methods\x1b[0m
\x1b[90mVersion: \x1b[0m\x1b[32m0.0.1\x1b[0m`;
        default: return `
\x1b[1mHPL HELP:\x1b[0m\n
\x1b[32mYou may call the following functions to get information:\x1b[0m\n
- \x1b[32mhelp('info')\x1b[90m: General information about the HPL package.\x1b[0m\n
- \x1b[32mhelp('methods')\x1b[90m: List of helper functions available in the HPL package. You can also use \x1b[32mhelp('functions')\x1b[90m or \x1b[32mhelp('helpers')\x1b[90m.\x1b[0m\n
`;
    }
}
export default help;
