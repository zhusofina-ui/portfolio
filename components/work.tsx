"use client"
import { useState } from 'react'
import { Arrow } from '@/components/doodles'

type ProjectImage = {
  src: string
  caption: string
}

type Project = {
  title: string
  tag: string
  color?: string
  images?: ProjectImage[]
}

const playable: Project[] = [
  { 
    title: 'static posts', 
    tag: 'canva', 
    color: 'bg-pink',
    images: [
      { src: '/post1.jpg', caption: 'My first social media campaign' },
      { src: '/post2.jpg', caption: 'Some cool typography experiments' }
    ]
  },
  { 
    title: 'carousels', 
    tag: 'video / davinci', 
    color: 'bg-butter',
    images: [
      { src: '/Daily Bread Food Bank & The Youth Horizon, 2026.png', caption: 'Daily Bread Food Bank & The Youth Horizon, 2026' },
      { src: '/carousel2.jpg', caption: 'Step-by-step tutorial layouts' }
    ]
  },
  { 
    title: 'merchandise', 
    tag: 'audio / experiments', 
    color: 'bg-blush',
    images: [
      { src: '/merch1.jpg', caption: 'T-shirt design mockup' },
      { src: '/merch2.jpg', caption: 'Custom sticker pack concepts' }
    ]
  },
]

const designs: Project[] = [
  { 
    title: 'photography', 
    tag: 'procreate', 
    color: 'bg-butter',
    images: [
      { src: '/photo1.jpg', caption: 'Portrait lighting study' },
      { src: '/photo2.jpg', caption: 'Street photography in the city' }
    ]
  },
  { 
    title: 'videography', 
    tag: 'illustrator', 
    color: 'bg-pink',
    images: [
      { src: '/video1.jpg', caption: 'Short film thumbnail design' },
      { src: '/video2.jpg', caption: 'Music video color grading examples' }
    ]
  },
  { 
    title: 'miscellaneous', 
    tag: 'blender', 
    color: 'bg-butter',
    images: [
      { src: '/3d1.jpg', caption: 'My very first 3D donut' },
      { src: '/3d2.jpg', caption: 'Abstract metallic rendering' }
    ]
  },
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
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl bg-cream p-8 shadow-2xl border-4 border-pink">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute right-6 top-6 text-2xl text-cocoa transition-colors hover:text-pink"
            >
              ✕
            </button>

            <h2 className="font-display text-5xl text-cocoa">{activeProject.title}</h2>
            <p className="mt-2 font-hand text-2xl text-cocoa/70">{activeProject.tag}</p>

            {/* Scrollable Work Area */}
            <div className="mt-8 grid gap-8 pb-8">
              {activeProject.images && activeProject.images.length > 0 ? (
                activeProject.images.map((img, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <img 
                      src={img.src} 
                      alt={img.caption} 
                      className="w-full max-w-2xl rounded-xl object-cover shadow-md"
                    />
                    <p className="font-hand text-xl text-cocoa/80 text-center">
                      {img.caption}
                    </p>
                  </div>
                ))
              ) : (
                <div className="h-80 rounded-xl bg-cocoa/10 flex items-center justify-center text-cocoa/50 font-hand text-xl">
                  Work coming soon!
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}