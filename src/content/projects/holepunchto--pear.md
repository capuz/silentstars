---
repo: "holepunchto/pear"
name: "pear"
description: "Peer-to-Peer (P2P) Install & Deploy CLI"
readmeQualityOk: true
url: "https://github.com/holepunchto/pear"
homepage: "https://docs.pears.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["desktop", "peer-to-peer", "runtime", "terminal"]
stars: 430
forks: 33
openIssues: 1
closedIssues: 50
watchers: 26
contributors: 23
recentReleases: 5
createdAt: "2024-02-03T08:52:07Z"
lastCommitAt: "2026-10-13T10:57:01Z"
lastReleaseAt: "2026-09-30T07:42:06Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 42
maintainers: ["rafapaezbas", "AndreiRegiani", "thundron"]
openGraphImageUrl: "https://opengraph.githubassets.com/24735539d4424e794d05e0798acafb876c9e370448ac298a53e55fb6956d9a26/holepunchto/pear"
---

# 🍐 Pear

## Setup
 
Via Node.js's npm's `npx`:

```sh
npx pear
```

This installs Pear onto the system. 

To complete the setup, be sure to follow instructions for setting `PATH` as output by the `npx pear` command.

### Help

```sh
pear help <cmd>
```

```sh
pear <cmd> --help
```

```sh
pear <cmd> -h
```

## Documentation

[Documentation](https://docs.pears.com)

## Platform Development

Platform development is generally referred to as **localdev**.

**Clone:**

```sh
git clone https://github.com/holepunchto/pear && cd pear
```

**Install deps:**

```sh
npm install
```

Build the runtime binaries with:

```sh
npm run make
```

Built artifacts are placed as standalone runtimes in `out/make`.

Use `./pear.dev` (`.\pear.ps1` / `.\pear.cmd` on Windows) to execute this checkout directly in localdev.

## OS Support

- **macOS** — arm64, x64
- **Linux** — arm64, x64
- **Windows** — arm64, x64

## License

Apache-2.0
