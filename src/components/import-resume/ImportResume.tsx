import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ImportResumeStyled from "./ImportResumeStyled";

const fileTypes = ["PDF", "PNG"];

const ImportResume = () => {
  const [file, setFile] = useState(null);
  let fileReader: any;

  const handleFileRead = () => {
    if (file) {
      const raw = URL.createObjectURL(file);
    }
  };

  const handleChange = (file: any) => {
    setFile(file);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <ImportResumeStyled>
      <div>Import your resume</div>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </ImportResumeStyled>
  );
};

export default ImportResume;
