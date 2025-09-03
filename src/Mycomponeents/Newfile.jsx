import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import lenguagesicon from "../lenguagesname";
import { IoMdClose } from "react-icons/io";
import { Context } from "../context/context";

import { useForm } from "react-hook-form";

const Newfile = () => {
  const [selectedLang, setSelectedLang] = useState(lenguagesicon[0]);
  const { setNewfileisopen } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const [newfiledata, setnewfiledata] = useState([]);

  function handlenewfileform(values) {
    const data = {
      title: values.title,
      extension: selectedLang.name,
      extensionIcon: selectedLang.icon,
    };

    setnewfiledata((prev) => [...prev, data]);
  }

  return (
    <div className="h-screen w-full backdrop-blur-[10px] fixed inset-0 z-20 flex justify-center items-center">
      <Card className="w-[40vw] bg-[#0A0A0A] border border-zinc-800 shadow-xl">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-white text-2xl font-bold">
            Create New File
          </CardTitle>
          <IoMdClose
            onClick={() => setNewfileisopen(false)}
            className="text-white text-2xl cursor-pointer"
          />
        </CardHeader>

        <form onSubmit={handleSubmit(handlenewfileform)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              {/* File Name Input */}
              <div>
                <label className="text-sm text-zinc-300 mb-1 block">
                  File Name
                </label>
                <Input
                  {...register("title", { required: "File name is required" })}
                  placeholder="Enter file name..."
                  className="bg-[#09090B] border-zinc-700 text-white"
                />
              </div>

              {/* Dropdown for file extension */}
              <div>
                <label className="text-sm text-zinc-300 mb-1 block">
                  Extension
                </label>
                <div className="dropdown w-full">
                  <label
                    tabIndex={0}
                    className="btn btn-sm w-full flex justify-between bg-[#09090B] border border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <img className="h-[2vh]" src={selectedLang.icon} alt="" />
                      {selectedLang.name}
                    </span>
                    {selectedLang.ext}
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-[#09090B] border border-zinc-700 rounded w-48 mt-1"
                  >
                    {lenguagesicon.map((lang, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLang(lang);
                          }}
                          className="flex items-center text-white gap-2 hover:bg-zinc-900 hover:text-white transition-all rounded px-2 py-1 w-full text-left"
                        >
                          <img className="h-[2vh]" src={lang.icon} alt="" />
                          {lang.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-[#dedede] text-black">
              Create File
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Newfile;
