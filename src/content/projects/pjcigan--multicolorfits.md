---
repo: "pjcigan/multicolorfits"
name: "multicolorfits"
description: "Python tool for colorizing and combining fits images."
readmeQualityOk: true
url: "https://github.com/pjcigan/multicolorfits"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 43
forks: 5
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2018-12-11T10:33:55Z"
lastCommitAt: "2026-07-19T06:10:31Z"
lastReleaseAt: "2026-07-19T06:03:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 34
maintainers: ["pjcigan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c933587ce0208c0b11c2fbfd7c80be879eb67aad6ae96d56a9676a72d8cf8d2/pjcigan/multicolorfits"
---

# multicolorfits

Colorize and combine multiple FITS images for visually aesthetic scientific
plots — with any number of image layers, in any colors.

**version 3.0.0**

API documentation: [https://multicolorfits.readthedocs.io](https://multicolorfits.readthedocs.io)

Sharing / customization: please play around — BSD 3-Clause License.

If you find this useful for your work, giving me (Phil Cigan) a nod in your
acknowledgements would be greatly appreciated.  For a formal citation, see
[`CITATION.cff`](https://github.com/pjcigan/multicolorfits/blob/HEAD/CITATION.cff) (GitHub *Cite this repository*), BibTeX from
[the ASCL entry on ADS](https://ui.adsabs.harvard.edu/abs/2019ascl.soft09002C/abstract)
(`ascl:1909.002`), or the
[Zenodo DOI](https://doi.org/10.5281/zenodo.3256060) (*Export* panel; ADS also
indexes [10.5281/zenodo.3256061](https://ui.adsabs.harvard.edu/abs/2019zndo...3256061C/abstract)).

---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/mcf_gui_Crab_dark.png">
</picture>

## What's new in v3

Version 3 rebuilds the project as a proper package **without** traits / traitsui
/ pyface / PyQt.  The core library uses only the scientific stack…
