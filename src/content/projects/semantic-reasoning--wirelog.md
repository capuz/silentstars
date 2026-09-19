---
repo: "semantic-reasoning/wirelog"
name: "wirelog"
description: "Embedded-to-Enterprise Datalog Engine in C11"
readmeQualityOk: true
url: "https://github.com/semantic-reasoning/wirelog"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 16
forks: 2
openIssues: 76
closedIssues: 804
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T12:36:56Z"
lastCommitAt: "2026-09-19T01:37:01Z"
lastReleaseAt: "2026-05-28T01:22:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 98
undervaluedScore: 49
maintainers: ["justinjoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1686ab7d7e621f106104a105369b6a72a0640f81955b6e572cdd749f89402519/semantic-reasoning/wirelog"
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
