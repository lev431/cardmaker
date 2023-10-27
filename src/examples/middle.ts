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

const position1: Position = {
  x: 400,
  y: 500,
};

const size1: Size = {
  width: 500,
  height: 700,
};

const char1: Char = {
  value: "a",
};

const blockText: Block = {
  id: "id1",
  position: position1,
  size: size1,
};

const text: TextBlock = {
  ...blockText,
  type: "text",
  fontSize: 10,
  fontFamily: "Arial",
  color: "#FFFFFF",
  bold: false,
  content: [char1],
};

const command1: Command = {
  id: "id1",
};

const command2: Command = {
  id: "id2",
};

const hist: HistoryBlock = {
  history: [command1, command2],
};

const filter1: Filter = "grey";

const canvas1: Canvas = {
  size: size1,
  filter: filter1,
  elements: [text],
};

const template1: Template = {
  convas: canvas1,
  id: "id3"
};

const doc: Doc = {
  page: canvas1,
  history: [hist],
  templates: [template1]
};
