# @rgiraon/astro-landing-components

Reusable Astro components for creating beautiful landing pages and minicourse pages.

## Installation

```bash
npm install @rgiraon/astro-landing-components
```

**That's it!** Tailwind CSS and the Astro Tailwind integration are included as dependencies.

## Setup

1. **Copy the configs** to your project root:
```bash
# Copy Tailwind config
cp node_modules/@rgiraon/astro-landing-components/examples/tailwind.config.example.js tailwind.config.js

# Copy Astro config (or add tailwind to your existing config)
cp node_modules/@rgiraon/astro-landing-components/examples/astro.config.example.mjs astro.config.mjs
```

2. **Or manually add Tailwind to your existing Astro config**:
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});
```

## Quick Start

1. Install the package in your Astro project
2. Import the components you need
3. Use them in your `.astro` files

```astro
---
import Hero from '@rgiraon/astro-landing-components/components/Hero.astro';
import ProblemSolution from '@rgiraon/astro-landing-components/components/ProblemSolution.astro';
import type { TestimonialItem } from '@rgiraon/astro-landing-components';
---

<Hero
  headline="<span class='text-highlight font-bold'>Minicurso</span><br>Seu Curso Incrível"
  subheadline="Aprenda algo incrível por apenas R$ 29,90"
  ctaText="QUERO COMEÇAR AGORA!"
  ctaLink="#pricing"
/>
```

## Requirements

- **Astro 4.0+**

## Available Components

### Main Landing Page Components
- **Hero** - Hero section with headline, media, and CTA
- **ProblemSolution** - Problem/solution presentation with icons
- **KeyBenefits** - Key benefits showcase grid
- **CourseContent** - Course modules and lessons accordion
- **Testimonials** - Customer testimonials carousel
- **PricingTable** - Pricing and features table
- **Guarantee** - Money-back guarantee section
- **Instructor** - Instructor bio and credentials
- **Faq** - Frequently asked questions accordion

### UI Components
- **TestimonialCard** - Individual testimonial card
- **LessonAccordion** - Expandable lesson content
- **FeatureItem** - Feature list item
- **Features** - Features grid layout
- **Showcase** - Content showcase section

### Layout Components
- **Header** - Site header with navigation
- **Footer** - Site footer

### Media Components
- **YoutubeEmbed** - YouTube video embed
- **VimeoEmbed** - Vimeo video embed
- **ImageEmbed** - Responsive image embed
- **PandaEmbed** - Panda video player embed

## TypeScript Support

The package includes TypeScript interfaces for all component props:

```typescript
import type { 
  TestimonialItem, 
  ModuleItem, 
  FaqItem,
  ProblemSolutionItem,
  KeyBenefitItem 
} from '@rgiraon/astro-landing-components';
```

## Component Examples

### Hero Component
```astro
<Hero
  headline="Your Amazing Course"
  subheadline="Learn something incredible"
  mediaType="youtube"
  mediaUrl="https://www.youtube.com/watch?v=VIDEO_ID"
  ctaText="Get Started"
  ctaLink="#pricing"
  layout="media-right"
  bgColor="bg-gray-900"
  textColor="text-white"
/>
```

### Problem/Solution Component
```astro
<ProblemSolution
  problemTitle="Struggling with..."
  solutionTitle="Imagine if you could..."
  problemItems={[
    { text: "Problem 1", icon: "❌" },
    { text: "Problem 2", icon: "😰" }
  ]}
  solutionItems={[
    { text: "Solution 1", icon: "✅" },
    { text: "Solution 2", icon: "🚀" }
  ]}
  ctaText="GET THE SOLUTION!"
  ctaDescription="Transform your reality today"
/>
```

### FAQ Component
```astro
---
const faqItems = [
  {
    question: "How does the course work?",
    answer: "The course is 100% online and you can watch at your own pace."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes! We offer a 7-day money-back guarantee."
  }
];
---

<Faq
  title="Frequently Asked Questions"
  items={faqItems}
/>
```

## Styling

The components come with built-in **Tailwind CSS** classes. Make sure your Astro project has Tailwind CSS configured:

## Complete Example

Check the [`examples/basic-usage.astro`](./examples/basic-usage.astro) file for a complete landing page implementation.

## Assets

The package includes sample images and assets in the `assets/` directory that you can reference or replace with your own.

## GitHub Repository

[https://github.com/rgiraon/astro-landing-components](https://github.com/rgiraon/astro-landing-components)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use in your projects!
