---
repo: "morewings/alias-kitchen"
name: "alias-kitchen"
description: "Single source of truth for your project's alias configuration"
readmeQualityOk: true
url: "https://github.com/morewings/alias-kitchen"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 48]
topics: ["alias", "aliases", "babel", "resolution", "rollup", "rspack", "vite", "webpack", "typescript"]
stars: 10
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-18T16:25:04Z"
lastCommitAt: "2026-08-05T06:07:25Z"
lastReleaseAt: "2025-10-19T08:55:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 17
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1059577872/84c97f34-0696-4dd1-8bf7-e190aa099438?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060938Z&X-Amz-Expires=300&X-Amz-Signature=ba693b6e85a4adc1d4c3836df2ab82d1379262183554f5dea27de8533c4f54c3&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ3OCwibmJmIjoxNzg1OTEwMTc4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.vHKYX2SItpSEm6YN2fhMewhVBDUcGBsAIWk9e9C30Bk"
---

# Alias Kitchen

Alias Kitchen provides developers an ability to have a single source of truth regarding project import aliases.

## The problem

Are you tired of writing `import {Foo} from './../../../../../bar/bazz/Foo'` and then changing it every time you move a file?
Do you wish you had a single, reliable source of truth for your project's internal links,
seamlessly integrated across all your favorite bundlers?

## The solution

**Alias Kitchen is here to help!**

Set paths property inside your `tsconfig.json` or `jsconfig.json`.

```json
{
    "compilerOptions": {
        "paths": {
            "@/components/*": ["./src/components/*"],
            "@/features/*": ["./src/features/*"]
        }
    }
}
```

And then apply the same configuration to your bundlers using **alias-kitchen**. Vite, Rollup, Webpack, Rspack, Jest and so on.

From now on, you can use the same import address everywhere.

```js
import {Button} from '@/components/Button';
```

## Installation

```shell
npm i -D alias-kitchen
```

## Usage with bundlers

**alias-kitchen** provides a utility function `kitchen` which allows a developer to choose which recipe of alias config they are going to use.

```js…
