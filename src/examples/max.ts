import {
  Position,
  Size,
  Block,
  Char,
  SelecrionArea,
  TextBlock,
  ImageBlock,
  Form,
  ArtObjectBlock,
  Filter,
  Template,
  Command,
  HistoryBlock,
  Canvas,
  Doc,
} from "../examples/types";

const artobjPosition: Position = {
  x: 400,
  y: 500,
};

const imgPosition: Position = {
  x: 400,
  y: 500,
};

const artobjSize: Size = {
  width: 500,
  height: 700,
};

const imgSize: Size = {
  width: 500,
  height: 700,
};

const sizeConvas: Size = {
  width: 500,
  height: 700,
};

const textPosition: Position = {
  x: 400,
  y: 500,
};

const textSize: Size = {
  width: 500,
  height: 700,
};

const char2: Char = {
  value: "a",
};

const char3: Char = {
  value: "b",
};

const artobjBlock: Block = {
  id: "id1",
  position: artobjPosition,
  size: artobjSize,
};

const imgBlock: Block = {
  id: "id2",
  position: imgPosition,
  size: imgSize,
};

const textBlock: Block = {
  id: "id3",
  position: textPosition,
  size: textSize,
};

const artobjectForm: Form = "circle";

const artobject: ArtObjectBlock = {
  ...artobjBlock,
  type: "artObject",
  color: "#FFFFFF",
  form: artobjectForm,
};

const text1: TextBlock = {
  ...textBlock,
  fontSize: 10,
  fontFamily: "Arial",
  color: "#FFFFFF",
  bold: true,
  type: "text",
  content: [char2, char3],
};

const image: ImageBlock = {
  ...imgBlock,
  type: "image",
  data: "C:/img.png",
};

const changeSizeConvas: Command = {
  id: "id1",
};

const changeTextPosition: Command = {
  id: "id2",
};

const changeFontSizeChar2: Command = {
  id: "id3",
};

const changeFontFamilyChar3: Command = {
  id: "id3",
};

const pasteImage: Command = {
  id: "id4",
};

const hist1: HistoryBlock = {
  history: [
    changeTextPosition,
    changeSizeConvas,
    changeFontSizeChar2,
    changeFontFamilyChar3,
    pasteImage,
  ],
};

const filterConvas: Filter = "grey";

const canvas2: Canvas = {
  size: sizeConvas,
  filter: filterConvas,
  elements: [text1, image, artobject],
};

const template2: Template = {
  convas: canvas2,
  id: "id3"
};

const doc1: Doc = {
  page: canvas2,
  history: [hist1],
  templates: [template2],
};
