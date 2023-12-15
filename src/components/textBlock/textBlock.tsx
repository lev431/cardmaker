import { TextBlock  as TextBlockProps} from "../models/models";
import style from "./textBlock.module.css";

const TextBlock = (props: TextBlockProps) => {
  const textBlockData = {
    id: props.id,
    type: props.type,
    data: props.value,
  };

  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.y}px`,
    left: `${props.x}px`,
    fontSize: `${props.fontSize}px`,
    fontFamily: `${props.fontFamily}`,
    color: `${props.color}`,
    fontWeight: props.bold ? "900" : "300",
  };

  return (
    <p className={style.textBlock} style={styleProps}>
      {textBlockData.data}
    </p>
  ); 
};

export default TextBlock;