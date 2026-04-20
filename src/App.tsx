import { ArrowUpRight, BriefcaseBusiness, Globe, Layers, Mail, Star } from 'lucide-react'

const projects = [
  {
    title: 'Daviz Class (RavenStack Analytics)',
    description: 'Dashboard visualisasi data berbasis AI untuk proyek akhir mata kuliah Data Visualisasi.',
    href: '/davizclass',
    repo: 'https://github.com/IrmandoKoyo/ravenstack-ai-dashboard',
    status: 'Live',
  },
  {
    title: 'Unklab Dining System',
    description: 'Platform manajemen kantin kampus dengan fitur meal tracking, menu interaktif, dan kartu identitas digital.',
    href: '/frontendclass',
    repo: 'https://github.com/IrmandoKoyo/unklab-dining-portal',
    status: 'Live',
  },
  {
    title: 'Klinik Sentosa SIM',
    description: 'Sistem Informasi Manajemen Klinik kelas enterprise dengan fitur pendaftaran pasien, rekam medis elektronik, dan farmasi terintegrasi.',
    href: '/sadclass',
    repo: 'https://github.com/IrmandoKoyo/Klinik-Sentosa-SIM',
    status: 'Live',
  },
  {
    title: 'Unfollower Detector',
    description: 'Deteksi siapa yang tidak follback kamu di Instagram secara aman tanpa login password.',
    href: '/unfollowerdetector',
    repo: 'https://github.com/IrmandoKoyo/unfollower-detector',
    status: 'Live',
  },
  { title: 'Unklab Insight', description: 'Portal visual project showcase dan progress engineering UPRO.', href: '#', status: 'Planning' },
]

const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Supabase', 'Python']

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-base text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 soft-grid" />
      <div className="pointer-events-none absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pt-12">
        <header className="mb-16">
          <div className="mb-7 inline-flex items-center border border-line bg-panel/80 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
            Unklab Projects
          </div>
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Semua proyek dalam satu halaman.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg">
              Tempat sederhana untuk melihat dan membuka proyek.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-[#e5b88b]">
                Lihat Project
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </header>

        <section id="projects" className="mb-16">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
              <BriefcaseBusiness size={24} className="text-accent" />
              Proyek Unggulan
            </h2>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-zinc-300">Daftar Proyek</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-accent/60">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-full border border-line px-2.5 py-1 text-xs text-zinc-300">{project.status}</div>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub ${project.title}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-zinc-300 transition hover:border-accent/60 hover:text-accent"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="fill-current">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.51 2.33 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.58 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                      </svg>
                    </a>
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 min-h-16 text-sm text-zinc-300">{project.description}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a href={project.href} className="inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:text-[#efc49b]">
                    Buka Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur sm:p-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
            <Layers size={23} className="text-accent" />
            Teknologi
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((item) => (
              <span key={item} className="rounded-lg border border-line bg-[#1d1d1d] px-3 py-2 text-sm text-zinc-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-6">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-wide text-zinc-400">
              <Star size={16} className="text-accent" />
              Tujuan
            </p>
            <h2 className="text-2xl font-semibold">Bikin project lebih rapi.</h2>
            <p className="mt-4 text-zinc-300">
              Satu tempat untuk menyimpan, melihat, dan membagikan proyek.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-6">
            <p className="mb-2 text-sm uppercase tracking-wide text-zinc-400">Path</p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2"><Globe size={16} className="text-accent" />`upro.web.id` untuk homepage utama.</li>
              <li className="flex items-center gap-2"><ArrowUpRight size={16} className="text-accent" />`upro.web.id/davizclass` untuk proyek visualisasi data.</li>
              <li className="flex items-center gap-2"><ArrowUpRight size={16} className="text-accent" />`upro.web.id/frontendclass` untuk proyek sistem kantin.</li>
              <li className="flex items-center gap-2"><ArrowUpRight size={16} className="text-accent" />`upro.web.id/sadclass` untuk sistem informasi manajemen klinik.</li>
              <li className="flex items-center gap-2"><ArrowUpRight size={16} className="text-accent" />`upro.web.id/unfollowerdetector` untuk deteksi unfollower Instagram.</li>
              <li className="flex items-center gap-2"><Layers size={16} className="text-accent" />Mudah ditambah untuk proyek berikutnya.</li>
            </ul>
          </div>
        </section>

        <footer id="contact" className="rounded-2xl border border-line bg-panel/85 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-zinc-400">Kontak</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">GitHub dan email project.</h2>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-zinc-200 transition hover:border-accent/60 hover:text-accent">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="fill-current">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.51 2.33 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.58 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                GitHub
              </a>
              <a href="mailto:hello@upro.web.id" className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-[#e5b88b]">
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
          <p className="mt-7 text-xs text-zinc-500">© {new Date().getFullYear()} Unklab Projects</p>
        </footer>
      </main>
    </div>
  )
}

export default App
