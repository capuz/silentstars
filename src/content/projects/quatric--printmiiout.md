---
repo: "quatric/PrintMiiOut"
name: "PrintMiiOut"
description: "3D Print Your Mii"
readmeQualityOk: true
url: "https://github.com/quatric/PrintMiiOut"
homepage: "https://printmiiout.com/"
language: "C++"
languages: ["C++"]
languagePcts: [51]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-07T17:27:21Z"
lastCommitAt: "2026-11-17T14:48:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["quatric", "cmyksoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/a555a691bda597dac92c2f9894c6fbfe28fee19c6934f3e1aad8f75576ec48db/quatric/PrintMiiOut"
---

# PrintMiiOut

PrintMiiOut converts Nintendo Mii characters into 3D-printable STL models. Enter an NNID/PNID, upload a binary file or QR code, and export a ready-to-print 3D model, built right in your browser. It also prints sticker sheets, and towel and shirt designs, as PDFs for your regular printer.

## Features
- **Multiple Input Sources**: Fetch Miis by Nintendo Network ID (NNID), Pretendo Network ID (PNID), binary `.mii` / `.ffsd` files, or QR code images.
- **Built in Your Browser**: The model pipeline is C++ ([core/](https://github.com/quatric/PrintMiiOut/blob/HEAD/core/README.md)) compiled to WebAssembly, with [assimp](https://github.com/assimp/assimp) reading the Mii and writing the STL. The browser fetches the Mii straight from the Mii API and builds the model itself, smoothing it and fusing everything into one watertight solid; the server only reads the form (decrypting QR codes and looking up NNIDs).
- **True Body Proportions**: The body follows the Mii's own height and build, scaled bone by bone the way Nintendo's editor scales it (the same rules as [FFL.js](https://github.com/ariankordi/FFL.js)). Arms, legs, wrists and ankles are held at a printable minimum…
