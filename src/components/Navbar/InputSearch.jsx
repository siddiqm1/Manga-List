"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchInput = useRef()
  const route = useRouter()

  const handleInputSearch = (e) => {
    const keyword = searchInput.current.value

    if(!keyword || keyword.trim() == "") return

    if(e.key === 'Enter' || e.type === 'Click') {
      e.preventDefault
      route.push(`/search/${keyword}`)
    }
    
  }
  
  return (
    <>
      <div className="relative ">
        <input
          type="text"
          placeholder="Cari Manga ..."
          className="rounded-lg px-2 py-1 w-full"
          ref={searchInput}
          onKeyDown={handleInputSearch}
        />
        <button className="absolute top-1 end-3" onClick={handleInputSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
