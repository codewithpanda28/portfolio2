export default function Skills() {
    const skills = [
      {
        category: 'Frontend',
        items: [
          { name: 'JavaScript', level: 90 },
          { name: 'React', level: 85 },
          { name: 'Next.js', level: 80 },
          { name: 'TypeScript', level: 75 },
          { name: 'Tailwind CSS', level: 90 },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Node.js', level: 75 },
          { name: 'Express', level: 70 },
          { name: 'MongoDB', level: 65 },
          { name: 'PostgreSQL', level: 60 },
        ],
      },
      {
        category: 'Tools',
        items: [
          { name: 'Git', level: 85 },
          { name: 'Docker', level: 60 },
          { name: 'Figma', level: 75 },
          { name: 'VS Code', level: 90 },
        ],
      },
    ]
  
    return (
      <div className="min-h-screen max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Skills & Expertise</h1>
        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 inline-block">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }