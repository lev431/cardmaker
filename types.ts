type Block = {
  id: string,
  width: number,
  height: number
}

type Chars = {
  value: string,
  fontSize: number,
  fontFamily: string,
  color: string,
  bold: boolean
}

type TextBlock = Block & {
  type: 'text',
  content: Array<Chars>
}

type ImageBlock = Block & {
  type: 'image',
  data: string,
  width: number,
  height: number
}

type ArtObjectBlock = Block & {
  type: 'artObject',
  data: string,
  width: number,
  height: number
}

type Filter = {
  name: string,
  color: string
}

type Template = {
  design: string
}

type Command = {
  name: string,
  id: string,
  data: object,
}

type HistoryBlock = {
  history: Array<Command>
}

type Canvas = {
  width: number,
  height: number,
  elements: Array<TextBlock | ImageBlock | ArtObjectBlock>
}

type Export = {
  canvas: Array<Canvas>
}

export type {
  Block,
  Chars,
  ArtObjectBlock,
  Command,
  Canvas,
  Filter,
  TextBlock
};