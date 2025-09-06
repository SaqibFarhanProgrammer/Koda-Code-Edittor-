import React, { useContext, useEffect, useState } from "react";
import Topbar from "./Topbar";
import Editor, { useMonaco } from "@monaco-editor/react";
import { Context } from "../context/context";

const Code = () => {
  const monaco = useMonaco();
  const { zoomin, compiledCode, setcompiledCode, selectedLang } =
    useContext(Context);
  const [lang, setlang] = useState("");
  useEffect(() => {
    if (selectedLang?.id) {
      setlang(selectedLang.id);
    }
  }, [selectedLang]);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("zincDark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "5c6370", fontStyle: "italic" }, // gray
          { token: "keyword", foreground: "c678dd" }, // purple
          { token: "string", foreground: "98c379" }, // green
          { token: "number", foreground: "d19a66" }, // orange
          { token: "regexp", foreground: "98c379" }, // green
          { token: "operator", foreground: "56b6c2" }, // cyan
          { token: "variable", foreground: "e06c75" }, // red
          { token: "function", foreground: "61afef" }, // blue
          { token: "type", foreground: "e5c07b" }, // yellow
          { token: "class", foreground: "e5c07b", fontStyle: "bold" }, // yellow bold
          { token: "property", foreground: "61afef" }, // blue
        ],

        colors: {
          "editor.background": "#09090B", // zinc-900
          "editor.foreground": "#f4f4f5", // zinc-100 (light text)
          "editorCursor.foreground": "#22d3ee", // cyan-400 cursor
          "editor.lineHighlightBackground": "#27272a", // zinc-800 highlight
          "editorLineNumber.foreground": "#71717a", // zinc-500 line numbers
          "editorLineNumber.activeForeground": "#f4f4f5", // active line number
        },
      });

      monaco.editor.setTheme("zincDark");
    }
  }, [monaco]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col border-l border-zinc-700">
      <Topbar />

      <Editor
        onChange={(value) => setcompiledCode(value)}
        language={lang}
        defaultValue={compiledCode}
        theme="zincDark"
        height="100%"
        className="pt-[2px] mt-1"
        options={{
          fontSize: zoomin,
          minimap: { enabled: false }, // optional: minimap off
        }}
      />
    </div>
  );
};

export default Code;
