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

const position: Position = {
  x: 400,
  y: 500,
};

const size: Size = {
  width: 500,
  height: 700,
};

const char: Char = {
  value: "a",
};

const filter: Filter = "grey";

const canvas: Canvas = {
  size: size,
  filter: filter,
  elements: [],
};

