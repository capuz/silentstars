---
repo: "bethropolis/mimo"
name: "mimo"
description: "a simple programming language written in js. "
readmeQualityOk: true
url: "https://github.com/bethropolis/mimo"
homepage: "https://mimo-lang.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["ast", "compiler", "javascript", "lexer", "parser", "programming-language"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-08T23:20:24Z"
lastCommitAt: "2026-10-26T20:58:15Z"
lastReleaseAt: "2026-03-07T06:22:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 37
maintainers: ["dependabot[bot]", "bethropolis", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/953813d57c3b8437b9fd992ac0ed9547b32a33ecda944a3d26f5361775c61531/bethropolis/mimo"
---

---

## Installation

```bash
npm install -g mimo-lang
```

## Usage

### Run Programs

```bash
mimo path/to/program.mimo
mimo -e "+ 1 2"
echo "+ 1 2" | mimo
```

### REPL

```bash
mimo repl
```

### CLI Commands

```bash
mimo run <file>           # Run a file
mimo repl                 # Start REPL
mimo fmt <path> --write   # Format files
mimo lint <path>          # Lint files
mimo test <path>          # Run tests
```

## Syntax

```mimo
function add(a, b)
  return + a b
end

call add(4, 8) -> result
show result
```

More examples in [`test/source/`](https://github.com/bethropolis/mimo/blob/HEAD/test/source).

## Development

```bash
bun install
bun run check
```

## Playground

The playground is a web application that allows you to run Mimo code in your browser.

## About
this is just a simple language i created to learn more about how programing languages work.
contributions are welcome.

## Links

- [Documentation](https://bethropolis.github.io/mimo/)
- [Playground](https://mimo-lang.vercel.app/playground/)
- [GitHub](https://github.com/bethropolis/mimo)

## License

Released under [MIT](https://github.com/bethropolis/mimo/blob/HEAD/LICENSE)
