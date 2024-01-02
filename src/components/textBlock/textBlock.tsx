import { useState } from "react";

import { TextBlockP } from "../models/models";

import styles from "./textBlock.module.css";

const TextBlock = (props: TextBlockP) => {
  const [state, setState] = useState(props);
  const styleProps = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    fontSize: `${state.fontSize}px`,
    fontFamily: `${state.fontFamily}`,
    color: `${state.color}`,
    fontWeight: state.bold ? "900" : "300",
  };

  return (
    <div
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={styles.textBlock}
      style={styleProps}
    >
      {state.value}
    </div>
  );
};

export default TextBlock;