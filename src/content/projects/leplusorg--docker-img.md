---
repo: "leplusorg/docker-img"
name: "docker-img"
description: "Multi-platform Docker container with utilities to process images (imagemagick, exiftool, optipng...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-img"
homepage: "https://hub.docker.com/r/leplusorg/img"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [57, 43]
topics: ["imagemagick", "exiftool", "docker-container", "docker", "docker-image", "dockerfile", "jpeg", "jpg", "png", "exif"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-03T19:57:08Z"
lastCommitAt: "2026-08-29T17:28:10Z"
lastReleaseAt: "2025-01-11T01:26:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 70
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/91d898138ae9dd314c699d9489f305a891c2a19cd1fb3491b3c709ea43f1fd12/leplusorg/docker-img"
---

# Images

Multi-platform Docker container with utilities to process images (`imagemagick`, `exiftool`, `optipng`...).

## Example without using the filesystem

Let's say that you have an image `foo.jpg` in your current working directory that you want to extract its metadata:

**Mac/Linux**

```bash
cat foo.jpg | docker run --rm -i --net=none leplusorg/img magick identify -
```

**Windows**

```batch
type foo.jpg | docker run --rm -i --net=none leplusorg/img magick identify -
```

## Example using the filesystem

Same thing, assuming that you have an image `foo.jpg` in your current working directory that you want to extract its metadata:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/img magick identify /tmp/foo.jpg
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/img magick identify /tmp/foo.jpg
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/img magick identify /tmp/foo.jpg
```

## Help

To know more command-line options of one of the imagemagick command:

```bash
docker run --rm --net=none leplusorg/img magick -help
```

## Software Bill…
