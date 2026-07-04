---
repo: "eyereasoner/eye-js"
name: "eye-js"
description: "A distribution of EYE reasoner in the JavaScript ecosystem using Webassembly."
readmeQualityOk: true
url: "https://github.com/eyereasoner/eye-js"
homepage: "https://eyereasoner.github.io/eye-js/example/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["javascript", "owl", "proof", "rdf", "reasoner", "semantic", "solid", "surfaces", "typescript", "web"]
stars: 69
forks: 8
openIssues: 13
closedIssues: 51
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-12-24T02:45:51Z"
lastCommitAt: "2026-07-04T23:14:52Z"
lastReleaseAt: "2022-12-29T03:09:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 43
maintainers: ["dependabot[bot]", "jeswr"]
openGraphImageUrl: "https://opengraph.githubassets.com/f68ccc66e554465df401b9dd5bd753f0bd4f358da5033ae1f7f6a6e4639b700a/eyereasoner/eye-js"
---

# EYE JS
Distributing the [EYE](https://github.com/eyereasoner/eye) reasoner for browser and node using WebAssembly.

## Usage

The simplest way to use this package is to use the `n3reasoner` to execute a query over a dataset and get the results. The input `data` should include the data and any inference rules that you wish to apply to the dataset; the optional `query` should match the pattern of data you wish the engine to return; if left undefined, all new inferred facts will be returned. For example:

```ts
import { n3reasoner } from 'eyereasoner';

export const queryString = `
@prefix : <http://example.org/socrates#>.

{:Socrates a ?WHAT} => {:Socrates a ?WHAT}.
`;

export const dataString = `
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix : <http://example.org/socrates#>.

:Socrates a :Human.
:Human rdfs:subClassOf :Mortal.

{?A rdfs:subClassOf ?B. ?S a ?A} => {?S a ?B}.
`;

// The result of the query (as a string)
const resultString = await n3reasoner(dataString, queryString);

// All inferred data
const resultString = await n3reasoner(dataString);
```

*Note:* One can also supply an array of `dataString`s rather than a single `dataString` if one has multiple…
