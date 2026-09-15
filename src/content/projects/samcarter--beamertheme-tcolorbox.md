---
repo: "samcarter/beamertheme-tcolorbox"
name: "beamertheme-tcolorbox"
description: "An inner theme for beamer/ltx-talk which reproduces standard beamer blocks using tcolorboxes"
readmeQualityOk: true
url: "https://github.com/samcarter/beamertheme-tcolorbox"
homepage: "https://ctan.org/pkg/beamertheme-tcolorbox"
language: "TeX"
languages: ["TeX"]
languagePcts: [98]
topics: ["beamer", "beamer-theme", "latex-package", "latex", "latex-beamer-theme", "presentations"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-25T15:27:27Z"
lastCommitAt: "2026-09-15T08:56:10Z"
lastReleaseAt: "2025-04-14T18:31:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 48
maintainers: ["samcarter"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b35613b1677cdcbd3f44f710c7d55e72be35f9cad63d20593d399820b07c385/samcarter/beamertheme-tcolorbox"
---

# beamertheme-tcolorbox

A beamer/ltx-talk inner theme which reproduces standard beamer blocks using tcolorboxes.

This project is licensed under the LaTeX Project Public License v1.3c or later, see https://www.latex-project.org/lppl.txt .

The project repository, including a bug tracker, can be found at https://github.com/samcarter/beamertheme-tcolorbox .

### Usage with beamer

```latex
\documentclass{beamer}

\usecolortheme{orchid}
\useinnertheme{tcolorbox}

\begin{document}

\begin{frame}
  \begin{block}{Title}
    Content
  \end{block}
\end{frame}

\end{document}
```

### Usage with ltx-talk

```latex
\DocumentMetadata{}
\documentclass{ltx-talk}

\usepackage{talkthemetcolorbox}

\begin{document}

\maketitle

\begin{frame}
  \begin{block}{Title}
    Content
  \end{block}
\end{frame}

\end{document}
```

For more details, please consult the [package documentation](https://github.com/samcarter/beamertheme-tcolorbox/blob/main/DOCUMENTATION.pdf).
