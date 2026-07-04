---
repo: "steve-chavez/CParseC"
name: "CParseC"
description: "Single header Parser Combinators for C"
url: "https://github.com/steve-chavez/CParseC"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["c", "c99", "header-only", "parser-combinators"]
stars: 79
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-06-15T07:09:04Z"
lastCommitAt: "2026-07-04T19:20:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["steve-chavez"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf72cec84e76d86709a5e0a5b8cc033f7d17bb1f51ccbb2a5d06ee76a4b484e1/steve-chavez/CParseC"
---

# CParseC

Parsing on C has problems:

- Handwritten parsers (recursive descent, state machine, etc) are hard to maintain.
- Flex or Bison generated code is also hard to maintain plus it complicates builds.

**CParseC** (**C** **Parse**r **C**ombinators) offers a solution to parsing that is flexible and performant:

- Composable, expressive parsers written in plain C99 (inspired by Haskell's Parsec)
- Single header file (cparsec.h) with no dependencies (no libc assumed by default)
- Zero-copy parsing
- No hidden allocations, user-supplied arena
- Inlining-friendly, macros instead of function pointers in hot paths
- SIMD specialized combinators

## Demo

A CSV parser looks like this:

```c
#include <stdio.h>
#include <stdlib.h>

#define CPC_USE_MEMCHR
#define CPC_USE_UNNAMED
#include "cparsec.h"

CPC_TAKE_QUOTED(quotedField, '"', '"')
CPC_TAKE_TILL_ONE_OF(unquotedField, ",\r\n")
CPC_ALT(field, quotedField, unquotedField)
CPC_SEP_BY_1(record, field, CPC_STRING_(","))
CPC_ALT(lineEnd, CPC_END_OF_LINE_, CPC_EOF_)
CPC_LEFT(parse_csv_row, record, lineEnd)

int main(void) {
  CpcArena arena;
  CpcValue arena_storage[8192];
  cpc_arena_init(&arena, arena_storage, sizeof(arena_storage) /…
