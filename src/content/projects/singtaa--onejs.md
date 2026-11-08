---
repo: "Singtaa/OneJS"
name: "OneJS"
description: "Your web skills, now in Unity."
readmeQualityOk: true
url: "https://github.com/Singtaa/OneJS"
homepage: "https://onejs.com"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["gamedev", "javascript", "preact", "tailwindcss", "typescript", "ui", "unity", "gpui", "react", "react-native"]
stars: 362
forks: 34
openIssues: 15
closedIssues: 99
watchers: 33
contributors: 113
recentReleases: 0
createdAt: "2022-05-22T19:07:05Z"
lastCommitAt: "2026-11-08T10:16:06Z"
lastReleaseAt: "2025-05-22T08:27:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 38
maintainers: ["Singtaa", "CreepGin"]
openGraphImageUrl: "https://opengraph.githubassets.com/2570a32a8b29cd61adf2455257f1c3442b9e82006b934a1efbbe7f9a1346c581/Singtaa/OneJS"
discussionCount: 3
---

# OneJS

Build Unity UIs with React 19 and TypeScript, rendered natively through UI Toolkit. No browser, no webview.

```tsx
import { useState } from "react"
import { render, View, Text, Button } from "onejs-react"
import "onejs:tailwind"

function App() {
    const [count, setCount] = useState(0)
    return (
        <View className="p-4">
            <Text text={`Count: ${count}`} className="text-lg" />
            <Button text="+1" onClick={() => setCount(c => c + 1)} />
        </View>
    )
}

render(<App />, __root)
```

Save the file and the UI hot-reloads in the editor, in both Edit mode and Play mode.

## Highlights

- **React 19 + TypeScript** with esbuild bundling and npm packages
- **Hot reload** that works without entering Play mode (edit-mode preview)
- **One-click setup**: add `JSRunner`, click Initialize Project, start coding
- **Styling three ways**: USS, CSS Modules, and a built-in Tailwind-style JIT generator (no npm dependency)
- **Full C# interop**: reach any C# type from JS, with zero-alloc fast paths for per-frame data
- **Batteries included**: 2D particles, GPU compute bridge, vector drawing, `fetch`, `WebSocket`, `localStorage`
- **Runs everywhere**:…
