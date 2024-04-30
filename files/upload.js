export async function upload(file, path) {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(path, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Failed to upload file.');
        }
        console.log('File uploaded successfully.');
    }
    catch (error) {
        console.error('Error uploading file:', error);
    }
}
