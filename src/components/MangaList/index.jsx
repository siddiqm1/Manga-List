import Image from "next/image";
import Link from "next/link";
import React from "react";

const MangaList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {api.data?.map((manga, index) => {
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={index}>
            <Link href={`manga/${manga.mal_id}`} className="cursor-pointer text-color-accent">
              <Image
                src={manga.images.webp.image_url}
                width={350}
                height={350}
                alt="..."
                className="w-full max-h-64 object-cover"
              />
              <h1 className="px-4 py-2 text-center">{manga.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MangaList;
