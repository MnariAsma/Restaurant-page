import React, { useState } from "react";


export interface Item {
  image: string;
}

interface Props {
  item: Item;
}

export default function Plat(props: Props) {
  const {
    item: {image},
  } = props;

  const [imageFile, setImageFile] = useState("");
  
  (function () {
    import( 
      `../../public/images/${image}.jpg`
    ).then((imageFile) => setImageFile(imageFile.default));
   
  })();


  return (
    <>
      <div className="img">
        <img src={imageFile} alt={imageFile} />
      </div>
    </>
  );
}
