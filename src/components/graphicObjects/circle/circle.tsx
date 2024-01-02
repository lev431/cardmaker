import { RefObject, useState } from "react";

import { CircleP } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./circle.module.css";

const Circle = (props: CircleP) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);
  const styleProps = {
    backgroundColor: `${state.color}`,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  return <div className={style.circle} style={styleProps}></div>;
};

export default Circle;