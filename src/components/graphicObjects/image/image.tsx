import { useState, RefObject } from "react";
import { ImageBlockP } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import styles from "./image.module.css";

type Props = {
  props: ImageBlockP;
  ref: RefObject<HTMLDivElement>;
};

const Image = (props: ImageBlockP) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    left: 0,
    top: 0,
    width: "100%",
    // height: `${state.height}px`,
  };

  return (
    <img
      className={styles.image}
      style={styleProps}
      src={state.url}
      alt={state.id}
    />
  );
};

export default Image;