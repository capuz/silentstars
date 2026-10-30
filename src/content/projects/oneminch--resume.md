---
repo: "oneminch/resume"
name: "resume"
description: "A minimal, single-column, print-friendly Résumé/CV template built with Nuxt."
readmeQualityOk: true
url: "https://github.com/oneminch/resume"
homepage: "https://resume.minch.dev/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [49, 43]
topics: ["cv", "cv-template", "nuxt", "resume", "resume-template", "tailwindcss"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-16T02:22:16Z"
lastCommitAt: "2026-10-30T11:02:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 54
maintainers: ["oneminch", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1038883473/4c491e23-9b1a-4bde-a487-8eb71110c010"
---

# Résumé

A minimal, single-column, print-friendly Résumé/CV template built with Nuxt. Designed following modern résumé best practices with easy customization through a single configuration file.

## Features

-   🎨 Minimal, single-column design optimized for readability
-   📱 Fully responsive design that looks great on all devices
-   🖨️ Print-optimized styling following ATS-friendly guidelines
-   🔧 Strongly typed configuration with full IDE support
-   🚀 Easy deployment to any hosting platform
-   📄 Single-column layout for better ATS compatibility
-   🎯 Follows modern résumé best practices

## Quick Start

1. **Fork and clone this repository**

```bash
git clone https://github.com/oneminch/resume.git

cd resume
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Customize your résumé data**

Edit the `app.config.ts` file with your personal information:

```typescript
export default defineAppConfig({
	resume: {
		personalInfo: {
			name: "Your Name",
			title: "Your Professional Title",
			summary: "Your professional summary...",
			contact: {
				email: "your.email@example.com",
				phone: "+1 (555) 123-4567",
				location: "Your City, State",
				// ...…
