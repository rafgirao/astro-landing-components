// Types for the components
export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
}

export interface LessonItem {
  title: string;
  description: string;
  duration?: string;
  format: string;
}

export interface ModuleItem {
  title: string;
  lessons: LessonItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProblemSolutionItem {
  text: string;
  icon?: string;
}

export interface KeyBenefitItem {
  title: string;
  description: string;
  icon?: string;
}

// Component paths for manual import
export const COMPONENT_PATHS = {
  Hero: '@conteudouau/astro-landing-components/components/Hero.astro',
  ProblemSolution: '@conteudouau/astro-landing-components/components/ProblemSolution.astro',
  KeyBenefits: '@conteudouau/astro-landing-components/components/KeyBenefits.astro',
  CourseContent: '@conteudouau/astro-landing-components/components/CourseContent.astro',
  Testimonials: '@conteudouau/astro-landing-components/components/Testimonials.astro',
  PricingTable: '@conteudouau/astro-landing-components/components/PricingTable.astro',
  Guarantee: '@conteudouau/astro-landing-components/components/Guarantee.astro',
  Instructor: '@conteudouau/astro-landing-components/components/Instructor.astro',
  Faq: '@conteudouau/astro-landing-components/components/Faq.astro',
  TestimonialCard: '@conteudouau/astro-landing-components/components/TestimonialCard.astro',
  LessonAccordion: '@conteudouau/astro-landing-components/components/LessonAccordion.astro',
  FeatureItem: '@conteudouau/astro-landing-components/components/FeatureItem.astro',
  Features: '@conteudouau/astro-landing-components/components/Features.astro',
  Showcase: '@conteudouau/astro-landing-components/components/Showcase.astro',
  Header: '@conteudouau/astro-landing-components/components/Header.astro',
  Footer: '@conteudouau/astro-landing-components/components/Footer.astro',
  YoutubeEmbed: '@conteudouau/astro-landing-components/components/YoutubeEmbed.astro',
  VimeoEmbed: '@conteudouau/astro-landing-components/components/VimeoEmbed.astro',
  ImageEmbed: '@conteudouau/astro-landing-components/components/ImageEmbed.astro',
  PandaEmbed: '@conteudouau/astro-landing-components/components/PandaEmbed.astro',
  PandaPreloads: '@conteudouau/astro-landing-components/components/PandaPreloads.astro',
} as const;
