---
repo: "carthage-software/whim"
name: "whim"
description: "The Whim Programming Language"
readmeQualityOk: true
url: "https://github.com/carthage-software/whim"
homepage: "http://whim.sh/"
language: "Rust"
languages: ["Rust", "Hack"]
languagePcts: [70, 30]
topics: ["compiler", "experiment", "php", "programming-language", "research-project"]
stars: 93
forks: 2
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T00:23:11Z"
lastCommitAt: "2026-09-17T04:59:35Z"
lastReleaseAt: "2026-09-06T19:02:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["azjezz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/498fe5c716a87a203dac828075e2028333a5f69eb2228b152bd79e2324a8da3e/carthage-software/whim"
---

# Whim

Whim is an experimental programming language built for exploration.

> [!WARNING]
> Whim is a toy. Do not use it in production. Every release may add, remove,
> or redesign any part of the language. Whim has no compatibility promise,
> release schedule, or production support.

Whim checks types and keeps generic type arguments at run time. It has
value-based collections, pattern matching, classes, interfaces, enums, and
cooperative tasks.

```whim
final readonly class Box<T> {
  public function __construct(public T $value) {}
}

function describe(mixed $value): string {
  return match ($value) {
    $box @ Box<int> => 'integer: ' . $box->value,
    $box @ Box<string> => 'text: ' . $box->value,
    $_ => 'other',
  };
}

write_line!(describe(new Box::<int>(42)));
```

## What Whim includes

The `whim` executable runs source, formats code, prints bytecode, provides a
language server, and manages Git dependencies. The standard library is written
mainly in Whim. It covers async I/O, files, processes, networking, TLS, HTTP,
WebSockets, SQLite, PostgreSQL, dates, encodings, and common data formats.

We also maintain [Trifle packages on Codeberg](https://codeberg.org/trifle).

##…
