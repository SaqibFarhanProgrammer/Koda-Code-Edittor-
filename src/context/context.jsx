import { createContext, useRef, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);
  const [compiledCode, setcompiledCode] = useState(null);
  const [terminalCode, setterminalCode] = useState("")

  

  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }
  function funczoomout() {
    setzoomin((prev) => prev - 2);
  }

  function Codecompile() {
    setterminalCode(compiledCode);
    
  }
  

  const value = {
    zoomin,
    setzoomin,
    zoomout,
    setzoomout,
    funczoomin,
    funczoomout,
    Codecompile,
    compiledCode,
    setcompiledCode,
    terminalCode,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
