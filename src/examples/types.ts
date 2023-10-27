type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = {
  id: string;
  position: Position;
  size: Size;
};

type Char = {
  value: string;
};

type SelecrionArea = Block & Position;

type TextBlock = Block & {
  type: "text";
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  content: Array<Char>;
};

type ImageBlock = Block & {
  type: "image";
  data: string;
};

type Form = "circle" | "triangle" | "rectangle";

type ArtObjectBlock = Block & {
  type: "artObject";
  color: string;
  form: Form;
};

type Filter = "grey" | "red" | "blue";

type Template = {
  convas: Canvas;
  id: string;
};

type Command = {
  id: string;
};

type HistoryBlock = {
  history: Array<Command>;
};

type Canvas = {
  size: Size;
  filter: Filter | null;
  elements: Array<TextBlock | ImageBlock | ArtObjectBlock>;
};

type Doc = {
  page: Canvas;
  history: Array<HistoryBlock>;
  templates: Array<Template>;
};

export type {
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
};
