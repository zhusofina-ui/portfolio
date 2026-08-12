"use client"
import { useState } from 'react'
import { Arrow } from '@/components/doodles'

type ProjectImage = {
  src: string
  captionTitle: string
  captionSubtitle: string
}

type Project = {
  title: string
  color?: string
  images?: ProjectImage[]
}

const playable: Project[] = [
  {
    title: 'static posts',
    tag: 'i like trying different styles!',
    color: 'bg-pink',
    images: [
      {
        src: '/The Youth Horizon Bingo.png',
        captionTitle: 'The Youth Horizon, 2026',
        captionSubtitle: 'Canva'
      },
      {
        src: '/The Youth Horizon Bingo2.png',
        captionTitle: 'The Youth Horizon, 2026',
        captionSubtitle: 'Canva'
      },
      {
        src: 'PYC Media Task 26 - Sofina Zhu (1).png',
        captionTitle: 'Platform for Youth Creativity, 2026',
        captionSubtitle: 'Canva'
      },
      {
        src: 'DECA 26-27 Gr9 Day Poster (1).png',
        captionTitle: 'DECA Chapter Grade 9 Day, 2026',
        captionSubtitle: 'Canva'
      },
      {
        src: 'csacollab.png',
        captionTitle: 'Canadian Scholars Association & The Youth Horizon, 2026',
        captionSubtitle: 'Canva'
      }
    ]
  },
  {
    title: 'carousels',
    tag: 'so much design you need multiple slides',
    color: 'bg-butter',
    images: [
      {
        src: '/Daily Bread Food Bank & The Youth Horizon, 2026.png',
        captionTitle: 'Daily Bread Food Bank & The Youth Horizon, 2026',
        captionSubtitle: 'Adobe Photoshop CC 2026 & Canva'
      },
      {
        src: '/Girls in CS Exec Application Portfolio - Sofina Zhu.png',
        captionTitle: 'The Youth Horizon, 2026',
        captionSubtitle: 'Canva'
      }
    ]
  },
  {
    title: 'merchandise',
    tag: 'i want cool merch too!',
    color: 'bg-blush',
    images: [
      {
        src: '/your-image.png',
        captionTitle: 'new designs coming soon!',
        captionSubtitle: 'come back later~'
      }
    ]
  }
]

