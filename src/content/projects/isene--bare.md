---
repo: "isene/bare"
name: "bare"
description: "Interactive shell in x86_64 Linux assembly. No libc, no runtime, pure syscalls."
readmeQualityOk: true
url: "https://github.com/isene/bare"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [98]
stars: 56
forks: 5
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T05:16:12Z"
lastCommitAt: "2026-09-11T08:15:22Z"
lastReleaseAt: "2026-04-14T07:31:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 16
maintainers: ["isene"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bf5594f0a01572c982ac7d7931f456907f553c04042e79646dd6cf5ddcd761c/isene/bare"
---

# bare - Pure Assembly Shell

       

Interactive shell written in x86_64 Linux assembly. No libc, no runtime, pure syscalls. Single static binary, 126KB. **9 microsecond startup.**

Pure syscalls, zero overhead. No interpreter, no runtime, no garbage collector. Just your keystrokes and the kernel.

This is my login shell. It is not released for your use. It is released for inspiration. This is how you can benefit: 1) Clone this repo, 2) Fire up Claude Code, 3) Prompt it to make it into what you want or need.

<br clear="left"/>

bare behind every `>` in the [CHasm](https://github.com/isene/chasm)
desktop. Every binary on screen is x86_64 assembly — tile owns the
layout, strip drives the status row, glass renders the terminals,
show paints the syntax-highlighted source, bare is the shell.

## Install

### From source (requires nasm and ld)

```bash
git clone https://github.com/isene/bare.git
cd bare
make
sudo make install
```

### Arch Linux (AUR)

```bash
yay -S bare-shell
```

### Debian/Ubuntu

```bash
curl -LO https://github.com/isene/bare/releases/latest/download/bare_0.2.21-1_amd64.deb
sudo dpkg -i bare_0.2.21-1_amd64.deb
```

### Set as default shell

```bash
# Add to…
