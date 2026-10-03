---
repo: "Orange-Cyberdefense/glpwnme"
name: "glpwnme"
description: " GLPI vulnerabilities checking tool "
readmeQualityOk: true
url: "https://github.com/Orange-Cyberdefense/glpwnme"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 184
forks: 24
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2025-03-20T13:37:34Z"
lastCommitAt: "2026-10-03T09:20:34Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 43
maintainers: ["Guilhem7", "Ne0re0", "chapochapo"]
openGraphImageUrl: "https://opengraph.githubassets.com/c018a39362d56551d31df42f70b191995644e1ca7f182ee4fbd7dd1b3bf0dbb1/Orange-Cyberdefense/glpwnme"
---

# Glpwnme
glpwnme is a tool used to check for vulnerabilities on running instance of glpi

## :sunny: Contribution
If you found a vulnerability on **GLPI** which is not implemented on **glpwnme**, do not hesitate to add it !

You can copy the file ```exploits/implementations/template.py``` and import it in ```exploits/implementations/__init__.py```.

## :wrench: Install
To **install** glpwnme you can use the following:
```bash
pipx install .
poetry install
```

With **pip**:
```bash
pip3 install . # in a venv
python3 -m glpwnme
```

## TLDR
Here is a quick sum up on how to use glpwnme:
```sh
glpwnme -t "$Target" --check-all --no-opsec # Run all check without caring about opsec
glpwnme -t "$Target" -e "$EXPLOIT_NAME" --infos # Show how to use the exploit
glpwnme -t "$Target" -e "$EXPLOIT_NAME" --run
cat log.glpwnme # Check what happened
glpwnme -t "$Target" -e "$EXPLOIT_NAME" --clean # Clean the target
glpwnme --find-by-version 10.0.25
```

## :whale: Docker
You can also run glpwnme using Docker, which eliminates the need to install dependencies locally.

### Basic Usage
```bash
# Build the images
docker compose build

# Run glpwnme with arguments (--rm to not polute fs)
docker…
