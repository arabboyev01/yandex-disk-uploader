import {dropzoneStyles} from "./style";
import React from "react";

const DumbFile = ({getRootProps, getInputProps}) => (
    <div>
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag and drop files here or click to select files.</p>
        </div>
    </div>
)

export default DumbFile;