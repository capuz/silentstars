---
repo: "airi-utcn/ai-institute-site"
name: "ai-institute-site"
description: "The code for the website for the AIRI Institute of UTCN"
readmeQualityOk: true
url: "https://github.com/airi-utcn/ai-institute-site"
homepage: "https://airi.utcluj.ro"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 6
forks: 14
openIssues: 29
closedIssues: 72
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-02-03T11:16:34Z"
lastCommitAt: "2026-11-04T11:27:44Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 94
undervaluedScore: 81
maintainers: ["Shumy52", "devrim6", "peter-gal"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d0ab450c23ae15a52bd5eb6ce6b1a91afb49c81b08d995981474ccab3166a0c/airi-utcn/ai-institute-site"
---

# AIRi@UTCN Institute Website

The official website for the Artificial Intelligence Research Institute (AIRI) at the Technical University of Cluj-Napoca. This platform showcases our research activities, team members, publications, and events while serving as a knowledge hub for students and researchers interested in AI.

## Overview

This project consists of two main components:

- **Frontend** (`web/`) - Next.js application with responsive design and interactive features
- **Backend** (`server/`) - Strapi v5 headless CMS managing all content

The architecture allows researchers and administrators to update content through Strapi's admin panel while the Next.js frontend delivers a fast, modern user experience.

## Tech Stack

**Frontend**

- Next.js 15 + React 19
- Tailwind CSS for styling
- Framer Motion for animations
- React Leaflet for interactive maps (used for the partners page)

**Backend**

- Strapi v5 (Headless CMS)
- PostgreSQL database
- Docker for containerization

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Git

### Running with Docker

```bash
# Clone and navigate to the project
git clone <repository-url>
cd ai-institute-site

# Copy…
