"use client";

import { useState } from "react";

const AppMultiFileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (fileName) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const uploadFiles = async () => {
    setIsUploading(true);
    const progress = {};

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5000/api/upload", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          progress[file.name] = 100;
        } else {
          progress[file.name] = -1; // Failed
        }
      } catch (error) {
        progress[file.name] = -1; // Failed
      }
      setUploadProgress({ ...progress });
    }

    setIsUploading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Multi File Uploader</h2>
      <div className="border border-gray-300 rounded-md p-4">
        {/* File Input */}
        <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
          Select Files
        </label>
        <input
          type="file"
          id="fileUpload"
          multiple
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          onChange={handleFileChange}
        />

        {/* Selected Files List */}
        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h3>
            <ul className="space-y-2">
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
                >
                  <span className="text-sm text-gray-800 truncate">{file.name}</span>
                  <div className="flex items-center">
                    {uploadProgress[file.name] !== undefined && (
                      <span
                        className={`ml-4 text-xs font-medium ${
                          uploadProgress[file.name] === 100 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {uploadProgress[file.name] === 100 ? "Uploaded" : "Failed"}
                      </span>
                    )}
                    <button
                      className="ml-4 text-sm text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveFile(file.name)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Upload Button */}
        <button
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          onClick={uploadFiles}
          disabled={isUploading || selectedFiles.length === 0}
        >
          {isUploading ? "Uploading..." : "Upload Files"}
        </button>
      </div>
    </div>
  );
};

export default AppMultiFileUploader;
