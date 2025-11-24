import { useState } from "react";

function UploadFile(){
  const [output, setOutput] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const fileName = file.name.toLowerCase();

    if(fileName.endsWith(".txt")){
      const reader = new FileReader();
      reader.onload = () => {
        setOutput(
          <pre style={{ whiteSpace: "pre-wrap" }}>{reader.result}</pre>
        );
      };
      reader.readAsText(file);
    }
    else if(fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png")){
      const reader = new FileReader();
      reader.onload = () => {
        setOutput(<img src={reader.result} alt="Obrazek" width="300" />);
      };
      reader.readAsDataURL(file);
    }
    else{
      setOutput(<p>Wysłano plik inny niż .txt, .jpg lub .png</p>);
    }
  };

  return(
    <div>
      <p>Wybierz plik</p>
      <input type="file" onChange={handleFileChange} />
      <div>
        {output}
      </div>
    </div>
  );
}

export default UploadFile;
