import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Editor, { useMonaco } from "@monaco-editor/react";

const Terminal = () => {
  const monaco = useMonaco();
  const [zoomin, setzoomin] = useState(14)
  const [zoomout, setzoomout] = useState(zoomin)

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("zincDark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "7dd3fc", fontStyle: "italic" },
          { token: "keyword", foreground: "f472b6" },
          { token: "string", foreground: "facc15" },
          { token: "number", foreground: "a78bfa" },
        ],
        colors: {
          "editor.background": "#18181b", // zinc-900 bg
          "editor.foreground": "#f4f4f5", // zinc-100 text
          "editorCursor.foreground": "#22d3ee", // cyan-400 cursor
          "editor.lineHighlightBackground": "#27272a", // zinc-800 highlight
          "editorLineNumber.foreground": "#71717a", // zinc-500 line numbers
        },
      });

      monaco.editor.setTheme("zincDark");
    }
  }, [monaco]);



  return (
    <div className="w-[60%] h-[100%] flex flex-col bg-zinc-900 border-l border-zinc-700">
      <Topbar />
        
      <Editor
      
      defaultLanguage="javascript"
      defaultValue="// Write your code here"
      theme="zincDark"
      className="pt-[2px]"
      options={{
        fontSize: zoomin,
        
      }}
      
      />
    </div>
  );
};

export default Terminal;
