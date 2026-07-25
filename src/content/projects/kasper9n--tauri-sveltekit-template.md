---
repo: "kasper9n/tauri-sveltekit-template"
name: "tauri-sveltekit-template"
description: "Tauri + SvelteKit template"
readmeQualityOk: true
url: "https://github.com/kasper9n/tauri-sveltekit-template"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [39, 27]
topics: ["tauri", "svelte", "typescript", "actions", "template", "sveltekit"]
stars: 193
forks: 21
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-10-26T05:56:53Z"
lastCommitAt: "2026-07-25T05:59:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 24
maintainers: ["kasper9n"]
openGraphImageUrl: "https://opengraph.githubassets.com/d398d5003b8dae60bcd7fc80bd8039e558b029076c7f8e6bf9e2890efb5b4539/kasper9n/tauri-sveltekit-template"
---

# Tauri SvelteKit Template

- **Tauri**
- **SvelteKit**
- **GitHub action** for cross-platform builds
- **TypeScript**
- **Preprocessing** with Sass installed by default
- **ESLint**
- **Prettier**

## Dev instructions

### Get started

1. Install Node.js
2. Install Rust
3. Follow the [Tauri setup guide](https://tauri.app/v1/guides/getting-started/setup)
4. Run `npm install`
5. Find and replace the text `tauri-sveltekit-template` and `Tauri SvelteKit Template`.

### Commands
- `npm run dev`: Start app in dev mode
- `npm run build`: Build
- `npm run lint`: Lint
- `npm run format`: Format

### Release new version
1. Update `CHANGELOG.md`
2. Bump the version number in `src-tauri/Cargo.toml`
3. Run `cargo check` to update `Cargo.lock`
4. Create a git tag in the format `v#.#.#`
5. Add release notes to the generated GitHub release and publish it
