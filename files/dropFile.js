function dropFile(dropAreaId, callback) {
    const dropArea = document.getElementById(dropAreaId);
    if (!dropArea) {
        console.error(`Drop area with ID "${dropAreaId}" not found.`);
        return;
    }
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    dropArea.addEventListener('drop', handleDrop, false);
    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function highlight() {
        dropArea?.classList.add('highlight');
    }
    function unhighlight() {
        dropArea?.classList.remove('highlight');
    }
    function handleDrop(event) {
        if (event.dataTransfer) {
            const files = event.dataTransfer.files;
            if (files) {
                callback(files);
            }
        }
    }
}
export default dropFile;
