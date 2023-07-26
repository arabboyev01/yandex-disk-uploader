import React from 'react';
import {useDropzone} from 'react-dropzone';
import {onDrop} from "./SendFile"

import DumbFile from "./DumbFile";


const FileUploader = () => {

    const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: true});

    return (
        <DumbFile getRootProps={getRootProps} getInputProps={getInputProps}/>
    );
};
export default FileUploader;
