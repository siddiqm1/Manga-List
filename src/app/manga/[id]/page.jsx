import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import React from "react";

const Manga = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);

  return (
    <div className="p-2 text-color-accent">
      <header className="mb-4">
        <div className="text-color-accent mb-2">
          <h1 className="text-2xl text-center font-semibold">
            {manga.data.title} - {manga.data.published.prop.from.year}
          </h1>
        </div>

        <div className="flex gap-1">
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2">
            <h1 className="text-lg font-semibold">Peringkat</h1>
            <h3>{manga.data.rank}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2">
            <h1 className="text-lg font-semibold">Score</h1>
            <h3>{manga.data.score}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2">
            <h1 className="text-lg font-semibold">Member</h1>
            <h3>{manga.data.members}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2">
            <h1 className="text-lg font-semibold">Popularity</h1>
            <h3>{manga.data.popularity}</h3>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="flex justify-center items-center">
            <Image
              src={manga.data.images.webp.image_url}
              width={350}
              height={350}
              alt={manga.data.images.jpg.image_url}
            />
          </div>
          <p className="px-4 py-3 text-justify">{manga.data.synopsis}</p>
        </section>
      </main>
    </div>
  );
};

export default Manga;
