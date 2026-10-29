---
repo: "cram2/cognitive_robot_abstract_machine"
name: "cognitive_robot_abstract_machine"
description: "A cognitive architecture for the entire stack of robotics"
readmeQualityOk: true
url: "https://github.com/cram2/cognitive_robot_abstract_machine"
homepage: "https://cram2.github.io/cognitive_robot_abstract_machine/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 24
forks: 61
openIssues: 26
closedIssues: 31
watchers: 2
contributors: 56
recentReleases: 0
createdAt: "2025-12-01T14:44:16Z"
lastCommitAt: "2026-10-29T10:36:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["Sanic", "LucaKro", "AbdelrhmanBassiouny"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd34f9ee956b7ee9cfa70758709c6ed2f6cb55e4e5ffa2507f16c04ba9c48b82/cram2/cognitive_robot_abstract_machine"
---

# Cognitive Robot Abstract Machine (CRAM)

Monorepo for the CRAM cognitive architecture. 

## Installation

### Clone the repo and its submodules
Pull the submodules:
```bash
git clone https://github.com/cram2/cognitive_robot_abstract_machine.git
cd cognitive_robot_abstract_machine
git submodule update --init --recursive
```

### CRAM Architecture Installation

To install the CRAM architecture, follow these steps:

Setup the Python venvironment:

```bash
sudo apt install -y virtualenv virtualenvwrapper && \
grep -qxF 'export WORKON_HOME=$HOME/.virtualenvs' ~/.bashrc || echo 'export WORKON_HOME=$HOME/.virtualenvs' >> ~/.bashrc && \
grep -qxF 'export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3' ~/.bashrc || echo 'export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3' >> ~/.bashrc && \
grep -qxF 'source /usr/share/virtualenvwrapper/virtualenvwrapper.sh' ~/.bashrc || echo 'source /usr/share/virtualenvwrapper/virtualenvwrapper.sh' >> ~/.bashrc && \
source ~/.bashrc && \
mkvirtualenv cram-env --system-site-packages
```
Activate / deactivate

```
workon cram-env
deactivate
```

#### Optional: Setup your ROS Workspace
To run the tests or use CRAM with a real robot you need to setup a ROS…
