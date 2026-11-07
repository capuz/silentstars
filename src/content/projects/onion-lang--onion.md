---
repo: "onion-lang/onion"
name: "onion"
description: "Onion - statically typed object-oriented programming language"
readmeQualityOk: true
url: "https://github.com/onion-lang/onion"
homepage: "http://github.com/kmizu/onion"
language: "Scala"
languages: ["Scala"]
languagePcts: [92]
stars: 36
forks: 4
openIssues: 77
closedIssues: 521
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2010-04-11T23:55:14Z"
lastCommitAt: "2026-11-07T22:51:28Z"
lastReleaseAt: "2026-06-11T10:33:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 59
maintainers: ["kmizu", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b50ba75a8e350a21121ec4e1843b0bba19213c48510b8fd6baf050542c202cb/onion-lang/onion"
---

## Onion — typed tools for a messy world [](https://github.com/onion-lang/onion/actions)

Onion is a statically typed language for turning messy external data into checked,
reversible tools. It runs on the JVM and calls Java directly.

Most languages hand you a `String` at the boundary and wish you luck. Onion asks you to
describe the boundary once — and derives the parser, the printer, the failure channel and
the command-line interface from that one description.

```onion
record Access(ip: String, method: String, path: String, status: Int) {
  shape common = re"(\S+) (\w+) (\S+) (\d+)"
}

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
