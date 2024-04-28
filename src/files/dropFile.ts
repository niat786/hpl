function dropFile(dropAreaId: string, callback: (files: FileList) => void) {
    const dropArea = document.getElementById(dropAreaId);

    if (!dropArea) {
        console.error(`Drop area with ID "${dropAreaId}" not found.`);
        return;
    }

    // Prevent default behavior for drag events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults as EventListener, false);
        document.body.addEventListener(eventName, preventDefaults as EventListener, false);
    });

    // Highlight drop area when file is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight as EventListener, false);
    });

    // Unhighlight drop area when file is dragged out of it
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight as EventListener, false);
    });

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop as EventListener, false);

    function preventDefaults(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlight() {
        dropArea?.classList.add('highlight');
    }

    function unhighlight() {
        dropArea?.classList.remove('highlight');
    }

    function handleDrop(event: DragEvent) {
        if (event.dataTransfer) {
            const files = event.dataTransfer.files;
            if (files) {
                callback(files);
            }
        }
    }
}

export default dropFile;
