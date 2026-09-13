"use client";
import { useState } from "react";

type FolderKey =
  | "staticPosts"
  | "carousels"
  | "branding"
  | "photography"
  | "videography"
  | "misc";

type ImageItem = { src: string; title?: string; caption?: string };

type FolderData = {
  title: string;
  layout: "grid" | "single"; // "grid" = smaller thumbnails w/ title+caption
  images: ImageItem[];
};

const folderContent: Record<FolderKey, FolderData> = {
  staticPosts: {
    title: "Static Posts",
    layout: "grid",
    images: [
      { src: "/designs/static-1.png", title: "Post title", caption: "Short caption here" },
      { src: "/designs/static-2.png", title: "Post title", caption: "Short caption here" },
      { src: "", title: "", caption: "" }, // blank reserved slot
    ],
  },
  carousels: {
    title: "Carousels",
    layout: "single",
    images: [{ src: "/designs/carousel-1.png" }],
  },
  branding: {
    title: "Branding & Collaborations",
    layout: "single",
    images: [{ src: "/designs/branding-1.png" }],
  },
  photography: {
    title: "Photography",
    layout: "grid",
    images: [
      { src: "/content/photo-1.png", title: "Photo title", caption: "Short caption here" },
      { src: "", title: "", caption: "" },
    ],
  },
  videography: {
    title: "Videography",
    layout: "single",
    images: [{ src: "/content/video-1.png" }],
  },
  misc: {
    title: "Miscellaneous",
    layout: "grid",
    images: [
      { src: "/content/misc-1.png", title: "Title", caption: "Short caption here" },
      { src: "", title: "", caption: "" },
    ],
  },
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

function ThumbnailCard({ item }: { item: ImageItem }) {
  return (
    <div className="flex flex-col">
      {item.src ? (
        <img src={item.src} alt={item.title ?? ""} className="w-full aspect-square object-cover rounded-lg" />
      ) : (
        <div className="w-full aspect-square rounded-lg border-2 border-dashed border-pink-200 bg-pink-50/40" />
      )}
      {item.title ? (
        <h3 className="mt-2 text-sm font-semibold text-gray-800">{item.title}</h3>
      ) : (
        <div className="mt-2 h-3.5 w-2/3 rounded bg-pink-50/60" />
      )}
      {item.caption ? (
        <p className="text-xs text-gray-500">{item.caption}</p>
      ) : (
        <div className="mt-1 h-2.5 w-1/2 rounded bg-pink-50/40" />
      )}
    </div>
  );
}

export function Work() {
  const [openFolder, setOpenFolder] = useState<FolderKey | null>(null);
  const folderData = openFolder ? folderContent[openFolder] : null;

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
          style={{ top: `${spot.top}%`, left: spot.left, width: spot.width, height: spot.height }}
        />
      ))}

      {folderData && (
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
            <h2 className="text-2xl font-bold text-pink-500 mb-4">{folderData.title}</h2>

            {folderData.layout === "grid" ? (
              <div className="grid grid-cols-2 gap-6">
                {folderData.images.map((img, i) => (
                  <ThumbnailCard key={img.src || `blank-${i}`} item={img} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {folderData.images.map((img) => (
                    <img key={img.src} src={img.src} alt="" className="w-full h-auto rounded-lg" />
                  ))}
                </div>
                <div className="mt-4 w-full aspect-square rounded-lg border-2 border-dashed border-pink-200 bg-pink-50/40" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}