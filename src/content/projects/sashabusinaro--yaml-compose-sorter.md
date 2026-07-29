---
repo: "SashaBusinaro/yaml-compose-sorter"
name: "yaml-compose-sorter"
description: "A vscode extension that sorts and formats Docker Compose YAML files with consistent key ordering and improved readability."
readmeQualityOk: true
url: "https://github.com/SashaBusinaro/yaml-compose-sorter"
homepage: "https://marketplace.visualstudio.com/items?itemName=sashabusinaro.yaml-compose-sorter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["compose", "docker-compose", "formatting", "sorting", "visual-studio-code", "vscode", "vscode-extension", "yaml"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-06-15T10:10:27Z"
lastCommitAt: "2026-07-29T06:15:12Z"
lastReleaseAt: "2026-06-14T16:46:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 83
maintainers: ["dependabot[bot]", "SashaBusinaro", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1002365368/bfaded8a-e821-40e3-8949-a7258ab7249a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061642Z&X-Amz-Expires=300&X-Amz-Signature=092788b3c3928535006f2ed5ac6ad01eb6085db51ffc25ac56bdcf641bf40783&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEwMiwibmJmIjoxNzg1MzA1ODAyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.3LaWHhypG6oIifyJdtPFVDFbyPhcxFHNT6jXW-hnTOk"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sashabusinaro"]
---

</div>

# Docker Compose Sorter

_(Formerly known as YAML Compose Sorter)_

A Visual Studio Code extension that automatically sorts, formats, and standardizes Docker Compose files. It ensures consistency across your projects by enforcing a specific order for keys and services.

## Preview

## Features

- **Standardized Sorting**: Enforce a consistent order for top-level keys (`version`, `services`, `volumes`, etc.) and service-level keys (`image`, `environment`, `ports`, etc.).
- **Native Formatting**: Works with the standard "Format Document" command and "Format On Save".
- **Document Separator**: Optionally adds `---` at the beginning of YAML files.
- **Visual Separation**: Adds blank lines between services and top-level blocks for better readability.
- **Key=Value Transformation**: Optionally converts legacy list syntax (e.g., in `labels`) to map syntax.
- **Clean Up**: Optionally removes the deprecated `version` key.
- **Custom Key Support**: Add custom keys to the `topLevelKeyOrder` or `serviceKeyOrder` arrays in your `settings.json` to include them in the sorting logic.

## Usage & Configuration

### 1. Enabling "Format on Save" (Recommended)

In v1.0.0, we removed the…
