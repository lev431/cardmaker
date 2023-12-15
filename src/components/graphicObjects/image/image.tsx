import { ImageBlock } from "../../models/models";
import style from "./image.module.css";

const Image = (props: ImageBlock) => {
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.x}px`,
    top: `${props.y}px`,
  };

  return (
    <img
      className={style.image}
      style={styleProps}
      src={props.url}
      alt={props.id}
    />
  );
};

export default Image;