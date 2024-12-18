'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

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
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <p className="text-2xl mb-8">Web Developer & Designer</p>
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
              Hello! I'm John Doe, a passionate web developer with 5 years of experience in creating 
              beautiful and functional websites. I specialize in React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <Button variant="outline" size="icon">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with Next.js and Stripe" },
              { title: "Task Management App", description: "A React-based task manager with drag-and-drop functionality" },
              { title: "Portfolio Website", description: "A responsive portfolio website showcasing my work and skills" }
            ].map((project, index) => (
              <Card key={index} className="bg-gray-700">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href="#">View Project</a>
                  </Button>
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
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Or reach out directly:</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <a href="mailto:john@example.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

