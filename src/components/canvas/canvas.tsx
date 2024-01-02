import { useState, useRef, useEffect } from "react";

import {
  PageP,
  TextBlockP,
  ImageBlockP,
  CircleP,
  RectangleP,
  FilterP,
} from "../models/models";

import styles from "./canvas.module.css";

const Canvas = (props: PageP) => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    canvas.width = props.width;
    canvas.height = props.height;
    canvas.style.top = `${props.y}%`;
    canvas.style.left = `${props.x}%`;
    context!.clearRect(0, 0, canvas.width, canvas.height);
    props.elements.forEach(
      (
        element:
          | TextBlockP
          | ImageBlockP
          | CircleP
          | RectangleP
          | FilterP
      ) => {
        const ctx = canvas.getContext("2d");
        ctx!.beginPath();
        switch (element.type) {
          case "text":
            ctx!.font = ` ${element.fontSize}px ${element.fontFamily}  serif`;
            ctx!.fillStyle = element.color;
            ctx!.fillText(element.value, element.x, element.y);
            break;
          case "circle":
            ctx!.arc(
              element.x + element.width / 2 + 4,
              element.y + element.height / 2 + 4,
              element.width / 2,
              0,
              Math.PI * 2
            );
            ctx!.fillStyle = element.color;
            ctx!.fill();
            break;
          case "rectangle":
            ctx!.fillStyle = element.color;
            ctx!.fillRect(
              element.x,
              element.y,
              element.width,
              element.height
            );
            break;
          case "image":
            const pic = new Image();
            pic.src = element.url;
            pic.onload = function () {
              ctx!.drawImage(
                pic,
                element.x,
                element.y,
                element.width,
                element.height
              );
            };
            ctx!.drawImage(
              pic,
              element.x,
              element.y,
              element.width,
              element.height
            );
            break;
          case "filter":
            ctx!.fillStyle = element.color;
            ctx.globalAlpha = 0.5;
            ctx!.fillRect(
              element.x,
              element.y,
              element.width,
              element.height
            );
            break;
          default:
            return null;
        }
      }
    );
  });

  return <canvas className={styles.page} ref={ref}></canvas>;
};

export default Canvas;