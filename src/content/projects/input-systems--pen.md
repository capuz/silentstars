---
repo: "input-systems/pen"
name: "pen"
description: "Extendable rich text editor for human and AI Agent collaboration."
readmeQualityOk: true
url: "https://github.com/input-systems/pen"
homepage: "https://www.npmjs.com/package/@input/pen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai", "ai-tools", "collaboration", "headless", "markdown", "react", "rich-text-editor", "vue", "yjs", "ai-agent"]
stars: 42
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2026-03-02T23:31:35Z"
lastCommitAt: "2026-10-14T08:58:06Z"
lastReleaseAt: "2026-10-07T14:55:08Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 47
maintainers: ["janglad", "krijnrijshouwer", "noudadrichem"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5a5b704024b367eb26231ac9b0c40d0439b833f08dc031ed845f5f69eb26aff/input-systems/pen"
---

Rich text editor for human/AI Agent<br/> collaboration. Headless. Extendable.

**Pen is a block-native rich text editor SDK** for applications where people and AI write in the same document. The runtime is headless: it owns the document, selection, and history, and renders nothing you did not ask for. The document is a Yjs CRDT from the first keystroke.

## Why Pen

**You own the UI.** Toolbars, slash menus, and AI panels are your markup over Pen's state. The editor field itself adopts a small chrome stylesheet by default so `createEditor()` plus `<PenEditor />` is a usable field; pass `chrome={false}` to stay unstyled. Start with one component, or compose the `Pen.*` primitives and keep every pixel.

**One write path.** A keystroke, a paste, an AI rewrite, and a remote peer all become `DocumentOp[]` and go through `editor.apply(ops, { origin })`. There is no second way to change a document, so undo, review, and history read one stream instead of guessing.

**AI is a writer, not a plugin.** Origins record who wrote each change, so a model can stream into the document, land as tracked suggestions, and be accepted or rejected per change, with the same undo stack a human gets.…
