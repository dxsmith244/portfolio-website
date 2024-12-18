import Image from 'next/image'

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    imageUrl: "/placeholder.svg?height=200&width=300"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

