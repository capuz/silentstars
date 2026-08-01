---
repo: "rbadillap/registry.directory"
name: "registry.directory"
description: "The explorer for the shadcn registry ecosystem"
readmeQualityOk: true
url: "https://github.com/rbadillap/registry.directory"
homepage: "https://registry.directory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["components", "design", "react", "shadcn", "ui", "nextjs", "vercel"]
stars: 74
forks: 40
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 35
recentReleases: 0
createdAt: "2025-04-14T00:47:23Z"
lastCommitAt: "2026-08-01T06:16:30Z"
lastReleaseAt: "2026-02-14T03:14:39Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 57
maintainers: ["rbadillap", "Aniket-508", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/965820922/397fad9f-c2c2-41af-948f-3c2e0f4cdd60?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061705Z&X-Amz-Expires=300&X-Amz-Signature=41b55e34338408c32eccd622a46610f1acbab15acae008591e89950cafc1f034&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMyNSwibmJmIjoxNzg1NTY1MDI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.56pYY1SkHT4jwsXa74Uo_-CxdRmTQSWaD6AvGWFsowI"
---

### How to suggest a registry?

1. Make sure the registry is not already listed in the directory.
2. Ensure the registry uses **shadcn** as its distribution method
   (e.g., `npx shadcn@latest add https://custom-registry.com/{component}`).
3. **Your registry must have a publicly accessible `registry.json` file at `/r/registry.json`**
   (e.g., `https://custom-registry.com/r/registry.json`).
4. Add the registry entry at the bottom of the `registries` array in the [`directory.json`](https://github.com/rbadillap/registry.directory/blob/main/apps/web/public/directory.json) file.

### Registry Requirements

Your registry must be publicly accessible and follow the shadcn registry format:

- **Registry index**: `https://your-site.com/r/registry.json` (required)
- **Component files**: `https://your-site.com/r/{component-name}.json` (required)
- All files must be publicly accessible (no authentication required)

If your registry URL is different from the default `/r/registry.json` path, you can specify a custom `registry_url`:

```json
{
  "name": "My Registry",
  "description": "A custom registry for shadcn/ui components.",
  "url": "https://myregistry.com/",
  "registry_url":…
