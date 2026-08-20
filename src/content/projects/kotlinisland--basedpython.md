---
repo: "KotlinIsland/basedpython"
name: "basedpython"
description: "based python type checking and a Python-like language that transpiles to pure Python"
readmeQualityOk: true
url: "https://github.com/KotlinIsland/basedpython"
homepage: "https://kotlinisland.github.io/basedpython/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["based", "python", "transpiled", "typeshed", "typing"]
stars: 13
forks: 0
openIssues: 4
closedIssues: 5
watchers: 1
contributors: 131
recentReleases: 8
createdAt: "2026-04-20T00:48:12Z"
lastCommitAt: "2026-08-20T04:08:01Z"
lastReleaseAt: "2026-08-10T01:03:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 52
maintainers: ["KotlinIsland", "renovate[bot]", "charliermarsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a018c0aedf09a494bb64916d31aeb4170090ca1fe9640859d7a3601b9007413a/KotlinIsland/basedpython"
---

# basedpython

a python type checker and a python-like language that transpiles to pure python

- **a python type checker with framework support** — pydantic, sqlalchemy,
    pytest and django are modelled directly, so the magic they do at runtime
    checks like ordinary code
- **basedpython, a python-like language that builds into python wheels**
- **compiles into high performance python extension modules**
- **a language server, formatter and linter** — high performance and feature rich tooling

```by
enum class Shape:
    case Circle(radius: int)
    case Rect(width: int, height: int)

    def area(self) -> int:
        return match self:
            case Shape.Circle(r):
                3 * r * r
            case Shape.Rect(w, h):
                w * h

extension list[Element: Shape]:
    def first_circle(self) -> Shape.Circle?:
        for shape in self:
            if shape is Shape.Circle:
                return shape
        return None

def stats(shapes: list[Shape]) -> (count: int, total: int):
    return (len(shapes), sum(s.area() for s in shapes))

def main():
    let shapes = [Shape.Circle(1), Shape.Rect(2, 3)]
    let summary = stats(shapes)…
