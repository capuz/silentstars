---
repo: "ControlThings-io/ctui"
name: "ctui"
description: "ctui is a library similar to Python's cmd, but with curses-like user interface"
readmeQualityOk: true
url: "https://github.com/ControlThings-io/ctui"
homepage: "https://github.com/ControlThingsTools/ctui"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["controlthings", "curses", "python", "python-cmd", "prompt-toolkit", "termui", "gui"]
stars: 32
forks: 10
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2018-12-24T08:08:03Z"
lastCommitAt: "2026-09-19T01:15:59Z"
lastReleaseAt: "2026-09-14T00:28:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 57
maintainers: ["meeas"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d74e3cb0f369c7558d468bef4db499e8156f33033c9a92a53b91dfcf67017db/ControlThings-io/ctui"
---

# ControlThings User Interface

`ctui` is an event-driven Python framework for command tools that work both as
full-screen terminal interfaces and traditional command-line programs. Write
ordinary typed functions; ctui supplies parsing, validation, async execution,
completion, history, layout, and automatic CLI routing.

## Installation

ctui requires Python 3.11 or newer:

```bash
python -m pip install ctui
```

## Quick start

```python
from pathlib import Path
from typing import Literal
from ctui import Argument, CommandError, CtuiApp, command

class FileTool(CtuiApp):
    name = "files"
    prompt = "files> "

    @command(
        aliases=("ls",),
        arguments={"order": Argument(flags=("-o", "--order"))},
    )
    async def list_files(self, directory: Path = Path("."),
                         order: Literal["name", "size"] = "name") -> str:
        """List files in a directory."""
        if not directory.is_dir():
            raise CommandError(f"Not a directory: {directory}")
        key = (lambda item: item.stat().st_size) if order == "size" else None
        return "\n".join(item.name for item in sorted(directory.iterdir(), key=key))

FileTool().run()
```

Commands…
