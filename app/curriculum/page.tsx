"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCourseData } from "@/lib/course-data";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

export default function CurriculumPage() {
  const courseData = getCourseData();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-card/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course Overview
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Course Curriculum
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete breakdown of all {courseData.modules.length} modules, covering everything from foundations to deployment.
            Build <span className="text-primary font-semibold">DevTracker</span> step by step.
          </p>
        </div>
      </section>

      {/* Course Overview Stats */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {courseData.overview.duration}
              </div>
              <div className="text-sm text-muted-foreground">Total Duration</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {courseData.modules.length}
              </div>
              <div className="text-sm text-muted-foreground">Modules</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-1">
                1
              </div>
              <div className="text-sm text-muted-foreground">Complete SaaS App</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {courseData.modules.map((module, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3">
                        {module.number}
                      </Badge>
                      <CardTitle className="text-2xl mb-2 font-[family-name:var(--font-space-grotesk)]">
                        {module.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                      
                      {/* Topics as tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {module.topics.map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Detailed sections */}
                  <div className="space-y-6">
                    {module.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border-l-2 border-primary/20 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">
                            {section.title}
                          </h4>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {section.duration}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-[family-name:var(--font-space-grotesk)]">
            What You'll Achieve
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {courseData.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ready to Start Building?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the course and build your complete SaaS application with AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                Back to Overview
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/disclaimer"
              className="hover:text-primary transition-colors"
            >
              Legal Disclaimer
            </Link>
            <span>•</span>
            <span>
              © {new Date().getFullYear()} Meridian Strategic Systems
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}