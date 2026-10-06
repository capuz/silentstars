---
repo: "jakob-bagterp/colorist-for-python"
name: "colorist-for-python"
description: "🌈 Lightweight package that makes it easy and fast to print colored text in the terminal 🌈"
readmeQualityOk: true
url: "https://github.com/jakob-bagterp/colorist-for-python"
homepage: "https://jakob-bagterp.github.io/colorist-for-python/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "colors", "terminal", "color", "ansi-colors"]
stars: 50
forks: 6
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-01-29T07:27:31Z"
lastCommitAt: "2026-10-06T10:42:02Z"
lastReleaseAt: "2023-01-26T21:36:12Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 57
maintainers: ["jakob-bagterp", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b171bb54df54e2055d06be8908e8b22169d3825c491bebb149bf622201fe20/jakob-bagterp/colorist-for-python"
fundingLinks: ["GITHUB:https://github.com/jakob-bagterp"]
---

# 🌈 Colorist for Python 🌈
Lightweight Python package that makes it easy and fast to print colored text in the terminal.

Ready to try? See [how to install](https://jakob-bagterp.github.io/colorist-for-python/getting-started/installation/).

## Getting Started
### Print Line of Colored Text
How to print a full line of colored text in the terminal:

```python
from colorist import green, yellow, red

green("This is GREEN!")
yellow("This is YELLOW!")
red("This is RED!")
```

How it appears in the terminal:

### Print Mixed Text Colors
How to customize colors inside a paragraph and print it in the terminal:

```python
from colorist import Color

print(f"I want {Color.RED}red{Color.OFF} color inside this paragraph")

print(f"Both {Color.GREEN}green{Color.OFF} and {Color.YELLOW}yellow{Color.OFF} are nice colors")
```

How it appears in the terminal:

## Other Styling Options
### Print Bright Colors
Most terminals support bright colors that stand more out:

```python
from colorist import BrightColor

print(f"I want {BrightColor.CYAN}cyan{BrightColor.OFF} color inside this paragraph")
```

How it appears in the terminal:

Remember to use `Color.OFF` or `BrightColor.OFF` every time you…
