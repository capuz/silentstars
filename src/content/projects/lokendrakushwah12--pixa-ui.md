---
repo: "Lokendrakushwah12/pixa-ui"
name: "pixa-ui"
description: "Build faster with beautifully crafted components Live: https://pixa-ui.lokendra.workers.dev"
readmeQualityOk: true
url: "https://github.com/Lokendrakushwah12/pixa-ui"
homepage: "https://pixaui.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ui", "ui-components", "ui-library", "animation", "design", "framer-motion", "tailwindcss", "typescript", "ui-component"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-17T12:26:49Z"
lastCommitAt: "2026-09-27T09:20:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 48
maintainers: ["Lokendrakushwah12"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2c1c240a311cc1e276e5b7c87b73488439e4d6b31698713fd77f4cacd93185/Lokendrakushwah12/pixa-ui"
fundingLinks: ["GITHUB:https://github.com/Lokendrakushwah12"]
---

<h3 align="center">pixaui.com</h3>

## About the Project

Pixa UI is a composable and accessible collection of open-source Next.js components built with shadcn/ui and Tailwind CSS.

### Apps and Packages

- **`apps/www/`** - Main pixaui.com website
- **`packages/ui/`** - Shared UI components package
- **`packages/typescript-config/`** - TypeScript configurations
- **`biome.json`** - Shared Biome configuration for linting and formatting

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Environment Variables

This monorepo contains multiple Next.js applications that are designed to link to each other. For the navigation to work correctly, you must set up environment variables for both local development and production deployments.

#### Local Development

For local development, create a `.env.local` file in each of the app directories with the corresponding variables.

1.  **`www` app**

    This app needs to know the URLs of the other apps. Create a file at `apps/www/.env.local`:

    ```sh
    # apps/www/.env.local
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

> [!NOTE]
> Turborepo is configured to watch for changes in `.env*` files, so it will…
