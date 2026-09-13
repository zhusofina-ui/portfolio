"use client";
import { useState } from "react";

type FolderKey =
  | "staticPosts"
  | "carousels"
  | "branding"
  | "photography"
  | "videography"
  | "misc";

const folderContent: Record<FolderKey, { title: string; images: string[] }> = {
  staticPosts: { title: "Static Posts", images: ["/designs/static-1.png", "/designs/static-2.png"] },
  carousels:   { title: "Carousels", images: ["/designs/carousel-1.png"] },
  branding:    { title: "Branding & Collaborations", images: ["/designs/branding-1.png"] },
  photography: { title: "Photography", images: ["/content/photo-1.png"] },
  videography: { title: "Videography", images: ["/content/video-1.png"] },
  misc:        { title: "Miscellaneous", images: ["/content/misc-1.png"] },
};

const VERTICAL_SHIFT = -11.5; // % — negative moves hotspots up. Tweak this one number to fine-tune.

const hotspots: { key: FolderKey; top: number; left: string; width: string; height: string }[] = [
  { key: "staticPosts", top: 62.0 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "carousels",   top: 73.5 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "branding",    top: 85.0 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "photography", top: 62.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "videography", top: 73.5 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "misc",        top: 85.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
];

export function Work() {
  const [openFolder, setOpenFolder] = useState<FolderKey | null>(null);

  return (
    <div className="relative w-full">
      <img
        src="/portfoliocover-02.png"
        alt="Work station"
        className="w-full h-auto block"
      />

      {hotspots.map((spot) => (
        <button
          key={spot.key}
          onClick={() => setOpenFolder(spot.key)}
          aria-label={folderContent[spot.key].title}
          className="absolute cursor-pointer bg-transparent border-0 p-0"
          style={{ top: `${spot.top}%`, left: spot.left, width: spot.width, height: spot.height }}        />
      ))}

      {openFolder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpenFolder(null)}
        >
          <div
            className="relative w-[70%] max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenFolder(null)}
              className="absolute top-4 right-4 text-pink-500 text-xl"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              {folderContent[openFolder].title}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {folderContent[openFolder].images.map((src) => (
                <img key={src} src={src} alt="" className="w-full h-auto rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}