"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Star, ArrowRight, Play, Code, Zap, Target, BookOpen, Award } from "lucide-react"

export default function LLMCourseLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-card to-background py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            New Course Available
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-primary">Vibe-Coding</span> with AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Master LLM-assisted web development with portable skills that work across any AI assistant. Build
            professional applications while learning future-proof techniques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Play className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <BookOpen className="w-5 h-5 mr-2" />
              View Syllabus
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6-8 Hours Content
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              500+ Students
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current text-primary" />
              4.9/5 Rating
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-space-grotesk)]">
            What You'll Master
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Build transferable skills that work with any AI assistant, from ChatGPT to Claude to future tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "AI-Assisted Development",
                description: "Learn collaborative coding techniques that amplify your productivity with any AI tool.",
              },
              {
                icon: Target,
                title: "Vibe-Coding Philosophy",
                description:
                  "Master the art of intuitive development that goes beyond copy-paste to true collaboration.",
              },
              {
                icon: Zap,
                title: "Modern Web Stack",
                description: "Build with HTML5, CSS3, JavaScript ES6+, and modern frameworks using AI assistance.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Implement testing, debugging, and optimization strategies with AI-powered workflows.",
              },
              {
                icon: Award,
                title: "Portfolio Project",
                description: "Create a professional marketing page (like this one!) as your capstone project.",
              },
              {
                icon: ArrowRight,
                title: "Career Development",
                description: "Build a developer brand and network in the AI-assisted development community.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Course Curriculum
          </h2>

          <div className="space-y-6">
            {[
              {
                module: "Module 1",
                title: "Foundations & Mindset",
                duration: "45 minutes",
                topics: ["Vibe-Coding Philosophy", "Tool-Agnostic Principles", "Environment Setup"],
              },
              {
                module: "Module 2",
                title: "Project Foundation",
                duration: "90 minutes",
                topics: ["AI-Assisted Planning", "Semantic HTML", "Modern CSS", "JavaScript Fundamentals"],
              },
              {
                module: "Module 3",
                title: "Advanced Styling & Interactivity",
                duration: "75 minutes",
                topics: ["CSS Grid & Flexbox", "Interactive Components", "Performance Optimization"],
              },
              {
                module: "Module 4",
                title: "Modern Development Workflow",
                duration: "60 minutes",
                topics: ["Build Tools", "Testing & QA", "Deployment & DevOps"],
              },
              {
                module: "Module 5",
                title: "Debugging & Maintenance",
                duration: "45 minutes",
                topics: ["AI-Assisted Debugging", "Code Refactoring", "Documentation"],
              },
              {
                module: "Module 6",
                title: "Portfolio & Career",
                duration: "45 minutes",
                topics: ["Portfolio Presentation", "Scaling Skills", "Professional Development"],
              },
            ].map((module, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {module.module}
                      </Badge>
                      <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of developers mastering AI-assisted web development. Get early access and exclusive updates.
          </p>

          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe at any time. Course launching soon!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Vibe-Coding with AI</h3>
          <p className="text-muted-foreground mb-6">Building portable skills for modern development</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
