"use client";
import { useState } from "react";

type FolderKey =
  | "staticPosts"
  | "carousels"
  | "branding"
  | "photography"
  | "videography"
  | "misc";

type ImageItem = {
  label: string;
  popupTitle: string;
  images: ImageItem[]; // 4 slots, A4-proportioned
};

const folderContent: Record<Exclude<FolderKey, "staticPosts">, FolderData> = {
  carousels: {
    title: "Carousels",
    layout: "single",
    images: [
      { src: "/.png", title: "Title", caption: "Short caption here" },
      { src: "", title: "", caption: "" },
    ],
  },
  branding: {
    title: "Branding & Collaborations",
    layout: "single",
    images: [
      { 
        src: "/designs/branding-1.png", 
        title: "Your Title Here", 
        caption: "Your caption here" 
      }
    ],
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

const hotspotLabels: Record<FolderKey, string> = {
  staticPosts: "Static Posts",
  carousels: "Carousels",
  branding: "Branding & Collaborations",
  photography: "Photography",
  videography: "Videography",
  misc: "Miscellaneous",
};

type SubfolderKey = "sub1" | "sub2" | "sub3" | "sub4" | "sub5";

type Subfolder = {
  key: SubfolderKey;
  label: string;
  popupTitle: string;
  images: ImageItem[]; // 4 slots, A4-proportioned
};

const staticPostsSubfolders: Subfolder[] = [
  {
    key: "sub1",
    label: "The Youth Horizon",
    popupTitle: "The Youth Horizon",
    images: [
      { src: "/The Peer Power Project & The Youth Horizon, 2026 (Canva).png", title: "The Peer Power Project & The Youth Horizon, 2026", caption: "Canva" },
      { src: "/The Youth Horizon, 2026 (Canva)(1).png", title: "The Youth Horizon, 2026", caption: "Canva" },
      { src: "/The Youth Horizon, 2026 (Canva).png", title: "The Youth Horizon, 2026", caption: "Canva" },
    ],
  },
  {
    key: "sub2",
    label: "Plaform for Youth Creativity",
    popupTitle: "Plaform for Youth Creativity",
    images: [
      { src: "/designs/static/sub-2.png", title: "Title", caption: "Short caption here" },
      { src: "", title: "", caption: "" },
      { src: "", title: "", caption: "" },
      { src: "", title: "", caption: "" },
    ],
  },
  {
    key: "sub3",
    label: "Fuse Society",
    popupTitle: "Fuse Society",
    images: [
      { src: "/FUSE Deadline Sept 9.png", title: "Fuse Society", caption: "Canva" },
      { src: "/26-27 ambassador hiring introduction post.png", title: "Fuse Society", caption: "Canva" },
    ],
  },
  {
    key: "sub4",
    label: "MDHS DECA Chapter",
    popupTitle: "DECA Chapter",
    images: [
      { src: "/DECA Chapter Grade 9 Day, 2026 (Canva).png", title: "MDHS DECA Chapter", caption: "Canva" },
      { src: "/deca intro meeting.png", title: "MDHS DECA Chapter", caption: "Canva" },
      { src: "/deca is back post.png", title: "MDHS DECA Chapter", caption: "Canva" },
    ],
  },
  {
    key: "sub5",
    label: "Independent Designs",
    popupTitle: "Independent Designs",
    images: [
      { src: "/drink poster.png", title: "Independent Design", caption: "Canva" },
    ],
  },
];

const VERTICAL_SHIFT = -11.5; // % — negative moves hotspots up.

const hotspots: { key: FolderKey; top: number; left: string; width: string; height: string }[] = [
  { key: "staticPosts", top: 62.0 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "carousels",   top: 73.5 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "branding",    top: 85.0 + VERTICAL_SHIFT, left: "4.7%",  width: "23.5%", height: "10.5%" },
  { key: "photography", top: 62.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "videography", top: 73.5 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "misc",        top: 85.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
];

// "square" = 1:1 (photography/misc thumbnails). "a4" = 210:297 portrait (Static Posts sub-folders).
// titleFont = true swaps the <h3> below the image to var(--font-title) instead of the default site font.
function ThumbnailCard({
  item,
  aspect = "square",
  titleFont = false,
}: {
  item: ImageItem;
  aspect?: "square" | "a4";
  titleFont?: boolean;
}) {
  const aspectClass = aspect === "a4" ? "aspect-[210/297]" : "aspect-square";

  return (
    <div className="flex flex-col">
      {item.src ? (
        <img
          src={item.src}
          alt={item.title ?? ""}
          className={`w-full ${aspectClass} object-contain rounded-lg bg-pink-50/40`}
        />
      ) : (
        <div className={`w-full ${aspectClass} rounded-lg border-2 border-dashed border-pink-200 bg-pink-50/40`} />
      )}
      {item.title ? (
        <h3
          className="mt-2 text-sm font-semibold bg-gradient-to-r from-[#8fad54] to-[#c1d4b9] bg-clip-text text-transparent"
          style={titleFont ? { fontFamily: "var(--font-title)" } : undefined}
        >
          {item.title}
        </h3>
      ) : (
        <div className="mt-2 h-3.5 w-2/3 rounded bg-pink-50/60" />
      )}
      {item.caption ? (
        <p className="text-sm text-pink-200 ">{item.caption}</p>
      ) : (
        <div className="mt-1 h-2.5 w-1/2 rounded bg-pink-50/40" />
      )}
    </div>
  );
}

function FolderRow({ label, tabColor, onClick }: { label: string; tabColor: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative block w-full text-left">
      <span className={`absolute -top-2 left-4 h-3 w-20 rounded-t-lg ${tabColor}`} />
      <span className="relative block w-full rounded-2xl bg-white px-6 py-6 shadow-sm transition-shadow hover:shadow-md">
        <span className="text-xl font-bold text-pink-400">{label}</span>
      </span>
    </button>
  );
}

export function Work() {
  const [openFolder, setOpenFolder] = useState<FolderKey | null>(null);
  const [activeSubfolder, setActiveSubfolder] = useState<SubfolderKey | null>(null);

  const closeAll = () => {
    setOpenFolder(null);
    setActiveSubfolder(null);
  };

  const openHotspot = (key: FolderKey) => {
    setActiveSubfolder(null);
    setOpenFolder(key);
  };

  const folderData = openFolder && openFolder !== "staticPosts" ? folderContent[openFolder] : null;
  const activeSubfolderData = staticPostsSubfolders.find((sf) => sf.key === activeSubfolder) ?? null;

  return (
    <div className="relative w-full">
      <img
        src="/portfoliocover.png"
        alt="Work station"
        className="w-full h-auto block"
      />

      {hotspots.map((spot) => (
        <button
          key={spot.key}
          onClick={() => openHotspot(spot.key)}
          aria-label={hotspotLabels[spot.key]}
          className="absolute cursor-pointer bg-transparent border-0 p-0"
          style={{ top: `${spot.top}%`, left: spot.left, width: spot.width, height: spot.height }}
        />
      ))}

      {openFolder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={closeAll}
        >
          <div
            className="relative w-[70%] max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAll}
              className="absolute top-4 right-4 text-pink-500 text-xl"
              aria-label="Close"
            >
              ✕
            </button>

            {openFolder === "staticPosts" ? (
              activeSubfolderData ? (
                // ----- Sub-folder detail view: 2x2 grid of A4-proportioned images -----
                <>
                  <button
                    onClick={() => setActiveSubfolder(null)}
                    className="mb-4 text-sm font-semibold text-pink-400 hover:text-pink-500"
                  >
                    ← Back
                  </button>
                  <h2 className="text-2xl font-bold text-pink-500 mb-6">
                    {activeSubfolderData.popupTitle}
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {activeSubfolderData.images.map((img, i) => (
                      <ThumbnailCard
                        key={img.src || `${activeSubfolderData.key}-blank-${i}`}
                        item={img}
                        aspect="a4"
                        titleFont
                      />
                    ))}
                  </div>
                </>
              ) : (
                // ----- Static Posts: list of 5 sub-folders -----
                <>
                  <h2 className="text-2xl font-bold text-pink-500 mb-6">Static Posts</h2>
                  <div className="space-y-5">
                    {staticPostsSubfolders.map((sf, i) => (
                      <FolderRow
                        key={sf.key}
                        label={sf.label}
                        tabColor={i % 2 === 0 ? "bg-pink-200" : "bg-pink-400"}
                        onClick={() => setActiveSubfolder(sf.key)}
                      />
                    ))}
                  </div>
                </>
              )
            ) : (
              folderData && (
                <>
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
                </>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}