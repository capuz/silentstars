---
repo: "albertyw/albertyw.com"
name: "albertyw.com"
description: "Personal website"
readmeQualityOk: true
url: "https://github.com/albertyw/albertyw.com"
homepage: "https://www.albertyw.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [39, 34]
topics: ["albertyw", "flask", "personal-website", "blog", "base-flask", "python", "hacktoberfest"]
stars: 6
forks: 2
openIssues: 13
closedIssues: 59
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2013-12-27T09:01:33Z"
lastCommitAt: "2026-10-12T11:15:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 71
maintainers: ["albertyw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c18810cf678d0af348204b71c204863bbd1bc3d2139558842552e294d6448826/albertyw/albertyw.com"
---

# [albertyw.com](https://www.albertyw.com)

Personal website

## Development

### Setup Development Environment

Using [python venv](https://docs.python.org/3/library/venv.html),
[direnv](https://github.com/direnv/direnv), and [pnpm](http://pnpm.io/).

```bash
python3.14 -m venv env
pip install -e .[test]
ln -s .env.development .env
pnpm install

# Install shellcheck
# brew install shellcheck
# sudo apt-get install shellcheck
```

### Spinning up the server

```bash
pnpm run build:dev
python app/serve.py
```

### Running tests

```bash
ruff check .
mypy .
shellcheck --exclude=SC1091 bin/*.sh
coverage run -m unittest discover
pnpm test
```

## CI/CD

This repo uses:

```bash
# Setup
pyenv local 3.14
pip install -e .[test]
ln -s .env.development .env

# Test
ruff check .
mypy .
coverage run -m unittest discover
coverage report
pnpm test

# Deployment
ssh ubuntu@direct.albertyw.com website/bin/deploy.sh
```

### Building and starting the docker container

```bash
docker build -t albertyw.com:test .
docker run -t -i -p 127.0.0.1:5000:5000 albertyw.com:test
```

## Production

### Setup Production Environment

Run this once on a new server to set up the web app:

```bash
bin/setup.sh…
