import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import React from "react";

const Manga = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);

  return (
    <div className="p-2 text-color-accent">
      <header className="mb-4">
        <div className="text-color-accent mb-2">
          <h1 className="text-2xl text-center font-semibold lg:text-3xl lg:py-4">
            {manga.data.title} - {manga.data.published.prop.from.year}
          </h1>
        </div>

        <div className="flex gap-1 justify-center">
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2 lg:w-72">
            <h1 className="text-lg font-semibold lg:text-xl">Peringkat</h1>
            <h3 className="text-sm lg:text-lg">{manga.data.rank}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2 lg:w-72">
            <h1 className="text-lg font-semibold lg:text-xl">Score</h1>
            <h3 className="text-sm lg:text-lg">{manga.data.score}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2 lg:w-72">
            <h1 className="text-lg font-semibold lg:text-xl">Member</h1>
            <h3 className="text-sm lg:text-lg">{manga.data.members}</h3>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border-2 border-color-accent p-2 lg:w-72">
            <h1 className="text-lg font-semibold lg:text-xl">Popularity</h1>
            <h3 className="text-sm lg:text-lg">{manga.data.popularity}</h3>
          </div>
        </div>
      </header>

      <main>
        <section className="py-4">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <Image
              src={manga.data.images.webp.image_url}
              width={350}
              height={350}
              alt={manga.data.images.jpg.image_url}
            />
              <p className="px-4 py-3 text-justify lg:text-xl lg:max-w-2xl">{manga.data.synopsis}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Manga;
