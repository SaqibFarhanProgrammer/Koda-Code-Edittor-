import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 w-full max-w-2xl mx-auto mt-20 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
        <Input
          id="search-input"
          type="text"
          placeholder="Search files..."
          className="pl-9 pr-10 bg-[#151516] border border-zinc-700 text-white placeholder:text-zinc-500"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-1 top-1 h-7 w-7 text-zinc-400 hover:text-red-500"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <Button className="bg-green-600 hover:bg-green-500 text-white px-6">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
