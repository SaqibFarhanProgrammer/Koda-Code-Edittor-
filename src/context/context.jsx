import { createContext, useEffect, useRef, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);
  const [compiledCode, setcompiledCode] = useState(null);
  const [output, setoutput] = useState("");

  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }
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
    output
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
