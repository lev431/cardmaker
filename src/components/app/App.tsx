import "./App.css";
import Page from "../page/page";
import {
  PageP,
  TextBlockP,
  ImageBlockP,
  CircleP,
  RectangleP,
  FilterP,
} from "../models/models";
import { doc } from "../models/models";
import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import UploadData from "../uploadData/uploadData";
import { useState } from "react";


const App = () => {
  const [page, setPage] = useState<PageP>({
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    y: doc.page.y,
    x: doc.page.x,
    elements: [...doc.page.elements],
  });

  const [newElement, setNewElement] = useState<
    | TextBlockP
    | ImageBlockP
    | CircleP
    | RectangleP
    | FilterP
  >(null!);

  const addElement = (
    elem:
      | TextBlockP
      | ImageBlockP
      | CircleP
      | RectangleP
      | FilterP
  ) => {
    setNewElement(elem);
  };

  return (
    <div className="App">
      <Page
        page={page}
        newElement={newElement}
        deleteNewElement={setNewElement}
        setPage={setPage}
      />
      <ButtonDownload {...page} />
      <UploadData setPage={setPage} />
      <Menu addElement={addElement} />
    </div>
  );
};

export default App;