import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors group"
          >
            <div className="aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/pro2.png"
                alt={`Project ${i}`}
                width={400}
                height={225}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p className="text-gray-400 mb-4">
              A detailed description of the project, its features, and the problem it solves.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}