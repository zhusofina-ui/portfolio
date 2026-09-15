"use client";
import { useState } from "react";

export type FolderKey =
  | "staticPosts"
  | "carousels"
  | "branding"
  | "photography"
  | "videography"
  | "misc";

export type ImageItem = {
  src: string;
  title?: string;
  caption?: string;
};

export type FolderData = {
  title: string;
  layout: "grid" | "single";
  images: ImageItem[];
};

const folderContent: Record<Exclude<FolderKey, "staticPosts">, FolderData> = {
  carousels: {
    title: "Carousels & Banners",
    layout: "single",
    images: [
      {
        src: "/2-imageonline.co-merged (4).png",
        title: "The Peer Power Project & The Youth Horizon, 2026",
        caption: "Canva",
      },
      {
        src: "/Daily Bread Food Bank & The Youth Horizon, 2026.png",
        title: "Daily Bread Food Bank & The Youth Horizon, 2026",
        caption: "Adobe Photoshop CC 2026 & Canva",
      },
      {
        src: "/4-imageonline.co-merged.png",
        title: "MDHS DECA Chapter, 2026",
        caption: "Canva",
      }
    ],
  },
  branding: {
    title: "Branding & Collaborations",
    layout: "single",
    images: [
      {
        src: "/2-imageonline.co-merged-imageonline.co-merged (1).png",
        title: "mello, 2026",
        caption: "mello is a concept café & bakery brand built around a whimsical and sweet visual identity that includes illustrated desserts, drinks, and details to create a warm, 'collected by hand' feel. (Canva)",
      },
      {
        src: "/fusexblume (7)-imageonline.co-merged-imageonline.co-merged.png",
        title: "Fuse Society & Blume, 2026",
        caption: "A collaborative pitch deck for a partnership between Fuse Society (fusesociety.ca), a youth-driven platform, and established wellness brand Blume (itsblume.com), utilizing soft gradients and branded typography. (Canva)",
      },
    ],
  },
  photography: {
    title: "Photography",
    layout: "grid",
    images: [
      { src: "IMG_7250.JPG", title: "ocean, 2026", caption: "canon digital IXUS 900 ti" },
      { src: "IMG_7366.JPG", title: "shiny lamp, 2026", caption: "canon digital IXUS 900 ti" },
      { src: "IMG_7359.JPG", title: "magic 8 ball, 2026", caption: "canon digital IXUS 900 ti" },
      { src: "IMG_7284.JPG", title: "bateau, 2026", caption: "canon digital IXUS 900 ti" },
      { src: "IMG_7252.JPG", title: "smooth sailing, 2026", caption: "canon digital IXUS 900 ti" },
      { src: "IMG_7432.JPG", title: "美国人, 2026", caption: "canon digital IXUS 900 ti" },
    ],
  },
  videography: {
    title: "Videography",
    layout: "grid",
    images: [{ src: "/content/video-1.png", title: "new content coming soon!", caption: "come back later!" }],
  },
  misc: {
    title: "Miscellaneous",
    layout: "grid",
    images: [
      { src: "flower1.png", title: "kaleidoscope", caption: "watercolour, Ø 20 cm" },
      { src: "flower2.png", title: "pinkie pie", caption: "watercolour, Ø 20 cm" },
      { src: "/sofinazhu.resume (4)_page-0001.jpg", title: "Check out my resume!", caption: "" },

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
  images: ImageItem[];
};

const staticPostsSubfolders: Subfolder[] = [
  {
    key: "sub1",
    label: "The Youth Horizon",
    popupTitle: "The Youth Horizon",
    images: [
      { src: "/The Peer Power Project & The Youth Horizon, 2026 (Canva).png", title: "The Peer Power Project", caption: "Canva" },
      { src: "/The Youth Horizon, 2026 (Canva)(1).png", title: "The Youth Horizon", caption: "Canva" },
      { src: "/The Youth Horizon, 2026 (Canva).png", title: "The Youth Horizon", caption: "Canva" },
    ],
  },
  {
    key: "sub2",
    label: "Platform for Youth Creativity",
    popupTitle: "Platform for Youth Creativity",
    images: [
      { src: "/pyc exec intros (2).png", title: "Platform for Youth Creativity, 2026", caption: "Canva" },
      { src: "/pyc exec intros.png", title: "Platform for Youth Creativity, 2026", caption: "Canva" },
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
      { src: "/gaussianstar.png", title: "Independent Design", caption: "Adobe Illustrator CC 2026" },
    ],
  },
];

const VERTICAL_SHIFT = -11.5;

const hotspots: { key: FolderKey; top: number; left: string; width: string; height: string }[] = [
  { key: "staticPosts", top: 62.0 + VERTICAL_SHIFT, left: "4.7%", width: "23.5%", height: "10.5%" },
  { key: "carousels", top: 73.5 + VERTICAL_SHIFT, left: "4.7%", width: "23.5%", height: "10.5%" },
  { key: "branding", top: 85.0 + VERTICAL_SHIFT, left: "4.7%", width: "23.5%", height: "10.5%" },
  { key: "photography", top: 62.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "videography", top: 73.5 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
  { key: "misc", top: 85.0 + VERTICAL_SHIFT, left: "32.0%", width: "23.5%", height: "10.5%" },
];

function ThumbnailCard({
  item,
  aspect = "square",
  titleFont = false,
  onZoom,
}: {
  item: ImageItem;
  aspect?: "square" | "a4";
  titleFont?: boolean;
  onZoom?: (src: string) => void;
}) {
  const aspectClass = aspect === "a4" ? "aspect-[210/297]" : "aspect-square";

  return (
    <div className="flex flex-col w-full">
      {item.src ? (
        <img
          src={item.src}
          alt={item.title ?? ""}
          onClick={() => onZoom && onZoom(item.src)}
          className={`w-full ${aspectClass} object-contain rounded-lg bg-pink-50/40 ${onZoom ? 'cursor-zoom-in' : ''}`}
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
        <p className="text-sm text-pink-200">{item.caption}</p>
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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
        src="/portfoliocover-02.png"
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
                        onZoom={(src) => setZoomedImage(src)}
                      />
                    ))}
                  </div>
                </>
              ) : (
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
                        <ThumbnailCard 
                          key={img.src || `blank-${i}`} 
                          item={img} 
                          onZoom={(src) => setZoomedImage(src)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-10">
                      {folderData.images.map((img, i) => (
                        <div key={img.src || `blank-${i}`} className="flex flex-col w-full">
                          {img.src ? (
                            <img 
                              src={img.src} 
                              alt={img.title || ""} 
                              onClick={() => setZoomedImage(img.src)}
                              className="w-full h-auto object-contain rounded-lg shadow-sm bg-pink-50/40 cursor-zoom-in" 
                            />
                          ) : (
                            <div className="w-full h-64 rounded-lg border-2 border-dashed border-pink-200 bg-pink-50/40" />
                          )}
                          
                          {img.title && (
                            <h3 className="mt-3 text-lg font-bold bg-gradient-to-r from-[#8fad54] to-[#c1d4b9] bg-clip-text text-transparent">
                              {img.title}
                            </h3>
                          )}
                          {img.caption && (
                            <p className="mt-1 text-sm text-pink-400">{img.caption}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )
            )}
          </div>
        </div>
      )}

      {/* Full Screen Image Zoom Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <img 
            src={zoomedImage} 
            alt="Zoomed full size" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}