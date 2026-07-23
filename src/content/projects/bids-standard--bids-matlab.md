---
repo: "bids-standard/bids-matlab"
name: "bids-matlab"
description: "MATLAB / Octave tools for BIDS datasets"
readmeQualityOk: true
url: "https://github.com/bids-standard/bids-matlab"
homepage: "https://bids-matlab.readthedocs.io"
language: "MATLAB"
languages: ["MATLAB"]
languagePcts: [99]
topics: ["bids", "matlab", "octave", "neuroimaging", "eeg", "meg", "ieeg", "pet", "mri", "closember"]
stars: 58
forks: 36
openIssues: 31
closedIssues: 183
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2018-10-08T14:39:16Z"
lastCommitAt: "2026-07-23T06:14:30Z"
lastReleaseAt: "2024-09-11T15:15:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 39
maintainers: ["dependabot[bot]", "github-actions[bot]", "Remi-Gau"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf518038852d5c60a542a11c3409bcee6a5663fa69b33a948e602fa96b157efb/bids-standard/bids-matlab"
discussionCount: 0
---

# BIDS for MATLAB / Octave

This repository aims at centralising MATLAB/Octave tools to interact with
BIDS (Brain Imaging Data Structure) datasets.

For more information about BIDS, visit https://bids.neuroimaging.io/.

See also [PyBIDS](https://github.com/bids-standard/pybids) for Python and the
[BIDS Starter Kit](https://bids.neuroimaging.io/getting_started/index.html).

## Installation

### Requirements

BIDS-MATLAB works with:

- Octave 5.2.0 or newer
- MATLAB R2014a or newer

We aim for compatibility with the latest stable release of Octave at any time.
Compatibility can sometimes also be achieved with older versions of Octave but
this is not guaranteed.

For MacOS and Unix system, using `bids.copy_to_derivative` requires
a version of gunzip >= 1.6.

### Download or clone

Download, unzip this repository and add its content to the MATLAB/Octave path.

```Matlab
unzip('https://github.com/bids-standard/bids-matlab/archive/main.zip');
addpath('bids-matlab-main');
```

Or clone it with git:

```bash
git clone https://github.com/bids-standard/bids-matlab.git
```

and then add it to your MATLAB/Octave path.

```Matlab
addpath('bids-matlab');
```

### Get the latest features

Stable…
