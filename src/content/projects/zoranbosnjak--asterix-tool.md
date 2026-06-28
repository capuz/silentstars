---
repo: "zoranbosnjak/asterix-tool"
name: "asterix-tool"
description: "Asterix data processing tool"
url: "https://github.com/zoranbosnjak/asterix-tool"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["asterix"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-04-03T17:26:43Z"
lastCommitAt: "2026-06-28T06:55:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 44
maintainers: ["zoranbosnjak"]
openGraphImageUrl: "https://opengraph.githubassets.com/009ca50ea9457d3160314c979674270a70109049fdda57d43b6f2cc1328d3b20/zoranbosnjak/asterix-tool"
discussionCount: 1
---

# Asterix data processing tool

*A versatile asterix data related command line tool*

This project uses
* [asterix-libs](https://github.com/zoranbosnjak/asterix-libs#readme)
library collection, which in turn uses
[asterix-specs](https://zoranbosnjak.github.io/asterix-specs/)
definition files. To add support for additional asterix
category/edition, please contribute patch to
[asterix-specs repository](https://github.com/zoranbosnjak/asterix-specs)
and this project will inherit the change automatically.

## python implementation

For install instructions, features list, usage details and examples see
[ast-tool-py](ast-tool-py/README.md).

## Subcommand composition with bash

Subcommands (`random`, `decode`, ...) can be composed in different
ways by using `bash` pipe operator. For example:

```bash
ast-tool-py random | head -n 3 | ast-tool-py decode -l 4 --truncate 80
```

### Buffering remark

Some bash commands (like `head`) are using buffering mode when they are
executed in the middle of a pipeline. To force line-buffered mode for such
commands, the `stdbuf -oL` can be used.

Examples:

```bash
# timing to the terminal is correct
ast-tool-py random --sleep 0.2

# timing to the…
