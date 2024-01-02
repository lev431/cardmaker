//типы
type Chars = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

type Coordinates = {
  xPos: number;
  yPos: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Coordinates &
  Size & {
    id: string;
  };

type TextBlock = Block & {
  type: "text";
  chars: Array<Chars>;
};

type GraphicObject = Block & {
  type: "graphic";
  typeGraphicObject: string;
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlock = Block & {
  type: "image";
  data: string;
};

type Circle = GraphicObject & {
  borderRadius: number;
};

type Rectangle = GraphicObject;

type Triangle = GraphicObject;

type Filter = Block & {
  name: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<Filter>;

type SelectionArea = Coordinates & Size;

type Template = {
  id: string;
  name: string;
  blocks: Array<
    TextBlock | ImageBlock | Filter | Triangle | Circle | Rectangle
  >;
};

type TemplatesCollection = {
  templates: Array<Template>;
};

type Page = Block & {
  elements: Array<
    | TextBlock
    | ImageBlock
    | Filter
    | Triangle
    | Circle
    | Rectangle
    | Filter
    | Template
  >;
};

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<Page>;
};

type Doc = {
  page: Page;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  // | SelectionArea
};

export type { Page, Doc, Filter };
