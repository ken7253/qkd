import React, {useState} from "react";
import DocumentSearch from "./DocumentSearch";
import SelectProvider from "./SelectProvider";

const Contents = () => {

  const [url, setURL] = useState<URL>();

  const getURL = (select:URL) => {
    setURL(select);
  }

  return (
    <main>
      <DocumentSearch />
      <SelectProvider onChangeProvider={getURL}/>
    </main>
  );
}

export default Contents;
