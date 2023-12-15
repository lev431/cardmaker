import { Filter as FilterProps} from "../models/models";
import style from "./filter.module.css";

const Filter = (props: FilterProps) => {
  const styleProps = {
    opacity: props.opacity,
    backgroundColor: props.color,
  };

  return (<div className={style.filter} style={styleProps}></div>);
};

export default Filter;