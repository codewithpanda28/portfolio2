import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <Image
            src="/logo.jpg"
            alt="About Me"
            width={500}
            height={500}
            className="relative z-10 rounded-2xl"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-gray-400">
            I'm a passionate web developer with a strong focus on creating beautiful and functional
            web applications. With several years of experience in the field, I've worked on various
            projects that have helped me develop a deep understanding of modern web technologies.
          </p>
          <p className="text-gray-400">
            My journey in web development started with a curiosity about how websites work, and
            that curiosity has evolved into a professional career where I get to build amazing
            digital experiences every day.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-400">1+ years of professional experience in web development</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">Bachelor's degree in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}