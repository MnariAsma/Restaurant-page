import React, { useState } from "react";

export interface Item {
  id: number;
  image: string;
  text: string;
  prix: string;
}

interface Props {
  item: Item;
}

export default function Plat(props: Props) {
  const {
    item: { id, image, prix, text },
  } = props;

  const [imageFile, setImageFile] = useState("");
  
  (function () {
    import( 
      `../images/${image}.jpg`
    ).then((imageFile) => setImageFile(imageFile.default));
   
  })();


  return (
    <>
      <div className="img">
        <img src={imageFile} alt={imageFile} />
      </div>
      <div className="text"> 
        <h3>{text}</h3>
      </div>
      <div className="text"> 
        <h3>{prix}</h3>
      </div>
    </>
  );
}