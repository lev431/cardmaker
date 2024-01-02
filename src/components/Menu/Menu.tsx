import { Dispatch, SetStateAction } from "react";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import styles from './Menu.module.css';

type props = {
  addElement: (
    elemt:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => void;
  defaultMenuText: TextBlockProps;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Menu = (props: props) => {
  const { addElement, defaultMenuText, setShowMenuText } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: defaultMenuText.value,
      xPos: 400,
      yPos: 400,
      fontSize: defaultMenuText.fontSize,
      fontFamily: defaultMenuText.fontFamily,
      color: defaultMenuText.color,
      bold: defaultMenuText.bold,
      italic: defaultMenuText.italic,
      underline: defaultMenuText.underline,
      value: defaultMenuText.value,
    };
    setShowMenuText(() => true);
    addElement(elem);
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/Chill.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    };
    addElement(elem);
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#6aa449",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 300,
    };
    addElement(elem);
  };

  const addCircle = () => {
    const elem: CircleProps = {
      id: "circle2",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 400,
      height: 400,
      xPos: 400,
      yPos: 400,
    };
    addElement(elem);
  };

  return (
    <div className={styles.menu}>
      <button className={styles.menuBtn} onClick={addTextBlock}><img className={styles.menuBtnImg} src="../../../resource/text.png" alt="text" /></button>
      <button className={styles.menuBtn}  onClick={addCircle}><img className={styles.menuBtnImg} src="../../../resource/circle.png" alt="circle" /></button>
      <button className={styles.menuBtn} onClick={addRectangle}><img className={styles.menuBtnImg} src="../../../resource/rectangle.png" alt="rect" /></button>
      <button className={styles.menuBtn} onClick={addImage}><img className={styles.menuBtnImg} src="../../../resource/image.png" alt="image" /></button>
    </div>
  );
};

export default Menu;
