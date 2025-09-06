import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { IoMdClose } from "react-icons/io";
import { Context } from "../context/context";
import { useForm } from "react-hook-form";

function Save() {
  const {
    setIssavefileopen,
    setSavefileData,

    compiledCode,
  } = useContext(Context);

  const { register, handleSubmit } = useForm();
  function handlesaveform(e) {
    setSavefileData((prev) => [
      ...prev,
      {
        title: e.title,
        code: compiledCode,
        extention: "javascript",
      },
    ]);
    setIssavefileopen(false);
  }

  return (
    <div className="h-screen w-full backdrop-blur-[10px]    fixed inset-0 z-20 flex justify-center items-center">
      <Card className="w-[40vw] bg-[#0A0A0A] border border-zinc-800 shadow-xl">
        {/* Header */}
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-white text-2xl font-bold">
            Save File
          </CardTitle>
          <IoMdClose
            onClick={() => setIssavefileopen(false)}
            className="text-white text-2xl cursor-pointer"
          />
        </CardHeader>

        {/* Form */}
        <form onSubmit={handleSubmit(handlesaveform)}>
          <CardContent className="flex flex-col gap-4">
            {/* Title */}
            <div>
              <label className="text-sm text-zinc-300 mb-1 block">Title</label>
              <Input
                {...register("title", { required: "Title is required" })}
                placeholder="Enter file title..."
                className="bg-[#09090B] border-zinc-700 text-white"
              />
            </div>

            {/* Description */}

            {/* Extension */}
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-[#dedede] text-black mt-4">
              Save
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Save;
