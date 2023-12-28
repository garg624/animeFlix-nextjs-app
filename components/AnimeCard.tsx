import Image from "next/image";
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

// format for the api result
// GET /api/animes
// 200
// [
//   {
//     "id": 56,
//     "name": "Test",
//     "russian": "аниме_56",
//     "image": {
//       "original": "/assets/globals/missing_original.jpg",
//       "preview": "/assets/globals/missing_preview.jpg",
//       "x96": "/assets/globals/missing_x96.jpg",
//       "x48": "/assets/globals/missing_x48.jpg"
//     },
//     "url": "/animes/56-test",
//     "kind": "tv",
//     "score": "8.0",
//     "status": "released",
//     "episodes": 0,
//     "episodes_aired": 0,
//     "aired_on": "2014-01-01",
//     "released_on": null
//   }
// ]
function AnimeCard({ anime }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[49vh] bg-black border-2 rounded-xl">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
