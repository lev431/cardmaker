import {
  Block,
  Chars,
  ArtObjectBlock,
  Command,
  Canvas,
  Filter,
  TextBlock
} from "types";

const block: Block = {
  id: "623",
  width: 400,
  height: 600,
};

const chars: Chars = {
  value: "A",
  fontSize: 14,
  fontFamily: "Arial",
  color: "#ffffff",
  bold: false,
};

const artobjectblock: ArtObjectBlock = {
  type: 'artObject',
  width: 200,
  height: 150
};

const command: Command = {
  name: "delete",
  id: "732",
  data: {},
};

const canvas: Canvas = {
  width: 600,
  height: 800,
  elements: [chars, artobjectblock],
};

const filter: Filter = {
  name: "Red",
  color: "#FFFFFF"
};

const textblock: TextBlock =  {
  type: 'text',
  content: [chars, chars],
}