import { Rectangle as RectangleProps } from "../../models/models";
import style from "./rectangle.module.css";

const Rectangle = (props: RectangleProps) => {
  const styleProps = {
    Color: `${props.color}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.x}px`,
    top: `${props.y}px`,
  };

  return <svg className={style.rectangle} style={styleProps}></svg>;
};

export default Rectangle;