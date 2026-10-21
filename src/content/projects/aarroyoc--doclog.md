---
repo: "aarroyoc/doclog"
name: "doclog"
description: "DocLog builds documentation from source code in Prolog"
readmeQualityOk: true
url: "https://github.com/aarroyoc/doclog"
language: "Prolog"
languages: ["Prolog", "CSS"]
languagePcts: [50, 25]
stars: 34
forks: 6
openIssues: 14
closedIssues: 10
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-09-18T12:30:42Z"
lastCommitAt: "2026-10-21T21:15:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 26
maintainers: ["aarroyoc", "dougransom"]
openGraphImageUrl: "https://opengraph.githubassets.com/667102005a98f43560181a113606aecf5ecffdbb5cdd376007d685ff2730a9b8/aarroyoc/doclog"
---

# DocLog

Create documentation from your Prolog code

Example, Scryer Prolog documentation: https://www.scryer.pl

## How to document your code?

There are two kind of comments in DocLog: module and predicate.

Each file/module has the option to write a module comment. It will be displayed at the beginning of the page. You can use [Djot](https://djot.net/) inside the comment. The syntax is:
```
/**
COMMENT
MORE COMMENT
*/
```

Predicate comments start with %% and they're followed by N % comments. Of those lines, the first line comment should be empty. You should indicate in the first line, the name of the predicate, var names and modes. Then you can use [Djot](https://djot.net/) to explain the rest of the predicate.

```
%% append(L0, L1, L)
%
% L is L0 and L1 appended together
```

## Using Doclog

First, clone the repo:

```
$ git clone https://github.com/aarroyoc/doclog
$ cd doclog
```

Then, install the dependencies:

```
$ make setup
```

After that, you must create a configuration file called `doclog.config.pl`. This file will contain several options required to document your project, and must be in your source directory. Take a look at `scryer.config.pl` for an example…
