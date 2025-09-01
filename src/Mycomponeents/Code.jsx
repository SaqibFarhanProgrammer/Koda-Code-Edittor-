import React, { useContext, useEffect } from "react";
import Topbar from "./Topbar";
import Editor, { useMonaco } from "@monaco-editor/react";
import { Context } from "../context/context";

const Code = () => {
  const monaco = useMonaco();
  const { zoomin, compiledCode, setcompiledCode } = useContext(Context);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("zincDark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "7dd3fc", fontStyle: "italic" }, // sky-300
          { token: "keyword", foreground: "f472b6" }, // pink-400
          { token: "string", foreground: "facc15" }, // yellow-400
          { token: "number", foreground: "a78bfa" }, // violet-400
        ],
        colors: {
          "editor.background": "#09090B",          // zinc-900
          "editor.foreground": "#f4f4f5",          // zinc-100 (light text)
          "editorCursor.foreground": "#22d3ee",    // cyan-400 cursor
          "editor.lineHighlightBackground": "#27272a", // zinc-800 highlight
          "editorLineNumber.foreground": "#71717a",    // zinc-500 line numbers
          "editorLineNumber.activeForeground": "#f4f4f5", // active line number
        },
      });

      monaco.editor.setTheme("zincDark");
    }
  }, [monaco]);

  return (
    <div className="w-[60%] h-[100%] flex flex-col border-l border-zinc-700">
      <Topbar />

      <Editor
        onChange={(value) => setcompiledCode(value)}
        defaultLanguage="javascript"
        defaultValue={compiledCode}
        theme="zincDark"
        className="pt-[2px]"
        options={{
          fontSize: zoomin,
          minimap: { enabled: false }, // optional: minimap off
        }}
      />
    </div>
  );
};

export default Code;
