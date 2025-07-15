import { Project } from "@/types";

export const projects : Project [] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/e-commerce-website.png',
  },
  {
    title: 'Expense Tracker',
    description: 'A full stack expense tracker application to manage personal finances.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/task-manager.webp',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects and skills.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/portfolio-website.jpg',
  },
];
