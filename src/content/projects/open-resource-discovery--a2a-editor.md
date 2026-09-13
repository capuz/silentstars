---
repo: "open-resource-discovery/a2a-editor"
name: "a2a-editor"
description: "UI components for editing, viewing, and testing agents that implement the Agent2Agent (A2A) protocol."
readmeQualityOk: true
url: "https://github.com/open-resource-discovery/a2a-editor"
homepage: "https://open-resource-discovery.github.io/a2a-editor/playground"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["a2a", "a2a-protocol", "agent", "agentic-ai", "ai", "ai-agents", "ai-tools"]
stars: 20
forks: 2
openIssues: 4
closedIssues: 3
watchers: 2
contributors: 9
recentReleases: 6
createdAt: "2026-03-09T09:21:32Z"
lastCommitAt: "2026-09-13T08:30:00Z"
lastReleaseAt: "2026-08-12T13:20:29Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 48
maintainers: ["renovate[bot]", "jurijat", "aneta-a"]
openGraphImageUrl: "https://opengraph.githubassets.com/e995fd6bdb3ffa4359878d6c8e4c09d24fe0e5f075ce13dbef83303e8b29f25e/open-resource-discovery/a2a-editor"
---

# Agent2Agent Editor

UI components for editing, viewing, and testing agents that implement the [Agent2Agent](https://a2a-protocol.org) (A2A) protocol.

👉 **LIVE DEMO:** https://open-resource-discovery.github.io/a2a-editor/playground

## Getting Started

### npm

```bash
npm install @open-resource-discovery/a2a-editor
```

## Quick Start

```tsx
import { AgentPlayground } from "@open-resource-discovery/a2a-editor";
import "@open-resource-discovery/a2a-editor/styles";

function App() {
  return (
      <AgentPlayground onAgentCardChange={(json, parsed) => console.log(parsed?.name)} />
    </div>
  );
}
```

### Docker

```bash
docker run -p 8080:80 ghcr.io/open-resource-discovery/a2a-editor:latest
```

Or build from source:

```bash
docker build -t a2a-editor .
docker run -p 8080:80 a2a-editor
```

The editor is then available at `http://localhost:8080`.

## Contributing

Please see [CONTRIBUTING.md](https://github.com/open-resource-discovery/a2a-editor/blob/HEAD/CONTRIBUTING.md) for details on how to contribute to this project.

## License

Please see our [LICENSE](https://github.com/open-resource-discovery/a2a-editor/blob/HEAD/LICENSE) for copyright and license information.…
