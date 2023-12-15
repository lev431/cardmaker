import "./App.css";
import Canvas from "../canvas/canvas";
import { Page } from "../models/models";
import ButtonDownload from "../buttonDownload/buttonDownload";
import UploadData from "../UploadData/UploadData";
import { doc } from "../models/models";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<Page>({
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    y: doc.page.y,
    x: doc.page.x,
    elements: [...doc.page.elements],
  });

  return (
    <div className="App">
      <Canvas {...page} />
      <ButtonDownload {...page} />
      <UploadData setPage={setPage} />
    </div>
  );
};

export default App;