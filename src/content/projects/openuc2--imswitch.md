---
repo: "openUC2/ImSwitch"
name: "ImSwitch"
description: "ImSwitch is a software solution in Python that aims at generalizing microscope control by providing a solution for flexible control of multiple microscope modalities."
url: "https://github.com/openUC2/ImSwitch"
homepage: "https://docs.openuc2.com"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [55, 27]
stars: 18
forks: 22
openIssues: 21
closedIssues: 107
watchers: 0
contributors: 28
recentReleases: 0
createdAt: "2021-07-09T07:26:54Z"
lastCommitAt: "2026-06-29T07:21:44Z"
lastReleaseAt: "2022-11-29T06:58:05Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 81
maintainers: ["beniroquai", "gokugiant", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59faf7d5d28de65fd89019d096203196afe84d76442b28de0b64bfeb06ff4d13/openUC2/ImSwitch"
discussionCount: 2
---

# ImSwitch

ImSwitch is a Python program which aims at generalizing microscope control. Here is an intro video from Jacopo (developer of the original ImSwitch project) about ImSwitch: <https://www.youtube.com/watch?v=B54QCt5OQPI>

The openUC2/ImSwitch repo is a hard fork of the upstream project at [ImSwitch/ImSwitch](https://github.com/ImSwitch/ImSwitch), which is no longer maintained; openUC2/ImSwitch runs ImSwitch as a server in headless mode with an HTTP API which used by a React single-page-app browser GUI (also served from the ImSwitch server). This fork does not maintain the upstream's Qt-based desktop GUI.

## Development

These instructions are for people developing and maintaining ImSwitch.

### Setup

Run:

```bash
# Install uv
cd ~
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

# Clone the ImSwitch repository
git clone https://github.com/openUC2/ImSwitch
cd ImSwitch

# Create a virtual environment and install ImSwitch with UV
uv venv --system-site-packages
uv sync

# then start it in headless mode with the API server:
uv run python main.py --headless --http-port 8001
```

# Alternative installation with uv pip (not recommended, may cause…
