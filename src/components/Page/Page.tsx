import Canvas from "../canvas/canvas";
import { Dispatch, SetStateAction } from "react";
import {
  PageP,
  TextBlockP,
  ImageBlockP,
  CircleP,
  RectangleP,
  FilterP,
} from "../models/models";

import SelectionArea from "../selectionArea/selectionArea";

import styles from "./page.module.css";

type Props = {
  page: PageP;
  newElement:
    | TextBlockP
    | ImageBlockP
    | CircleP
    | RectangleP
    | FilterP;
  setPage: Dispatch<SetStateAction<PageP>>;
  deleteNewElement: Dispatch<
    SetStateAction<
      | TextBlockP
      | ImageBlockP
      | CircleP
      | RectangleP
      | FilterP
    >
  >;
};

const Page = (props: Props) => {
  const { page, newElement, setPage, deleteNewElement } = props;

  const stylePage = {
    width: `${page.width}px`,
    height: `${page.height}px`,
    top: `${page.y}%`,
    left: `${page.x}%`,
  };

  return (
    <div className={styles.page} style={stylePage}>
      <Canvas {...page} />
      {newElement != null ? (
        <SelectionArea
          newElement={newElement}
          setNewElement={setNewElement}
          setPage={setPage}
          pageX={page.x}
          pageY={page.y}
        />
      ) : null}
    </div>
  );
};

export default Page;