import { createContext, useEffect, useRef, useState } from "react";
import lenguagesicon from "../lenguagesname";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);
  const [compiledCode, setcompiledCode] = useState("");
  const [output, setoutput] = useState([]);
  const [Copiednotificatio, setCopiednotificatio] = useState(false);
  const [copied, setcopied] = useState(false);
  const [Newfileisopen, setNewfileisopen] = useState(false);
  const [Issavefileopen, setIssavefileopen] = useState(false);
  const [SavefileData, setSavefileData] = useState([]);
  const [selectedLang, setSelectedLang] = useState(lenguagesicon[0]); // default first lang

  // zoom in function

  console.log(SavefileData);

  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }
  // zoom out function
  function funczoomout() {
    setzoomin((prev) => prev - 2);
  }

  function outputformconsole() {
    const logs = [];
    const customcode = {
      log: (...args) => {
        logs.push(args.join(" "));
      },
      error: (...args) => {
        logs.push("error" + args.join(" "));
      },
    };
    try {
      const func = new Function("console", compiledCode);
      func(customcode);
    } catch (error) {
      logs.push("Runtime Error: " + error.message);
    }
    setoutput(logs);
  }

  function Copy() {
    navigator.clipboard.writeText(compiledCode);
    setcopied(true);
    setCopiednotificatio(true);
    setTimeout(() => {
      setcopied(false);
      setCopiednotificatio(false);
    }, 2000);
  }

  const value = {
    zoomin,
    setzoomin,
    zoomout,
    setzoomout,
    funczoomin,
    funczoomout,
    compiledCode,
    setcompiledCode,
    outputformconsole,
    output,
    Copy,
    copied,

    setcopied,
    Copiednotificatio,
    setCopiednotificatio,
    Newfileisopen,
    setNewfileisopen,
    Issavefileopen,
    setIssavefileopen,
    SavefileData,

    setSavefileData,
    selectedLang,
    setSelectedLang,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
