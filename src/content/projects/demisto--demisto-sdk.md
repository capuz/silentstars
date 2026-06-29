---
repo: "demisto/demisto-sdk"
name: "demisto-sdk"
description: "Demisto SDK - Create Demisto Content with ease and efficiency"
url: "https://github.com/demisto/demisto-sdk"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["xsoar-content", "active-repository"]
stars: 87
forks: 101
openIssues: 0
closedIssues: 0
watchers: 20
contributors: 180
recentReleases: 0
createdAt: "2019-11-03T11:36:13Z"
lastCommitAt: "2026-06-29T07:21:46Z"
lastReleaseAt: "2019-12-22T09:19:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 51
maintainers: ["Shir2611", "kobymeir", "rshunim"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d2596b3325c9ba9d1c79fc049e2ca0f5be9c0a034d70fdf2766de2d02a684bb/demisto/demisto-sdk"
---

# Demisto SDK

The Demisto SDK is a Python library designed to aid the development process, both to validate entities being developed and to assist in the interaction between your development setup and Cortex XSOAR or Cortex XSIAM.

Requirements:

- Python 3.10, 3.11, 3.12, 3.13, or 3.14.
- git installed.
- A linux, mac or WSL2 machine.

Windows machines are not supported - use WSL2 or run in a container instead.

## Usage

### Installation

- **Install** - `pip3 install demisto-sdk`
- **Upgrade** - `pip3 install --upgrade demisto-sdk`

### Environment Variable Setup
**Connect demisto-sdk with Cortex XSOAR server** - Some SDK commands require you to have an interaction with the Cortex XSOAR or Cortex XSIAM server. Examples of such interactions
include uploading and downloading entities to or from XSOAR or XSIAM and running commands in the CLI.

To use these functions, Set the following environment variables, or place an [.env file](https://pypi.org/project/python-dotenv/) at the root of the content pack:

#### For Cortex XSOAR 6.x Only
 1. Get your API key by going to the Cortex XSOAR server -> `Settings` -> `Integrations` -> `API Keys` -> `Get Your Key` -> Give your key a name…
