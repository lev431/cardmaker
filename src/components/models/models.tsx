type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Position & Size & {
  id: string;
};

type SelectionArea = Block & Position;

type TextBlock = Block & {
  type: "text";
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  value: string;
};

type ImageBlock = Block & {
  type: "image";
  url: string;
};

type GraphicObjectBlock = Block & {
  color: string;
};

type Circle = GraphicObjectBlock & {
  type: "circle"
};

type Triangle = GraphicObjectBlock & {
  type: "triangle"
};

type Rectangle = GraphicObjectBlock & {
  type: "rectangle"
};

type Filter = {
  name: string;
  type: "filter";
  id: string;
  color: string;
  opacity: number;
};

type FilterCollection = Array<Filter>;

type Template = {
  id: string;
  name: string;
  blocks: Array<TextBlock | ImageBlock | Filter | Circle | Rectangle>
};

type TemplatesCollection = {
  templates: Array<Template>;
};

type Page = Block & {
  id: string;
  elements: Array<TextBlock | ImageBlock | Filter | Circle | Rectangle>;
};

type History = {
  index: number;
  history: Array<Page>;
};


type Doc = {
  page: Page;
  historyCommands: History;
  filterCollection: FilterCollection;
  templateCollection: TemplatesCollection;
  selectionArea: SelectionArea;
};

const greenFilter: Filter = {
  color: "#3fc11c",
  name: "greenFilter",
  type: "filter",
  id: "filter1",
  opacity: 0.5,
};

const blueFilter: Filter = {
  name: "blueFilter",
  color: "#009afc",
  type: "filter",
  id: "filter2",
  opacity: 0.5,
};

const redFilter: Filter = {
  name: "redFilter",
  color: "#fc0000",
  type: "filter",
  id: "filter3",
  opacity: 0.5,
};

const grayFilter: Filter = {
  name: "grayFilter",
  color: "#909090",
  type: "filter",
  id: "filter4",
  opacity: 0.5,
};

const filterCollection: FilterCollection = [
  greenFilter,
  blueFilter,
  redFilter,
  grayFilter,
];

const page1: Page = {
  // Минимальные данные
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [],
};

const page2: Page = {
  //Средние данные
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "Привет‚ Мир",
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 0,
      y: 0,
    },
    {
      id: "text2",
      type: "text",
      value: "HelloWorld",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      x: 100,
      y: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      x: 300,
      y: 300,
      url: "../../../Photo/ded.png",
    },
  ],
};

const page3: Page = {
  //максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [

    {
      id: "text1",
      type: "text",
      value: "Привет‚ Мир",
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 0,
      y: 0,
    },
    {
      id: "text2",
      type: "text",
      value: "HelloWorld",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      x: 100,
      y: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      x: 300,
      y: 300,
      url: "../../../Photo/ded.png",
    },
    {
      id: "circle1",
      type: "circle",
      color: "#000000",
      width: 300,
      height: 300,
      x: 0,
      y: 300,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      color: "#909090",
      width: 200,
      height: 200,
      x: 550,
      y: 30,
    },
    greenFilter,

  ],
};

const selectionArea: SelectionArea = {
  id: "idSelect",
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

const template1: Template = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "С Новым",
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 300,
      y: 100,
    },
    {
      id: "text2",
      type: "text",
      value: "годом!",
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 400,
      height: 100,
      x: 350,
      y: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      x: 250,
      y: 150,
      url: "../../../Photo/ded.png",
    },
  ],
};

const template2: Template = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "С Днём",
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 300,
      y: 100,
    },
    {
      id: "text2",
      type: "text",
      value: "Рождения!",
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      x: 250,
      y: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      x: 300,
      y: 200,
      url: "../../../Photo/party.png",
    },
  ],
};

const template3: Template = {
  id: "template1",
  name: "template1",
  blocks: [

    {
      id: "text1",
      type: "text",
      value: "Отдыхай!",
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 300,
      y: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      x: 300,
      y: 200,
      url: "../../../Photo/Chill.png",
    },
    grayFilter,
  ],
};

const page4: Page = {
  //максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [...template1.blocks],
};

const page5: Page = {
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [...template2.blocks],
};

const page6: Page = {
  id: "page1",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [...template3.blocks],
};

const templateCollection: TemplatesCollection = {
  templates: [template1, template2, template3],
};

const historyCommands: History = {
  index: 2,
  history: [page1, page2, page3, page4, page5, page6],
};

const doc: Doc = {
  page: historyCommands.history[historyCommands.index],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export type {
  Page,
  Doc,
  Filter,
  TextBlock,
  Triangle,
  Rectangle,
  Circle,
  ImageBlock,
};

export { doc };