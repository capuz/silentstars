---
repo: "formbricks/react-native"
name: "react-native"
description: "Formbricks React-Native SDK"
readmeQualityOk: true
url: "https://github.com/formbricks/react-native"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["formbricks", "survey"]
stars: 10
forks: 7
openIssues: 3
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 3
createdAt: "2025-04-29T18:18:32Z"
lastCommitAt: "2026-10-27T09:16:26Z"
lastReleaseAt: "2026-10-20T09:05:37Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 70
maintainers: ["pandeymangg", "dependabot[bot]", "mattinannt"]
openGraphImageUrl: "https://opengraph.githubassets.com/22401afdbc800c238f369e206a1fa62d75853dcf709b6d97b1c5cb5498775f4a/formbricks/react-native"
---

# Formbricks React Native SDK

Please see [Formbricks Docs](https://formbricks.com/docs).
Specifically, [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides).

## What is Formbricks

Formbricks is your go-to solution for in-product micro-surveys that will supercharge your product experience! 🚀 For more information please check out [formbricks.com](https://formbricks.com).

## How to use this library

1. Install the Formbricks package inside your project using npm:

```bash
npm install @formbricks/react-native
```

1. Import Formbricks and initialize the widget in your main component (e.g., App.tsx or App.js):

```javascript
import Formbricks, { track } from "@formbricks/react-native";

export default function App() {
  return (
    <View>
      {/* Your app code */}
      <Formbricks
        appUrl="https://app.formbricks.com"
        workspaceId="your-workspace-id"
      />
    </View>
  );
}
```

Replace your-workspace-id with your actual workspace ID. You can find your workspace ID in the **Connections instructions** in the Formbricks **Configuration** pages.

> **Note:** The `environmentId` prop is still supported as a…
