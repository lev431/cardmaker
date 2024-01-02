import { useState } from "react";
import SelectionArea from "../../selectionArea/selectionArea";

import { RectangleP } from "../../models/models";
import styles from "./rectangle.module.css";

const Rectangle = (props: RectangleP) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    backgroundColor: `${state.color}`,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  return <div className={styles.rectangle} style={styleProps}></div>;
};

export default Rectangle;