import { Arrow } from '@/components/doodles'

type Project = {
  title: string
  tag: string
  color: string
}

const playable: Project[] = [
  { title: 'animations', tag: 'motion / after effects', color: 'bg-pink' },
  { title: 'edits', tag: 'video / davinci', color: 'bg-butter' },
  { title: 'sound', tag: 'audio / experiments', color: 'bg-blush' },
]

const designs: Project[] = [
  { title: 'illustrations', tag: 'procreate', color: 'bg-butter' },
  { title: 'brand kits', tag: 'illustrator', color: 'bg-pink' },
  { title: '3D scenes', tag: 'blender', color: 'bg-blush' },
]

function Folder({ project }: { project: Project }) {
  return (
    <a
      href="#contact"
      className="group relative block focus:outline-none"
    >
      <div className="relative rounded-xl rounded-tl-none bg-cream/95 p-5 shadow-lg shadow-black/20 transition-transform duration-200 group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
        {/* folder tab */}
        <span
          aria-hidden="true"
          className={`absolute -top-3 left-0 h-4 w-24 rounded-t-lg ${project.color}`}
        />
        <h4 className="font-display text-2xl text-cocoa">{project.title}</h4>
        <p className="mt-1 font-hand text-xl text-cocoa/70">{project.tag}</p>
      </div>
    </a>
  )
}

function Column({
  heading,
  projects,
}: {
  heading: string
  projects: Project[]
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3 text-cream">
        <Arrow className="h-6 w-6 shrink-0 text-butter" />
        <h3 className="text-lg font-semibold uppercase tracking-wide sm:text-xl">
          {heading}
        </h3>
      </div>
      {/* laptop / book frame */}
      <div className="rounded-2xl border-4 border-blush/80 bg-cocoa/40 p-4">
        <div className="grid gap-4">
          {projects.map((p) => (
            <Folder key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-cocoa py-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* wooden sign */}
        <div className="mx-auto mb-16 w-fit -rotate-1">
          <div className="rounded-lg bg-[oklch(0.42_0.05_55)] px-10 py-5 shadow-xl shadow-black/30 ring-4 ring-[oklch(0.5_0.05_55)]">
            <h2
              id="work-heading"
              className="font-display text-4xl text-cream sm:text-5xl"
            >
              work - station
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <Column heading="playable content (open folders!)" projects={playable} />
          <Column
            heading="drawings and designs (click to open!)"
            projects={designs}
          />
        </div>
      </div>
    </section>
  )
}
