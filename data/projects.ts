export type ProjectCategory = 'web' | 'android'

export interface Project {
  slug: string
  name: string
  url: string
  desc: string
  category: ProjectCategory
  tags: string[]
  monogram: string
  pattern: number // 1..6
}

export const webProjects: Project[] = [
  {
    slug: 'bidabs',
    name: 'Bida Basketball Association',
    url: 'http://bidabs.com',
    desc: 'Step into the world of professional basketball with our web app. Discover local schedules, team information, and player stats.',
    category: 'web',
    tags: [],
    monogram: 'BB',
    pattern: 1,
  },
  {
    slug: 'adskin',
    name: 'ADSkin Clinic',
    url: 'http://adskin-clinic.com',
    desc: 'Streamline your clinic management with our exclusive web app designed for doctors. Manage appointments, patients, and more.',
    category: 'web',
    tags: [],
    monogram: 'AS',
    pattern: 2,
  },
  {
    slug: 'blotz',
    name: 'Blotz Room Management',
    url: 'http://www.blotzpension.com',
    desc: 'Take charge of your room allocations with our room management system. Our web app allows you to schedule, monitor, and manage room bookings.',
    category: 'web',
    tags: [],
    monogram: 'BZ',
    pattern: 3,
  },
  {
    slug: 'dlacoste',
    name: "D' Lacoste Paper Mill",
    url: 'https://dlacoste-5a496.web.app/admin',
    desc: 'With state-of-the-art equipment and expertise, we process and transform paper waste into valuable materials for recycling and reuse.',
    category: 'web',
    tags: [],
    monogram: 'DL',
    pattern: 4,
  },
  {
    slug: 'lto-web',
    name: 'LTO Web Reviewer',
    url: 'https://lto-reviewer.com',
    desc: 'Prepare for your LTO exam with confidence using our comprehensive web app! Access a vast collection of practice questions and simulated exams.',
    category: 'web',
    tags: [],
    monogram: 'LTO',
    pattern: 5,
  },
]

export const androidProjects: Project[] = [
  {
    slug: 'lto-reviewer',
    name: 'LTO Reviewer: 2023',
    url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
    desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam',
    category: 'android',
    tags: ['java', 'xml', 'motion-layout'],
    monogram: 'LTO',
    pattern: 6,
  },
  {
    slug: 'mylet',
    name: 'LET Reviewer: myLET',
    url: 'https://play.google.com/store/apps/details?id=com.let.reviewer.myletreviewer',
    desc: 'Do you have what it takes to pass the Reviewer for Licensure Examination for Teachers?',
    category: 'android',
    tags: ['kotlin', 'jetpack', 'compose', 'coroutine'],
    monogram: 'LET',
    pattern: 1,
  },
  {
    slug: 'recipehub',
    name: 'RecipeHub.PH: Filipino foods',
    url: 'https://play.google.com/store/apps/details?id=com.filipino.foods',
    desc: "Looking for a Filipino foods for chicken? Look no more. The newest app for guiding Filipino mom's",
    category: 'android',
    tags: ['kotlin', 'jetpack-room', 'data-store'],
    monogram: 'RH',
    pattern: 2,
  },
  {
    slug: 'dailycar',
    name: 'DailyCar: Auto maintenance',
    url: 'https://play.google.com/store/apps/details?id=com.daily.car',
    desc: 'Taking care of your car should be simpler and straight to the point. This car maintenance is for tracking mileage, expenses, car pms, and more!!',
    category: 'android',
    tags: ['kotlin', 'mvi', 'jetpack'],
    monogram: 'DC',
    pattern: 3,
  },
]

export const projects: Project[] = [...webProjects, ...androidProjects]
