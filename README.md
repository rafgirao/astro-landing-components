# @conteudouau/astro-landing-components

Reusable Astro components for creating beautiful landing pages and minicourse pages.

## Installation

```bash
npm install @conteudouau/astro-landing-components
```

## Usage

Import the components you need in your Astro project:

```astro
---
import { 
  Hero, 
  ProblemSolution, 
  KeyBenefits, 
  CourseContent,
  Testimonials,
  PricingTable,
  Guarantee,
  Instructor,
  Faq
} from '@conteudouau/astro-landing-components';
---

<Hero
  headline="Your Amazing Course"
  subheadline="Learn something incredible"
  ctaText="Get Started"
  ctaLink="#pricing"
/>

<ProblemSolution
  problemTitle="Struggling with..."
  solutionTitle="Imagine if you could..."
  problemItems={['Problem 1', 'Problem 2']}
  solutionItems={['Solution 1', 'Solution 2']}
/>

<!-- More components... -->
```

## Available Components

### Main Landing Page Components
- **Hero** - Hero section with headline, media, and CTA
- **ProblemSolution** - Problem/solution presentation
- **KeyBenefits** - Key benefits showcase
- **CourseContent** - Course modules and lessons
- **Testimonials** - Customer testimonials carousel
- **PricingTable** - Pricing and features table
- **Guarantee** - Money-back guarantee section
- **Instructor** - Instructor bio and credentials
- **Faq** - Frequently asked questions

### UI Components
- **TestimonialCard** - Individual testimonial card
- **LessonAccordion** - Expandable lesson content
- **FeatureItem** - Feature list item
- **Features** - Features grid
- **Showcase** - Content showcase

### Layout Components
- **Header** - Site header with navigation
- **Footer** - Site footer

### Media Components
- **YoutubeEmbed** - YouTube video embed
- **VimeoEmbed** - Vimeo video embed
- **ImageEmbed** - Responsive image embed
- **PandaEmbed** - Panda video player embed

## Component Props

Each component accepts various props for customization. Check the TypeScript definitions for detailed prop interfaces.

## Styling

The components come with built-in Tailwind CSS classes. Make sure your project has Tailwind CSS configured.

## Examples

Check out the [examples directory](./examples) for complete page implementations.

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## License

MIT
