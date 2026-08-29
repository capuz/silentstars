---
repo: "progapandist/progapanda.org"
name: "progapanda.org"
description: "Source code for progapanda.org"
readmeQualityOk: true
url: "https://github.com/progapandist/progapanda.org"
homepage: "https://progapanda.org"
language: "Go"
languages: ["Go"]
languagePcts: [57]
topics: ["xterm-js", "golang", "websocket", "repl", "shell", "sveltejs", "docker", "k3s", "k8s", "sandbox"]
stars: 70
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-05-24T18:17:50Z"
lastCommitAt: "2026-08-29T17:27:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 49
maintainers: ["progapandist"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/266599090/81359b80-a58c-11ea-9941-3efebf540658"
---

# progapanda.org

Source code for :link: https://progapanda.org

A terminal in your browser. Every visitor gets a private, network-less
container running a Go TUI portfolio.

## How it works

1. The browser loads Xterm.js and opens a WebSocket to `/term`.
2. The Go server starts a throwaway Docker container per visitor
   (`--network none`, 0.1 CPU, 64M, `--rm`) behind a PTY.
3. PTY bytes and keystrokes are piped over the socket, raw. Xterm owns UTF-8
   decoding, because a multibyte character can straddle two messages.

The TUI inside the container is `cmd/hello2` in this repo. It began life as a
separate repository and its history came along with it.

Wire format is binary frames, first byte is the type: `0` raw terminal bytes,
`1` a JSON `{"rows":n,"cols":n}` resize. The first message a client sends must
be a resize — the server needs it to size the PTY.

## Layout

| path | what |
|---|---|
| `cmd/webterm` | the web server: WebSocket, PTY, one container per visitor |
| `cmd/hello2` | the TUI that runs inside that container |
| `cmd/hello2/content.md` | **all the prose — edit this to change the copy** |
| `visitor` | everything else that ships in the visitor container |
| `src`…
