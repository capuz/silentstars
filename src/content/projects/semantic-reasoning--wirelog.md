---
repo: "semantic-reasoning/wirelog"
name: "wirelog"
description: "Embedded-to-Enterprise Datalog Engine in C11"
readmeQualityOk: true
url: "https://github.com/semantic-reasoning/wirelog"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 12
forks: 2
openIssues: 42
closedIssues: 545
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-02-22T12:36:56Z"
lastCommitAt: "2026-08-19T04:08:17Z"
lastReleaseAt: "2026-05-28T01:22:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 98
undervaluedScore: 57
maintainers: ["justinjoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/188cbdb53fd2efaf653827943daad413aa2e60391425c967ccdbe804d1447337/semantic-reasoning/wirelog"
discussionCount: 11
---

# wirelog

Precise incremental Datalog engine in pure C11. Compiles Datalog programs into columnar execution plans and evaluates them using timely-differential dataflow evaluation.

## Quick Start

A Datalog program that computes transitive closure:

```datalog
.decl edge(a: symbol, b: symbol)
.decl path(a: symbol, b: symbol)

path(X, Y) :- edge(X, Y).
path(X, Z) :- path(X, Y), edge(Y, Z).
```

Run it from C using the `wirelog_easy` facade:

```c
#include <wirelog/wirelog.h>  /* umbrella: pulls in wirelog_easy and the rest */

int main(void) {
    wirelog_easy_session_t *s = NULL;
    if (wirelog_easy_open(
            ".decl edge(a:symbol,b:symbol)\n"
            ".decl path(a:symbol,b:symbol)\n"
            "path(X,Y) :- edge(X,Y).\n"
            "path(X,Z) :- path(X,Y), edge(Y,Z).\n", &s) != WIRELOG_OK)
        return 1;

    wirelog_easy_set_delta_cb(s, wirelog_easy_print_delta, s);
    wirelog_easy_insert_sym(s, "edge", "a", "b", NULL);
    wirelog_easy_insert_sym(s, "edge", "b", "c", NULL);
    wirelog_easy_step(s);   /* prints: + path("a","b"), + path("b","c"), + path("a","c") */
    wirelog_easy_close(s);
    return 0;
}
```

Build and run:

```bash
git clone…
