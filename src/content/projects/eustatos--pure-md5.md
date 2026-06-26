---
repo: "eustatos/pure-md5"
name: "pure-md5"
description: "A lightweight JavaScript function for hashing messages by the MD5 algorithm"
url: "https://github.com/eustatos/pure-md5"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["md5", "typescript", "javascript", "lightweight"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-06-19T07:22:42Z"
lastCommitAt: "2026-06-26T06:46:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 41
maintainers: ["eustatos"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9414575b48ed4a8071f3ff006f2cfbb6a45ec5159186d3491f8b11c1a5c8c92/eustatos/pure-md5"
---

# pure-md5 🎯

**A lightweight, zero-dependency JavaScript library for MD5 hashing with streaming support for large files.**

---

## 🚀 Quick Start

### Install

```bash
npm install pure-md5
# or
yarn add pure-md5
# or
pnpm add pure-md5
```

### Basic Usage

```javascript
import { md5 } from 'pure-md5/md5';

const hash = md5('hello');
console.log(hash); // "5d41402abc4b2a76b9719d911017c592"
```

### Streaming (Large Files)

```javascript
import { createMD5Stream } from 'pure-md5';
import fs from 'fs';

const stream = createMD5Stream();
stream.on('md5', result => console.log('MD5:', result.digest));

fs.createReadStream('large-file.bin').pipe(stream);
```

---

## ✨ Features

- ⚡ **Zero Dependencies** - No external dependencies, ever
- 📦 **Tiny Bundle** - ~1.4KB gzipped for md5() only (with tree-shaking), ~6KB for full bundle
- 🎯 **Multiple APIs** - Simple, streaming, and promise-based
- 🦺 **TypeScript Ready** - Full type definitions included
- 🔌 **Adapter System** - Automatic detection (WebCrypto, Node.js, Pure JS)
- 📄 **File Hashing** - Stream large files with progress tracking
- 🌐 **Universal** - Works in Node.js and browsers

---

## 📚 Documentation

- [API…
