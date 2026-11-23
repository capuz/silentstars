---
repo: "HorusExE69/ftorture"
name: "ftorture"
description: "A 42 Checker"
readmeQualityOk: true
url: "https://github.com/HorusExE69/ftorture"
language: "C"
languages: ["C", "Python"]
languagePcts: [57, 43]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-15T17:58:24Z"
lastCommitAt: "2026-11-23T10:26:16Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 41
maintainers: ["HorusExE69", "Gaeritag"]
openGraphImageUrl: "https://opengraph.githubassets.com/320605571ed8786b9a7c5cb2988885fca24697afe14da5ea165295a2b56e0212/HorusExE69/ftorture"
---

# 🔥 ftorture — 42 tester: libft, ft_printf, get_next_line & push_swap

🇫🇷 [Version française](https://github.com/HorusExE69/ftorture/blob/HEAD/README.fr.md)

> *Your code will talk.*

**ftorture** puts your project to the question: every test runs in its own process,
face to face with the **real** libc function. It watches how it crashes, what it leaks,
and what it reads outside its memory.

| Project | Subject | What is tested |
|---|---|---|
| **libft** | v19.3 | all 43 functions (parts 1, 2 and 3), ~400 tests + fuzzing |
| **ft_printf** | v12.1 | `cspdiuxX%` + bonus `-0.`, width, `# +`, ~22,000 calls compared with `printf` |
| **get_next_line** | v14.3 | 14 `BUFFER_SIZE`s, files, stdin, pipe, `read` errors, multi-fd bonus |
| **push_swap** | v1.2 | errors, the 4 strategies, `--bench`, 100 / 500 number thresholds, valgrind, `checker` bonus |

Inspired by [Caesarovich/zft](https://github.com/Caesarovich/zft): a C test engine
with modular Python orchestration. Requires **Linux**, **Python 3.10+**, `cc`,
`make`, and `nm`. Installation, orchestration, and subject checks use Python only.
No pip packages are needed; norminette is optional.
