---
repo: "xjslang/xjs"
name: "xjs"
description: "eXtensible JavaScript parser"
readmeQualityOk: true
url: "https://github.com/xjslang/xjs"
homepage: "https://pkg.go.dev/github.com/xjslang/xjs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 3
closedIssues: 105
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-15T16:25:02Z"
lastCommitAt: "2026-08-28T14:38:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 73
maintainers: ["gchumillas"]
openGraphImageUrl: "https://opengraph.githubassets.com/e94e1eb31171ec58bde17dde13fb1f9661747e34fee52bc50d61e7a2031240e8/xjslang/xjs"
---

# XJS (eXtensible JavaScript parser)

A tool for creating JavaScript dialects.

```go
// Extend JS syntax with your exotic/experimental features
sc := xjs.ScannerBuilder().UseScanner(func(sc *parser.Scanner, next func(*parser.Scanner) token.Token) token.Token {
  // your custom scanner
  return next(sc)
}).Build(input)
p := xjs.ParserBuilder().UseStmtParser(func(p *parser.Parser, next func(*parser.Parser) (ast.Stmt, error)) (ast.Stmt, error) {
  // your custom parser
  return next(p)
}).Build(sc)
result, err := js.ParseProgram(p)

// Extend JS printer with your custom printers.
pr := xjs.PrinterBuilder().UsePrinter(func(pr *printer.Printer, node ast.Node, next func(*printer.Printer, ast.Node) error) error {
  // your custom printer
  return next(pr, node)
}).Build(opts...)
pr.Print(result)
jsCode, err := pr.Output()
```

## Examples

Real-world dialects built with XJS:

- [DJS](https://github.com/xjslang/djs) - JavaScript with `defer`.
- [HJS](https://github.com/hjslang/hjs) - JavaScript with native HTML tags.

See also the [`examples/`](https://github.com/xjslang/xjs/blob/HEAD/examples/) directory for basic samples.

## How does it work?

It works by intercepting the parsing flow…
