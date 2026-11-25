---
repo: "douglasjunior/react-native-pdf-renderer"
name: "react-native-pdf-renderer"
description: "⚛ A zoomable, blazing fast, zero dependencies, pure native, typed PDF Renderer for Android and iOS."
readmeQualityOk: true
url: "https://github.com/douglasjunior/react-native-pdf-renderer"
homepage: "https://www.npmjs.com/package/react-native-pdf-renderer"
language: "Java"
languages: ["Java"]
languagePcts: [62]
topics: ["android", "ios", "pdf", "pdfkit", "pdfrenderer", "react-native"]
stars: 300
forks: 20
openIssues: 5
closedIssues: 44
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-03-09T11:19:24Z"
lastCommitAt: "2026-11-25T03:16:54Z"
lastReleaseAt: "2023-09-29T17:28:13Z"
status: "thriving"
tags: ["funded"]
healthScore: 87
undervaluedScore: 37
maintainers: ["douglasjunior", "LuizAbudi", "douglasjunior-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab3263ddd5e59d71f3031a1709625ff1910a9773be101a8ce37d702a723cafa6/douglasjunior/react-native-pdf-renderer"
fundingLinks: ["GITHUB:https://github.com/douglasjunior", "PATREON:https://patreon.com/douglasjunior", "CUSTOM:paypal.me/douglasnassif"]
---

---

## 🚀 Quick Start

```bash
# 1. Install package
yarn add react-native-pdf-renderer
# or: npm i -S react-native-pdf-renderer

# 2. Install CocoaPods dependencies for iOS
cd ios && pod install
```

```tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PdfRendererView from 'react-native-pdf-renderer';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PdfRendererView
        style={{ flex: 1, backgroundColor: '#000000' }}
        source="file:///path/to/local/file.pdf"
        distanceBetweenPages={16}
        maxZoom={5}
        onPageChange={(current, total) => {
          console.log(`Page: ${current + 1} of ${total}`);
        }}
      />
    </SafeAreaView>
  );
}
```

---

## 💡 Why Another PDF Renderer?

The main reason why this library was created is to **avoid using third-party native dependencies**, such as `com.github.TalbotGooday:AndroidPdfViewer`, `com.github.mhiew:android-pdf-viewer`, `react-native-blob-util`, or `react-native-webview`.