const designs: Project[] = [
  {
    title: 'photography',
    tag: 'capturing small moments in life',
    color: 'bg-butter',
    images: [
      {
        src: '/IMG_7250.JPG',
        captionTitle: 'zgdx, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_7366.JPG',
        captionTitle: 'what a pretty lamp, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_7359.JPG',
        captionTitle: 'it is decidedly so, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_7284.JPG',
        captionTitle: 'bateau, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_7252.JPG',
        captionTitle: 'all is smooth sailing, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_7432.JPG',
        captionTitle: '美国人, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      },
      {
        src: '/IMG_0571.jpg',
        captionTitle: 'shiny rock, 2024',
        captionSubtitle: 'iphone 13'
      },
      {
        src: '/IMG_7382.jpg',
        captionTitle: 'glass balloons, 2026',
        captionSubtitle: 'Canon Digital IXUS 900 Ti'
      }
    ]
  },
  {
    title: 'videography',
    tag: '📷 📷 📷',
    color: 'bg-pink',
    images: [
      {
        src: '/your-image.png',
        captionTitle: 'new content coming soon!',
        captionSubtitle: 'come back later~'
      }
    ]
  },
  {
    title: 'miscellaneous',
    tag: 'this website goes here too!',
    color: 'bg-butter',
    images: [
      {
        src: 'sofinazhu (1)_page-0001.jpg',
        captionTitle: 'check out my resume!',
        captionSubtitle: ''
      },
      {
        src: 'xxx.jpg',
        captionTitle: '',
        captionSubtitle: ''
    },
    {
        src: 'flower2.png',
        captionTitle: ' pinkie pie',
        captionSubtitle: 'watercolour, Ø 20 cm'
    },
    {
        src: 'flower1.png',
        captionTitle: 'kaleidoscope',
        captionSubtitle: 'watercolour, Ø 20cm'
    }

    ]
  }
]

function Folder({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full text-left focus:outline-none"
    >
      <div className="relative rounded-xl rounded-tl-none bg-cream/95 p-5 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
        {/* folder tab */}
        <span
          aria-hidden="true"
          className={`absolute -top-3 left-0 h-4 w-24 rounded-t-lg ${project.color}`}
        />
        <h3 className="font-display text-2xl text-cocoa">{project.title}</h3>
        <p className="mt-1 font-hand text-xl text-cocoa/70">{project.tag}</p>
      </div>
    </button>
  )
}

function Column({
  heading,
  projects,
  onProjectClick
}: {
  heading: string
  projects: Project[]
  onProjectClick: (project: Project) => void
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3 text-cream">
        <Arrow className="h-6 w-6 shrink-0 text-butter" />
        <h2 className="text-lg font-semibold uppercase tracking-wide text-butter">
          {heading}
        </h2>
      </div>
      {/* laptop / desk frame */}
      <div className="rounded-2xl border-4 border-blush/80 bg-cocoa/80 p-4">
        <div className="grid gap-4">
          {projects.map((p) => (
            <Folder
              key={p.title}
              project={p}
              onClick={() => onProjectClick(p)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-cocoa py-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* wooden sign */}
        <div className="mx-auto mb-16 w-fit -rotate-2">
          <div className="rounded-lg bg-[oklch(0.41_0.05_55)] px-10 py-5 shadow-xl shadow-black/30 ring-4 ring-[oklch(0.5_0.05_55)]">
            <h2 id="work-heading" className="font-display text-5xl text-cream sm:text-6xl">
              work station
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Column
            heading="DESIGNS"
            projects={playable}
            onProjectClick={setActiveProject}
          />
          <Column
            heading="CONTENT"
            projects={designs}
            onProjectClick={setActiveProject}
          />
        </div>
      </div>

      {/* THE POP-UP (MODAL) */}
      {/* THE POP-UP (MODAL) */}
{activeProject && (
  <div 
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    onClick={() => setActiveProject(null)} 
  >
    <div 
      className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl bg-cream p-8 shadow-2xl border-4 border-pink"
      onClick={(e) => e.stopPropagation()} 
    >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute right-6 top-6 text-2xl text-cocoa transition-colors hover:text-pink"
            >
              ✕
            </button>

            <h2 className="font-display text-5xl text-cocoa">{activeProject.title}</h2>
            <p className="mt-2 font-hand text-2xl text-cocoa/70">{activeProject.tag}</p>

            {/* Scrollable Work Area */}
            <div className={`mt-8 grid gap-8 pb-8 ${activeProject.title === 'static posts' || activeProject.title === 'photography' | activeProject.title === 'miscellaneous' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {activeProject.images && activeProject.images.length > 0 ? (
                activeProject.images.map((img, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <img
            src={img.src}
            alt={img.captionTitle}
            onClick={() => setFullscreenImage(img.src)}
            className="w-full max-w-2xl rounded-xl object-cover shadow-md cursor-zoom-in"
          />
                    <div className="text-center mt-2">
                      <p className="font-sans italic text-xl text-cocoa">
                        {img.captionTitle}
                      </p>
                      <p className="font-sans text-lg text-cocoa/80 mt-1">
                        {img.captionSubtitle}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-80 rounded-xl bg-cocoa/10 flex items-center justify-center text-cocoa/50 font-hand text-xl">
                  Work coming soon!
                </div>
              )}
            </div>
            {/* THE FULLSCREEN IMAGE OVERLAY */}
      {fullscreenImage && (
        <div 
          // Notice z-[200] puts this ABOVE your activeProject modal which is z-[100]
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen View"
            className="max-h-[95vh] max-w-[95vw] object-contain cursor-zoom-out drop-shadow-2xl"
          />
        </div>
      )}
          </div>
        </div>
      )}
    </section>
  )
}