import { useState, DragEvent, ChangeEvent } from 'react';
import { RiUploadLine } from 'react-icons/ri';

const FileInput: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 border border-white rounded-lg p-8"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label htmlFor="fileInput" className="cursor-pointer">
        <div className="border border-white rounded-lg p-4">
          <RiUploadLine className="text-5xl text-slate-700" />
        </div>
      </label>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-4 text-center">
          <span className='text-2xl font-bold'>Drag and drop or click to upload</span>
        </p>
        <p className="text-large text-gray-500">
          File type: jpg, mp4, mp3, png, svg, or gif
        </p>

        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept=".jpg,.jpeg,.png,.svg,.gif,.mp4,.mp3"
          onChange={handleFileUpload}
        />
        {file && (
          <div className="mt-4">
            <p>Selected File: {file.name}</p>
            {/* Display additional file details if needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
