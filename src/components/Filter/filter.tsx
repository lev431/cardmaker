import { useState } from "react";

import { FilterP } from "../models/models";
import styles from "./filter.module.css";

const Filter = (props: FilterP) => {
  const [state, setState] = useState(props);

  const styleProps = {
    opacity: state.opacity,
    backgroundColor: state.color,
  };

  return <div className={styles.filter} style={styleProps}></div>;
};

export default Filter;