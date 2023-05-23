export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left side */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-400 blur-full" />
        {/* stripe */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      {/* right side */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed">
            Pin your first good time,{' '}
            <a href="" className="italic underline hover:text-indigo-500">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
