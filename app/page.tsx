'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import { sendEmail } from './actions/send-email'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData)
    setFormStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    })

    if (result.success) {
      // Reset form
      const form = document.getElementById('contact-form') as HTMLFormElement
      form.reset()
    }

    // Clear status after 5 seconds
    setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="https://media.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">David Smith</h1>
          <p className="text-2xl mb-8">Full Stack Software Engineer</p>
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Hello! I&apos;m David Smith, a passionate Full Stack Engineer with 3 years of experience in creating 
              beautiful and functional applications. I specialize in React, Next.js on the Front End and Spring Boot on the Back End.
            </p>
            <p className="text-lg mb-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>HTML / CSS</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
            </p>
            <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-white border border-gray-300 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <a href="https://github.com/dxsmith244" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                  </a>
              </button>
              <button className="bg-white border border-gray-300 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <a href="https://www.linkedin.com/in/david-smith" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Weather App", description: "Full Stack Weather app using a third party API along with basic HTML, CSS and, JS", link:"https://dxsmith244-weatherapp.netlify.app" },
              { title: "AI Chatbot", description: "AI Chatbot using OpenAI made with Next.JS and ReactTS", link:"https://ai-chatbot-dxsmith244s-projects.vercel.app"},
              { title: "Youtube Clone", description: "Youtube Clone with realtime videos that are currently being displayed to new users on youtube site functionality is limited because of the api used doesn't allow hosted websites to play the videos, when installed locally and with the proper api key it will play videos fetch the comments and descriptions along with showing recommended videos for the currently watched video", link:"https://ddtv.vercel.app"}
            ].map((project, index) => (
              <Card key={index} className="bg-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                  {project.title === "Youtube Clone" && (
                    <Button variant="secondary" className="bg-gray-600 text-white hover:bg-gray-700">
                      <a href="https://github.com/dxsmith244/youtube-clone" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Your message here..." required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            {formStatus.type && (
              <div className={`mt-4 p-2 rounded ${formStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {formStatus.message}
              </div>
            )}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Or reach out directly:</p>
            <div className="flex justify-center space-x-4">
            <button className="bg-white border border-gray-300 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <a href="mailto:dxsmith244@gmail.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </button>
              <button className="bg-white border border-gray-300 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <a href="https://linkedin.com/in/david-smith" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()}  David Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

