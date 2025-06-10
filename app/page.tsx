import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and data visualization",
      tech: ["React", "TypeScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for multiple client projects using React and Next.js",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using MERN stack",
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Built responsive websites and learned modern web development practices",
    },
    
  ]

  return (
    <div className="min-h-screen sky-background text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              {/* <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link> */}
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/myfoto.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary">Bima Putra Ananta</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-xl">
              Backend Developer passionate about creating beautiful and functional web applications
            </p>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            {/* <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button> */}
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Choota08" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/bima-ananta-6bb9b031b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:bimaputraananta08@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mt-4 text-muted-foreground">Get to know me better</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Saya merupakan siswa aktif SMK Telkom Malang jurusan Rekayasa Perangkat Lunak. Saya memiliki
              ketertarikan yang besar dalam bidang pengembangan perangkat lunak, terutama dalam pengembangan web. Saya
              telah mengembangkan beberapa proyek pribadi yang mencakup berbagai teknologi modern seperti React, Next.js,
              dan Node.js. Selain itu, saya juga aktif dalam komunitas pengembangan perangkat lunak di sekolah dan
              berpartisipasi dalam berbagai kompetisi coding. Saya selalu berusaha untuk terus belajar dan mengembangkan
              keterampilan saya dalam bidang ini. Saya percaya bahwa teknologi dapat digunakan untuk menciptakan solusi
              yang inovatif dan bermanfaat bagi masyarakat. Saya berharap dapat berkontribusi dalam industri teknologi
              dan terus mengembangkan diri sebagai seorang pengembang perangkat lunak yang handal.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section
      <section id="skills" className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
            <p className="mt-4 text-muted-foreground">Technologies I work with</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      {/* <section id="projects" className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">Some of my recent work</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section
      <section id="experience" className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
            <p className="mt-4 text-muted-foreground">My professional journey</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">Let's work together</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">bimaputraananta08@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+62 895-4109-42260</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Malang, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">https://github.com/Choota08</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href="mailto:john@example.com">Send Message</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Bima Putra Ananta.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
