---
repo: "devskale/chawan"
name: "chawan"
description: "Unofficial mirror (daily) of Chawan, a text-mode web browser and pager for Unix-like systems."
url: "https://github.com/devskale/chawan"
homepage: "https://chawan.net/"
language: "Nim"
languages: ["Nim", "C"]
languagePcts: [49, 43]
topics: ["browser", "terminal", "tui", "webbrowser"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-07-25T07:00:24Z"
lastCommitAt: "2026-06-27T00:45:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 69
maintainers: ["bptato", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a8a7cd8c9ad913652035e4992a4a7e3032c9b2ae66c3efde36b2b724dd360f0/devskale/chawan"
---

[Chawan](https://chawan.net) is a TUI web (and (S)FTP, Gopher, Gemini,
...) browser with CSS, inline image and JavaScript support.

It uses its own small browser engine developed from scratch, which can
nevertheless display many websites in a manner similar to major graphical
browsers.

It can also be used as a terminal pager.

## Compiling

A Unix-like operating system (Linux, \*BSD, Haiku, macOS, ...) is
assumed.  On Windows you have to use WSL.

1. Clone the Chawan repository:  
   `git clone https://git.sr.ht/~bptato/chawan && cd chawan`
2. Install the Nim compiler: <https://nim-lang.org/install.html>
	* Please use 2.0.0 or newer, ideally 2.2.10.  (`nim -v` displays your
	  Nim compiler's version.)
	  The 1.6 branch from 1.6.14 upwards may still work, but it isn't
	  recommended unless you have no other choice.
	* If you are using a 32-bit system, you probably need 2.2 or newer.
	  2.0 may still work if you `export CFLAGS=-fpermissive`.
3. Install the following dependencies:
	* [OpenSSL](https://www.openssl.org/) (or
	  [LibreSSL](https://www.libressl.org/))
	* [libssh2](https://libssh2.org/)
	* [brotli](https://github.com/google/brotli)
	* pkg-config
	* GNU make (gmake on…
