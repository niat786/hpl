export async function download(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to download file.');
        }
        const blob = await response.blob();
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(objectUrl);
        console.log('File downloaded successfully.');
    }
    catch (error) {
        console.error('Error downloading file:', error);
    }
}
