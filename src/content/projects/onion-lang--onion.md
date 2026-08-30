---
repo: "onion-lang/onion"
name: "onion"
description: "Onion - statically typed object-oriented programming language"
readmeQualityOk: true
url: "https://github.com/onion-lang/onion"
homepage: "http://github.com/kmizu/onion"
language: "Scala"
languages: ["Scala"]
languagePcts: [89]
stars: 32
forks: 4
openIssues: 0
closedIssues: 240
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2010-04-11T23:55:14Z"
lastCommitAt: "2026-08-30T00:42:39Z"
lastReleaseAt: "2026-06-11T10:33:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["claude", "kmizu"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6f6c6f3a0f8389a3bd4253ae0bce62dc617bf17ea72d0e7efa342f5073682e/onion-lang/onion"
---

## Onion — typed tools for a messy world [](https://github.com/onion-lang/onion/actions)

Onion is a statically typed language for turning messy external data into checked,
reversible tools. It runs on the JVM and calls Java directly.

Most languages hand you a `String` at the boundary and wish you luck. Onion asks you to
describe the boundary once — and derives the parser, the printer, the failure channel and
the command-line interface from that one description.

```onion
record Access(ip: String, method: String, path: String, status: Int)
  shape common = re"(\S+) (\w+) (\S+) (\d+)"

def main(path: String, min: Int = 400): void {
  val each = file(path).eachLine(Access::common())

  foreach a: Access in Outcome::values(each) {
    if a.status() >= min { println(a.status() + " " + a.path()) }
  }
  foreach d: Defect in Outcome::defects(each) {
    println("line " + d.origin().line() + ": " + d.expected())
  }
}
```

One declaration gives you parsing, printing, and a CLI with `--min` and `--help` derived
from `main`'s signature.

The last two lines are the point. A thousand-line log with five corrupted lines gives you
995 rows **and** the five you could not read, each with its…
