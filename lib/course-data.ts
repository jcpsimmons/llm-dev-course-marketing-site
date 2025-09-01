import courseData from '@/config/course.json'
import { Code, Target, Zap, CheckCircle, Award, ArrowRight } from 'lucide-react'

export interface CourseSection {
  title: string
  duration: string
  points: string[]
}

export interface CourseModule {
  number: string
  title: string
  duration: string
  topics: string[]
  sections: CourseSection[]
}

export interface CourseHighlight {
  title: string
  description: string
  icon: string
}

export interface CourseOverview {
  duration: string
  format: string
  platform: string
  description: string
}

export interface CourseStats {
  duration: string
  students: string
  rating: string
}

export interface CourseData {
  title: string
  subtitle: string
  overview: CourseOverview
  primaryProject: {
    name: string
    description: string
    features: string[]
  }
  stats: CourseStats
  highlights: CourseHighlight[]
  modules: CourseModule[]
  deliverables: {
    primary: string
    secondary: string[]
    bonus: string[]
    assessments: string
  }
  learningOutcomes: string[]
  prerequisites: string[]
}

// Icon mapping for highlights
const iconMap = {
  Code,
  Target,
  Zap,
  CheckCircle,
  Award,
  ArrowRight,
}

export function getCourseData(): CourseData {
  return courseData as CourseData
}

export function getHighlightIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || Code
}

export function getCourseStats() {
  const { stats } = getCourseData()
  return [
    {
      icon: 'Clock',
      text: stats.duration
    },
    {
      icon: 'Users', 
      text: stats.students
    },
    {
      icon: 'Star',
      text: stats.rating
    }
  ]
}