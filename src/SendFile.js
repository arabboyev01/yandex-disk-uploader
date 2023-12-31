import axios from "axios";

const MAX_FILES = 100;
const UPLOAD_URL = 'https://cloud-api.yandex.net/v1/disk/resources/upload';
export const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > MAX_FILES) {
        alert(`Please select up to ${MAX_FILES} files.`);
        return;
    }

    try {
        for (const file of acceptedFiles) {
            await uploadFile(file);
        }
        alert('Files successfully uploaded to Yandex.Disk.');
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading files to Yandex.Disk.');
    }
};

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.get(UPLOAD_URL, {
            params: {path: file.name, overwrite: true},
            headers: {Authorization: 'OAuth YOUR_TOKEN'}, // Replace with your OAuth token
        });

        await axios.put(response.data.href, formData);
    } catch (error) {
        throw new Error('Error uploading file to Yandex.Disk.');
    }
};