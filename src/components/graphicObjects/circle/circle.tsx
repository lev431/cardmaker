import { Circle as CircleProps } from "../../models/models";
import style from "./circle.module.css";

const Circle = (props: CircleProps) => {
  const styleProps = {
    Color: `${props.color}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.x}px`,
    top: `${props.y}px`,
  };

  return <svg className={style.circle} style={styleProps}></svg>;
};

export default Circle;