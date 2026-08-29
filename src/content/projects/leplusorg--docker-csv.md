---
repo: "leplusorg/docker-csv"
name: "docker-csv"
description: "Multi-platform Docker container with utilities to process CSV files (csvkit, csvcut, csvgrep, csvsql, csvjson, csvq...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-csv"
homepage: "https://hub.docker.com/r/leplusorg/csv"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [65, 35]
topics: ["csv", "csv-manipulation-utitilies", "csvkit", "docker-container", "docker", "dockerfile", "csvsql"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-04T22:59:12Z"
lastCommitAt: "2026-08-29T17:28:05Z"
lastReleaseAt: "2025-01-10T06:03:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 84
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a07acbb9925043ac0bbb38ba7e0f07325c4cc2ee832a15b478846f6b0dcaba8f/leplusorg/docker-csv"
---

# CSV

Multi-platform Docker container with utilities to process CSV files (`csvkit`, `csvcut`, `csvgrep`, `csvsql`, `csvjson`, `csvq`...).

## Example not using the filesystem

Let's say that you have a CSV file `foo.csv` and that you want to extract the column named `bar`:

**Mac/Linux**

```bash
cat foo.csv | docker run --rm -i --net=none leplusorg/csv csvsql --table foo --query "select bar from foo"
```

**Windows**

```batch
type foo.csv | docker run --rm -i --net=none leplusorg/csv csvsql --table foo --query "select bar from foo"
```

## Example using the filesystem

Same thing, assuming that you have a CSV file `foo.csv` and that you want to extract the column named `bar`:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/csv csvsql --query "select bar from foo" /tmp/foo.csv
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/csv csvsql --query "select bar from foo" /tmp/foo.csv
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/csv csvsql --query "select bar from foo" /tmp/foo.csv
```

## Help

To know more command-line options of one of the…
