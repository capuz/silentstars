---
repo: "shinshin86/mesh-avatar-studio"
name: "mesh-avatar-studio"
description: "Turn one illustration into an animated 2D mesh avatar with a coding agent and a local editor"
readmeQualityOk: true
url: "https://github.com/shinshin86/mesh-avatar-studio"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 28]
topics: ["2d-animation", "avatar", "claude-code", "codex", "mesh-deformation", "vtuber", "webgl"]
stars: 483
forks: 63
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-04T03:33:57Z"
lastCommitAt: "2026-10-08T10:52:28Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 18
maintainers: ["shinshin86", "mahi424", "Junziren"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1403847264/b5c1df4b-8014-4e1d-be71-082c88a94341"
---

# Mesh Avatar Studio

[日本語](https://github.com/shinshin86/mesh-avatar-studio/blob/HEAD/README.ja.md)

Turn a single illustration into an animated 2D mesh avatar: it blinks, talks, turns its head,
breathes and sways its hair. A coding agent prepares the avatar from your image; you fine-tune
it in a local editor with a live preview.

## Try the sample

Requires Node.js 22.17+.

```sh
npm install
npm run dev
```

Open the URL printed in the terminal (for example `http://127.0.0.1:5173/`). The editor opens
the bundled sample, Miko in a qipao. Pick a part on the left, drag its dots on the image and
watch the preview on the right. The sample is read-only; when you change it, choose
**Copy and keep editing** to continue in your own copy.

### Using Windows

Use `git clone` to download the repository when possible. If you use a ZIP, open its
Properties in File Explorer and select **Unblock**, if shown, before extracting it.

Create `projects/` yourself under your Windows account before asking an agent to work in it.
Folders created by another account or an agent running in a sandbox can have permissions
that prevent the editor from reading them. If a project cannot be read, use the…
