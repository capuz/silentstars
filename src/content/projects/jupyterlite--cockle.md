---
repo: "jupyterlite/cockle"
name: "cockle"
description: "In-browser bash-like shell implemented in TypeScript."
readmeQualityOk: true
url: "https://github.com/jupyterlite/cockle"
homepage: "https://jupyterlite.github.io/cockle"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 25
forks: 8
openIssues: 16
closedIssues: 55
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2024-04-17T08:44:16Z"
lastCommitAt: "2026-11-26T12:58:39Z"
lastReleaseAt: "2024-12-13T07:48:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 65
maintainers: ["ianthomas23", "Alex-PLACET", "jtpio"]
openGraphImageUrl: "https://opengraph.githubassets.com/c072ea007362ead14d954ecddf1035bac72b6768b30c00c10fa81349d11682da/jupyterlite/cockle"
fundingLinks: ["CUSTOM:https://jupyter.org/about#donate"]
---

# cockle

In-browser bash-like shell implemented in a combination of TypeScript and WebAssembly.

Used in the [JupyterLite terminal extension](https://github.com/jupyterlite/terminal).

Try it out outside of JupyterLite on GitHub Pages at https://jupyterlite.github.io/cockle.

Commands of the following types are supported:

1. Built-in TypeScript commands such as `history`. The source code for these is within this repo.
2. WebAssembly commands, from C/C++ source code, compiled into `.js` and `.wasm` files.
   These are usually built by [Emscripten-forge](https://emscripten-forge.org/) although they can be
   manually built, and are added to a deployment during the deployment build process.
3. JavaScript commands that are loaded and run in the same as WebAssembly commands except they have
   a `.js` file and no `.wasm` file. There is an example of creating a JavaScript command from
   TypeScript source code for use in the Jupyterlite terminal in the
   [terminal-javascript-command](https://github.com/ianthomas23/terminal-javascript-command) repo.
4.
