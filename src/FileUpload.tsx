// src/FileUpload.tsx
import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {
  const [file, setFile] = useState<File | undefined>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      uploadData({
        path: `protected/${file.name}`,
        data: file,
      })
      alert(`${file.name}がアップロードされました。`)
  } else{
    alert(`ファイルが選択されていません。`)
  }; 
};

  return (
    <div>
      <input type="file" onChange={handleChange} />
        <button
          onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}