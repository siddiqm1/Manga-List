"use client"
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import MangaList from "@/components/MangaList";
import Pagination from "@/components/utilities/Pagination";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/manga", `page=${page}`);
    setTopManga(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="p-2">
      <HeaderMenu title={`Manga Terpopular #${page}`} />
      <MangaList api={topManga} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topManga.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Popular;
