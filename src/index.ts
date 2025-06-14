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
  Hero: '@rgiraon/astro-landing-components/components/Hero.astro',
  ProblemSolution: '@rgiraon/astro-landing-components/components/ProblemSolution.astro',
  KeyBenefits: '@rgiraon/astro-landing-components/components/KeyBenefits.astro',
  CourseContent: '@rgiraon/astro-landing-components/components/CourseContent.astro',
  Testimonials: '@rgiraon/astro-landing-components/components/Testimonials.astro',
  PricingTable: '@rgiraon/astro-landing-components/components/PricingTable.astro',
  Guarantee: '@rgiraon/astro-landing-components/components/Guarantee.astro',
  Instructor: '@rgiraon/astro-landing-components/components/Instructor.astro',
  Faq: '@rgiraon/astro-landing-components/components/Faq.astro',
  TestimonialCard: '@rgiraon/astro-landing-components/components/TestimonialCard.astro',
  LessonAccordion: '@rgiraon/astro-landing-components/components/LessonAccordion.astro',
  FeatureItem: '@rgiraon/astro-landing-components/components/FeatureItem.astro',
  Features: '@rgiraon/astro-landing-components/components/Features.astro',
  Showcase: '@rgiraon/astro-landing-components/components/Showcase.astro',
  Header: '@rgiraon/astro-landing-components/components/Header.astro',
  Footer: '@rgiraon/astro-landing-components/components/Footer.astro',
  YoutubeEmbed: '@rgiraon/astro-landing-components/components/YoutubeEmbed.astro',
  VimeoEmbed: '@rgiraon/astro-landing-components/components/VimeoEmbed.astro',
  ImageEmbed: '@rgiraon/astro-landing-components/components/ImageEmbed.astro',
  PandaEmbed: '@rgiraon/astro-landing-components/components/PandaEmbed.astro',
  PandaPreloads: '@rgiraon/astro-landing-components/components/PandaPreloads.astro',
} as const;
