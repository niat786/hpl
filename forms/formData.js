export function formData(fields) {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
        if (value instanceof FileList) {
            for (let i = 0; i < value.length; i++) {
                formData.append(key, value[i]);
            }
        }
        else {
            formData.append(key, value);
        }
    });
    return formData;
}
