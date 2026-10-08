---
repo: "holepunchto/bare-build"
name: "bare-build"
description: "Application builder for Bare"
readmeQualityOk: true
url: "https://github.com/holepunchto/bare-build"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2025-11-17T07:56:43Z"
lastCommitAt: "2026-10-08T10:51:32Z"
lastReleaseAt: "2026-09-22T12:27:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 81
maintainers: ["kasperisager", "bavulapati", "thundron"]
openGraphImageUrl: "https://opengraph.githubassets.com/33b79b0c35c8b343969ad0d62d849cfe1542724fc81c2c86f1d663a27448a8be/holepunchto/bare-build"
---

# bare-build

Application builder for Bare that allows developers to package their JavaScript code as either native application bundles or standalone executables for both desktop and mobile.

```
npm i [-g] bare-build
```

## Usage

```js
const build = require('bare-build')

for await (const resource of build('/path/to/app.js', {
  base: '/path/to/',
  hosts: ['darwin-arm64', 'darwin-x64'],
  icon: 'icon.icns',
  identifier: 'com.example.App'
})) {
  console.log(resource)
}
```

```console
bare-build \
  --host darwin-arm64 --host darwin-x64 \
  --icon icon.icns \
  --identifier com.example.App \
  app.js
```

## Formats

| Platform | Unpackaged                 | `--package` | `--standalone`                                                |
| :------- | :------------------------- | :---------- | :------------------------------------------------------------ |
| Linux    | `.AppDir`, Snap compatible | `.AppImage` | ELF executable with self-extracting `.so` libraries           |
| Android  | `.apk`                     | `.aab`      | ELF executable with self-extracting `.so` libraries           |
| macOS    | `.app`                     | `.pkg`      | Mach-O executable with…
