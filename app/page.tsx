"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmailSignup } from "@/components/email-signup"
import { NEWSLETTER_CONFIG } from "@/config/newsletter"
import { getCourseData, getHighlightIcon, getCourseStats } from "@/lib/course-data"
import { CheckCircle, Clock, Users, Star, ArrowRight, Play, Code, Zap, Target, BookOpen, Award } from "lucide-react"

export default function LLMCourseLanding() {
  const courseData = getCourseData()
  const courseStats = getCourseStats()

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
            Master LLM-assisted web development by building{' '}
            <span className="text-primary font-semibold">DevTracker</span> - a complete CRUD SaaS application. 
            Learn portable skills that work across any AI assistant.
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
            {courseStats.map((stat, index) => {
              const IconComponent = stat.icon === 'Clock' ? Clock : stat.icon === 'Users' ? Users : Star
              return (
                <div key={index} className="flex items-center gap-2">
                  <IconComponent className={`w-4 h-4 ${stat.icon === 'Star' ? 'fill-current text-primary' : ''}`} />
                  {stat.text}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image
                  src="/api/placeholder/160/160"
                  alt="Course Instructor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full bg-gradient-to-br from-primary/20 to-primary/10"
                  priority={false}
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                Meet Your Instructor
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Learn from a practitioner who's been building with AI assistance since the early days. 
                This course distills years of experience into practical, immediately applicable techniques.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  10+ Years Development
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  AI-First Workflow Pioneer
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Trusted by 500+ Developers
                </div>
              </div>
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
            {courseData.highlights.map((highlight, index) => {
              const IconComponent = getHighlightIcon(highlight.icon)
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{highlight.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
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
            {courseData.modules.map((module, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {module.number}
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

          <EmailSignup 
            substackUrl={NEWSLETTER_CONFIG.substackUrl}
            placeholder="Enter your email"
            buttonText="Get Started"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          />

          <p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe at any time. Course launching soon!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Legal Disclaimer
            </Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} Vibe-Coding with AI</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
