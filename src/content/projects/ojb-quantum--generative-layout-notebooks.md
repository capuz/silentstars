---
repo: "OJB-Quantum/Generative-Layout-Notebooks"
name: "Generative-Layout-Notebooks"
description: "GDSII/OASIS layouts, including fractals, generated in working Google Colab notebooks. Layout previews are plotted as 2D graphics before exporting."
readmeQualityOk: true
url: "https://github.com/OJB-Quantum/Generative-Layout-Notebooks"
homepage: "https://ojb-quantum.github.io/Generative-Layout-Notebooks/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
topics: ["gds", "gdsii", "generative-design", "layout", "lithography", "microfabrication", "nanofabrication", "oasis", "fractals", "open-source"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-29T15:35:18Z"
lastCommitAt: "2026-08-31T10:01:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 64
maintainers: ["OJB-Quantum"]
openGraphImageUrl: "https://opengraph.githubassets.com/45307f804cb5afe4ad0b5d6306a98353ddf37f15358617f796f8121525e47d05/OJB-Quantum/Generative-Layout-Notebooks"
---

# Generative-Layout-Notebooks
GDSII/OASIS layout generation done completely in Google Colab notebooks. Layout previews are plotted as 2D graphics before exporting. The notebooks are authored by Onri Jay Benally.

No need to download anything manually, just run the notebooks.

Note: This repository also contains some interesting fractal design layouts. It is also possible to use CuPy to access the GPU through CUDA to help generate extremely complex and dense designs if you're interested. See the CUDA-accelerated example notebook(s) featured in the files above.

Here is a online rendered view of the notebooks: [](https://nbviewer.org/github/OJB-Quantum/Generative-Layout-Notebooks/tree/main/)

Majority of the code used in this repository uses:
- [GDSTK](https://heitzmann.github.io/gdstk/gettingstarted.html)
- [PHIDL](https://phidl.readthedocs.io/en/latest/tutorials/quickstart.html)
- [numpy](https://numpy.org)
- [matplotlib](https://matplotlib.org)
- [NetworkX](https://networkx.org/en/)

Notes on Self-Avoiding Curve or Self-Avoiding Fractal Curve (Sometimes Called Non-Overlapping Fractal Curve): 
- Doesn't always have to fill space (evenly). 
- Emptier space in the middle of a large…
