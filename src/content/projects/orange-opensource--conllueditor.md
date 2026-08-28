---
repo: "Orange-OpenSource/conllueditor"
name: "conllueditor"
description: "ConllEditor is a tool to edit dependency syntax trees in CoNLL-U format."
readmeQualityOk: true
url: "https://github.com/Orange-OpenSource/conllueditor"
language: "Java"
languages: ["Java"]
languagePcts: [65]
topics: ["universaldependencies", "ud", "conll-u", "dependency", "syntax"]
stars: 62
forks: 18
openIssues: 1
closedIssues: 52
watchers: 14
contributors: 198
recentReleases: 0
createdAt: "2019-01-30T16:24:40Z"
lastCommitAt: "2026-08-28T11:40:47Z"
lastReleaseAt: "2024-11-03T17:26:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 32
maintainers: ["jheinecke"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3f0bba4dba2ee8fe4e9a35aab76a95902f85192dec8674d7f9c20ef49ca5225/Orange-OpenSource/conllueditor"
---

# Editor for Treebanks in CoNLL-U format and Front-End for dependency parser servers

This Software is a tool which facilitates the editing of syntactic relations and morphological features of files in CoNLL-U format (http://universaldependencies.org/format.html). It uses a Java-based server and a HTML/CSS/Javascript based front-end. The editor loads the CoNLL-U file and saves changes to disk (and performs a `git commit` if the file is under git version control).

The editor provides the following functionalities:
* editing words (forms, lemmas, upos, xpos, features, enhanced dependencies) (fast edit for UPOS and deprel)
* editing dependency relations
* indicates invalid UPOS, XPOS or dependency relations
* join/split/delete words (to correct tokenization errors)
* join/split sentences (to correct segmentation errors)
* undo/redo (partially)
* [search](#searching): forms, lemmas, UPOS, XPOS, deprels, sentences IDs and comments, sequences of any of these,
      searching for subtrees, importing subtrees from current sentence, sd-parse support
* [searching by source file line numbers](#search-by-source-file-line-number)
* edit non-CoNLL-U columns in a subset of [CoNLL-U plus…
