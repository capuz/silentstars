---
repo: "BenediktChlopik/mortal-mode"
name: "mortal-mode"
description: "A vanilla Emacs config for mortals."
readmeQualityOk: true
url: "https://github.com/BenediktChlopik/mortal-mode"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T13:46:02Z"
lastCommitAt: "2026-11-09T11:59:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["BenediktChlopik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e581c04d8592594e2e3cf9cc3e9b4e77a5220fb0b154ca1f2f21e683b2c8d295/BenediktChlopik/mortal-mode"
---

A basic Emacs configuration for users accustomed to modern editors like Kate, VS Code, Notepad++, Sublime Text, PyCharm, and many others. This config tries to make vanilla Emacs feel more like one of those editors. It gives you a familiar starting point for your own Emacs configuration adventures without having to unlearn years of muscle memory.

# Try it out!
(on Emacs 31)
```
cd ~
rm -rf .emacs.d/
git clone https://github.com/BenediktChlopik/mortal-mode.git .emacs.d
```

I’ve used this config for a few months, and it’s becoming really close to the modern text editor experience. Contributions are welcome, but I’ll keep this config vanilla.

Here's the full set of keybindings in `mortal-map`:

| Key | Command |
|---|---|
| `<escape>` | quit out of anything |
| `<backspace>` | deleting all whitespace or one char |
| `<delete>` | same as above |
| `<tab>` | smartly indent |
| `<backtab>` | smartly unindent |
| `RET` | newline and indent smartly |
| `<f1>` | `ctl-x-map` (prefix) |
| `<f2>` | `ctl-c-map` (prefix) |
| `<f4>` | `help-map` (prefix) |
| `M-x` | execute extended command |
| `C-g` | `goto-map` (prefix) |
| `C-f` | `search-map` (prefix) |
| `M-<left>` | switch to previous…
