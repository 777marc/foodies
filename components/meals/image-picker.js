"use client";
import { useRef, useState } from "react";
import styleClasses from "./image-picker.module.css";

export default function ImagePicker({ lable, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styleClasses.picker}>
      <label htmlFor={name}>{lable}</label>
      <div className={styleClasses.controls}>
        <input
          className={styleClasses.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
      </div>
      <button
        className={styleClasses.button}
        type="button"
        onClick={handlePickClick}
      >
        Pick an Image
      </button>
      <div className={styleClasses.preview}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && (
          <img src={pickedImage} alt="The image selected by user" />
        )}
      </div>
    </div>
  );
}
