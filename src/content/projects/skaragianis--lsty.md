---
repo: "skaragianis/lsty"
name: "lsty"
description: "Terminal lists for Humans and Agents"
readmeQualityOk: true
url: "https://github.com/skaragianis/lsty"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agentic-workflows", "lists", "todos", "cli", "time-management", "tui", "agent-memory", "agent-orchestration"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-06T00:53:05Z"
lastCommitAt: "2026-11-06T02:43:40Z"
lastReleaseAt: "2026-10-29T05:22:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["skaragianis", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1406532416/0eb1e3e1-752c-40bf-ad94-5cd5ac324585"
---

# lsty

Terminal lists for Humans and Agents.

lsty is a Vim-inspired [todo.txt](http://todotxt.org/) TUI written in Rust,
and a [todo.sh](https://github.com/todotxt/todo.txt-cli)-inspired CLI with
extensions for safe concurrent use by humans, scripts, and LLM agents.

## What It's For

- Personal todo list that includes recurring tasks
- Human in the loop with agents posting decisions for approval
- Agentic loop memory that a human can keep an eye on
- Software factory single source of truth with file and web links
- Work queue for parallel agents and agent types
- Tracking agent cycle time for your definition of done

## Features

- Watch agents work lists in "real-time"
- Vim-inspired TUI with configurable key bindings and themes. Normal, insert,
  visual and command-line modes. `u` for undo and `<C-r>` for redo
- Priorities, projects, contexts, dependencies, dates, and links
- Extensive filtering combined with and (a space), or (`|`) and not (`-`)
- Auto-completion of commands, filters, projects and contexts
- Nesting of projects and contexts with `.` or `/`
- A CLI for listing, adding, editing, waiting on, and completing tasks
- JSON output for scripts and agents. Retry-safe…
