---
repo: "mideind/GreynirServer"
name: "GreynirServer"
description: "The greynir.is Icelandic natural language processing API and website."
readmeQualityOk: true
url: "https://github.com/mideind/GreynirServer"
homepage: "https://greynir.is"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["python", "parse-trees", "parse-forests", "natural-language-processing", "grammar", "earley", "parser", "tokenizer", "icelandic", "tf-idf"]
stars: 67
forks: 19
openIssues: 17
closedIssues: 45
watchers: 12
contributors: 17
recentReleases: 0
createdAt: "2015-05-06T23:19:12Z"
lastCommitAt: "2026-11-13T18:34:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 51
maintainers: ["vthorsteinsson", "Holado"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/35187829/24ede3db-cde4-4795-a6da-4c7187612045"
---

# GreynirServer

### Natural Language Processing for Icelandic

*GreynirServer* is the web API and frontend for
[GreynirEngine](https://github.com/mideind/GreynirEngine), a natural language processing
engine that **extracts processable information from Icelandic text**, allows
**natural language querying** of that information and facilitates
**natural language understanding**. GreynirServer is also the backend of
[*Embla*](https://embla.is), an Icelandic voice assistant app for
smartphones, tablets, and other devices.

Try Greynir (in Icelandic) at [https://greynir.is](https://greynir.is)

Greynir periodically scrapes chunks of text from Icelandic news sites on the web.
It employs the [Tokenizer](https://github.com/mideind/Tokenizer) and
[GreynirEngine](https://github.com/mideind/GreynirEngine) modules (by the same authors)
to tokenize the text and parse the token streams according to a
**hand-written context-free grammar** for the Icelandic language.
The resulting parse forests are disambiguated using
scoring heuristics to find the best parse trees. The trees are then stored in a
database and processed by grammatical pattern matching modules to obtain statements
of fact and…
