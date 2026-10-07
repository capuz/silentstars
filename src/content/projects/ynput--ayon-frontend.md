---
repo: "ynput/ayon-frontend"
name: "ayon-frontend"
description: "Codebase of AYON server web interface"
readmeQualityOk: true
url: "https://github.com/ynput/ayon-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["ayon"]
stars: 30
forks: 44
openIssues: 228
closedIssues: 877
watchers: 10
contributors: 23
recentReleases: 0
createdAt: "2022-02-25T17:21:34Z"
lastCommitAt: "2026-10-07T10:30:31Z"
lastReleaseAt: "2023-12-13T13:47:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 65
maintainers: ["mkolar", "Innders", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e631fdbe5676be8bd623b82fd2a963b15908a97328175f367d1fd4998b0d076/ynput/ayon-frontend"
---

# AYON Frontend

A modern React application for the AYON project management system. Built with Vite, TypeScript, and the AYON React Components library.

## Prerequisites

- Node.js 16+ 
- Yarn or npm package manager
- A running AYON server instance

## Getting Started

### 1. Install Dependencies

```bash
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory with the necessary configuration:

```
SERVER_URL=http://localhost:5000
```

Replace `http://localhost:5000` with your actual AYON server URL.

### 3. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

### Building

```bash
# Build for production
yarn build

# Preview the production build locally
yarn preview
```

### Code Quality

```bash
# Run ESLint
yarn lint

# Fix ESLint issues
yarn lint:fix

# Format code with Prettier
yarn format
```

### API Code Generation

```bash
# Generate REST API types from OpenAPI schema
yarn generate-rest

# Download OpenAPI schema and generate types
yarn generate-rest-all

# Generate GraphQL types from schema
yarn generate-gql
```

### Testing

```bash
# Run Playwright tests
yarn test

# Run tests…
