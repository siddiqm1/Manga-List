import React from "react";
import { getAnimeResponse } from "./libs/api-libs";
import MangaList from "@/components/MangaList";
import Header from "@/components/MangaList/Header";

const Home = async () => {
  const topManga = await getAnimeResponse("top/manga", "limit=8");

  return (
    <div className="p-2">
      <Header
        title={"Top Manga"}
        linkHref={"/popular"}
        linkTitle={"Lihat semua"}
      />
      <MangaList api={topManga} />
    </div>
  );
};

export default Home;
