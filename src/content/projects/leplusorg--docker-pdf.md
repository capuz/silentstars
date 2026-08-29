---
repo: "leplusorg/docker-pdf"
name: "docker-pdf"
description: "Multi-platform Docker container with utilities to process PDF files (pdftk, ghostscript, ocrmypdf, pdfgrep, qpdf...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-pdf"
homepage: "https://hub.docker.com/r/leplusorg/pdf"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [71, 27]
topics: ["pdf", "pdftk", "pdf-manipulation-utitilies", "ghostscript", "docker-container", "docker", "docker-image", "dockerfile"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-12-03T19:47:44Z"
lastCommitAt: "2026-08-29T17:28:29Z"
lastReleaseAt: "2025-12-06T19:59:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 80
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa3be7c26207bfa262630a64d195b490001e9bf82a370bd8e4bdcbc84dc9a891/leplusorg/docker-pdf"
---

# PDF

Multi-platform Docker container with utilities to process PDF files (`pdftk`, `ghostscript`, `ocrmypdf`, `pdfgrep`, `qpdf`...).

## Example not using the filesystem

Assuming that you have a PDF file `foo.pdf` and you want to extract the first page to `bar.pdf`:

**Mac/Linux**

```bash
cat foo.pdf | docker run --rm -i --net=none leplusorg/pdf pdftk - cat output - > bar.pdf
```

**Windows**

```batch
type foo.pdf | docker run --rm -i --net=none leplusorg/pdf pdftk - cat output - > bar.pdf
```

## Example requiring the filesystem

Assuming that you have two PDF files `foo.pdf` and `bar.pdf` in your current working directory and you want to join them into a single `foobar.pdf`:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/pdf pdftk /tmp/foo.pdf /tmp/bar.pdf cat output /tmp/foobar.pdf
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/pdf pdftk /tmp/foo.pdf /tmp/bar.pdf cat output /tmp/foobar.pdf
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/pdf pdftk /tmp/foo.pdf /tmp/bar.pdf cat output /tmp/foobar.pdf
```

## Help

To know more…
