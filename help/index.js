function help(topic) {
    switch (topic) {
        case 'info':
            return `
HPL HELP:
\x1b[90mName: \x1b[0m\x1b[32mHPL JS Helper Methods\x1b[0m
\x1b[90mVersion: \x1b[0m\x1b[32m0.0.16\x1b[0m`;
        case 'methods':
            return `
\x1b[90mHPL JS Helper Methods \x1b[0m\n
- \x1b[32mhelp('info')\x1b[90m //Get general information about the HPL package.\x1b[0m\n
- \x1b[32mhelp('methods')\x1b[90m //List available helper methods.\x1b[0m\n
- \x1b[32mhelp('helpers')\x1b[90m //List available helper functions.\x1b[0m\n
- \x1b[32mhelp('functions')\x1b[90m //List available helper functions.\x1b[0m\n
- \x1b[32mfind('selector')\x1b[90m //Find an element in the DOM by selector.\x1b[0m\n
- \x1b[31mVisit for more\x1b[90m https://google.com/\x1b[0m\n
`;
        case 'dom':
            return `
\x1b[90mHPL JS - DOM Methods \x1b[0m\n
- \x1b[32mfind('selector')\x1b[90m //Get an element by selector.\x1b[0m\n
- \x1b[32mfindAll('selector')\x1b[90m //Get a list of elements by selector.\x1b[0m\n
- \x1b[32maddClasses(selectedElement)\x1b[90m //Add classes to selected elements.\x1b[0m\n
- \x1b[32mcreateElement('tag')\x1b[90m //Create a new element with specified tag name.\x1b[0m\n
- \x1b[32mnextSibling(selectedElement)\x1b[90m //Get the next sibling of the selected element.\x1b[0m\n
- \x1b[31mVisit for more\x1b[90m https://google.com/\x1b[0m\n
`;
        default: return `
\x1b[1mHPL HELP:\x1b[0m\n
\x1b[32mYou may call the following functions to get information:\x1b[0m\n
- \x1b[32mhelp('info')\x1b[90m: General information about the HPL package.\x1b[0m\n
- \x1b[32mhelp('methods')\x1b[90m: List of helper functions available in the HPL package. You can also use \x1b[32mhelp('functions')\x1b[90m or \x1b[32mhelp('helpers')\x1b[90m.\x1b[0m\n
- \x1b[31mVisit for more\x1b[90m https://google.com/\x1b[0m\n`;
    }
}
export default help;
