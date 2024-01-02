import { PageProps } from "../models/models";
import styles from "./buttonDownload.module.css";

const ButtonDownload = (props: PageProps) => {
  const createFile = () => {
    const file = new Blob([JSON.stringify(props)], {
      type: "application/json",
    });
    return file;
  };

  const file = createFile();

  const downloadFile = () => {
    const url = URL.createObjectURL(file); // создаём ссылку на файл
    const link = document.createElement("a"); //создаём ссылку для скачивания файла, пользователь её не видит.
    //она существует только в области выполнения скрипта
    link.href = url; //записываем в аттрибут элемента ссылки ссылку на файл
    link.download = "file.json"; //задаём название файлу
    link.click(); //совершаем клик по ссылки внутри кода, чтобы сработало скачивание файла
  };

  return <button onClick={downloadFile}><img className={styles.menuBtnImg} src="../../../resource/download.png" alt="text" /></button>;
};

export default ButtonDownload;
