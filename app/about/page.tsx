export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I'm a passionate web developer with experience in creating modern, 
        responsive, and user-friendly websites. I specialize in React, Next.js, 
        and other cutting-edge web technologies.
      </p>
      <p className="mb-4">
        When I'm not coding, you can find me exploring new technologies, 
        contributing to open-source projects, or enjoying outdoor activities.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript / TypeScript</li>
        <li>HTML / CSS</li>
        <li>Node.js</li>
        <li>Git</li>
      </ul>
    </div>
  )
}

