import {
  TextBlockP,
  ImageBlockP,
  CircleP,
  RectangleP,
  FilterP,
} from "../models/models";

type props = {
  addElement: (
    elemt:
      | TextBlockP
      | ImageBlockP
      | CircleP
      | RectangleP
      | FilterP
  ) => void;
};

const Menu = (props: props) => {
  const { addElement } = props;

  const addTextBlock = () => {
    const elem: TextBlockP = {
      type: "text",
      id: "asdasd223",
      width: 200,
      height: 100,
      x: 400,
      y: 400,
      fontSize: 20,
      fontFamily: `Roboto`,
      color: `#ff00e4`,
      bold: false,
      value: "Добавить текст",
    };
    addElement(elem);
  };

  const addImage = () => {
    const elem: ImageBlockP = {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      x: 300,
      y: 200,
      url: "../../../resource/1.png",
    };
    addElement(elem);
  };

  const addRectangle = () => {
    const elem: RectangleP = {
      id: "rectangle1",
      type: "rectangle",
      color: "#6aa449",
      width: 200,
      height: 200,
      x: 600,
      y: 300,
    };
    addElement(elem);
  };

  const addCircle = () => {
    const elem: CircleP = {
      id: "circle2",
      type: "circle",
      color: "#000000",
      width: 400,
      height: 400,
      x: 400,
      y: 400,
    };
    addElement(elem);
  };

  const addFilter = () => {
    const elem: FilterP = {
      color: "#3fc11c",
      name: "greenFilter",
      type: "filter",
      id: "filter1",
      opacity: 0.5,
      width: 800,
      height: 600,
      x: 0,
      y: 0,
    };
    addElement(elem);
  };

  return (
    <div className="menu">
      <button onClick={addTextBlock}>Добавить текст</button>
      <button onClick={addCircle}>Добавить круг</button>
      <button onClick={addRectangle}>Добавить квадрат</button>
      <button onClick={addImage}>Добавить картинку</button>
      <button onClick={addFilter}>Добавить фильтр</button>
    </div>
  );
};

export default Menu;
