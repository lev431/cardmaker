import { RefObject, useRef, useState, useEffect } from "react";
import { SelectionAreaP } from "../models/models";
import styles from "./selectionArea.module.css";

import TextBlock from "../textBlock/textBlock";
import Circle from "../graphicObjects/circle/circle";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Image from "../graphicObjects/image/image";
import Filter from "../filter/filter";
import { Dispatch, SetStateAction } from "react";

import { UseDnD } from "../../UseDnd/UseDnd";

import ResizeArea from "../resizeArea/resizeArea";

import {
  PageP,
  TextBlockP,
  ImageBlockP,
  CircleP,
  RectangleP,
  FilterP,
} from "../models/models";

type Props = {
  newElement:
    | TextBlockP
    | ImageBlockP
    | CircleP
    | RectangleP
    | FilterP;
  setPage: Dispatch<SetStateAction<PageP>>;
  setNewElement: Dispatch<
    SetStateAction<
      | TextBlockP
      | ImageBlockP
      | CircleP
      | RectangleP
      | FilterP
    >
  >;
  pageX: number;
  pageY: number;
};

const SelectionArea = (props: Props) => {
  const { newElement, setPage, setNewElement } = props;

  const [state, setState] = useState(props.newElement);
 

  const styleArea = {
    width: newElement.width,
    height: newElement.height,
    top: newElement.y,
    left: newElement.x,
  };

  const { registerDndItem } = UseDnD();

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const refAreaWrapper = useRef<HTMLDivElement>(null);

  const addElement = (
    newElement:
      | TextBlockP
      | ImageBlockP
      | CircleP
      | RectangleP
      | FilterP
  ) => {
    switch (newElement.type) {
      case "text":
        return <TextBlock {...newElement} />;
      case "circle":
        return <Circle {...newElement} />;
      case "rectangle":
        return <Rectangle {...newElement} />;
      case "image":
        return <Image {...newElement} />;
      case "filter":
        return <Filter {...newElement} />;
      default:
        return null;
    }
  };

  const deleteNewItem = () => {
    setNewElement(() => null!);
  };

  const addElemToCanvas = (e: MouseEvent) => {
    if (e.target === refAreaWrapper.current) {
      setPage((page: PageP) => {
        return {
          ...page,
          elements: [...page.elements, newElement],
        };
      });
      setNewElement(null!);
    }
  };

  useEffect(() => {
    const { onDragStart } = registerDndItem({
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          dragEvent.stopPropagation();
          dragEvent.preventDefault();
          // console.log(dragEvent, mouseDownEvent);
          ref.current!.style.top = `${
            dragEvent.clientY + (newElement.y - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (newElement.x - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent) => {
          dropEvent.stopPropagation();
          setNewElement({
            ...newElement,
            x:
              dropEvent.clientX +
              (newElement.x - mouseDownEvent.clientX) +
              3,
            y:
              dropEvent.clientY +
              (newElement.y - mouseDownEvent.clientY) +
              5,
          });
        },
      });
    };

    if (dndControlRef.current !== null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [newElement.width, newElement.height, newElement.x, newElement.y]);

  return (
    <div
      ref={refAreaWrapper}
      className={styles.selectionAreaWrapper}
      onClick={addElemToCanvas}
    >
      <div style={styleArea} ref={ref} className={styles.selectionArea}>
        <div ref={dndControlRef} className={styles.dndBlock}></div>
        <ResizeArea
          refResize={ref}
          newElement={newElement}
          setNewElement={setNewElement}
          pageX={props.pageX}
          pageY={props.pageY}
        />
        {addElement(newElement)}
        <div onClick={deleteNewItem}>
          <img
            className={styles.deleteIcon}
            src="../../../resource/basket.svg"
            alt="Basket"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionArea;