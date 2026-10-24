---
repo: "fusion-fuzz/fusion-fuzz"
name: "fusion-fuzz"
description: "Fusion-based Fuzzer for Finding Bugs in Language Processors"
readmeQualityOk: true
url: "https://github.com/fusion-fuzz/fusion-fuzz"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 11
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-29T11:04:06Z"
lastCommitAt: "2026-10-24T08:07:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["YuanchengJiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/a32a52931cb8f34a75ed12f278db7eb88ecd9aa91ebcdf3921d438a8edbb4e1d/fusion-fuzz/fusion-fuzz"
---

# Fusion Fuzz

Fusion-fuzz is a scalable and effective fuzzer to discover bugs in various compilers and interpreters.

The core idea of fusion-fuzz is **program fusion**, which bridges the behavior of two (or more) independent seed programs so the fused program exercises interactions neither seed triggers alone.

Program fusion now has three fusion strategies: **dataflow fusion**, **state fusion**, and **declaration fusion**.

- **Dataflow fusion** - connect dataflow from parent seeds by interleaving variables.

Example of dataflow fusion:

```php
/* seed A */
$dom = new DOMDocument;
$dom->loadXML(..);
$ref = $dom->documentElement->firstChild;
$nodes = $ref->childNodes;

$fusion = $nodes; // dataflow bridge 

/* seed B */
$values = array(..);
foreach ($fusion as $str) //foreach ($values as $str)
    { $enc = base64_encode($str); }

/* output */
// AddressSanitizer: heap-use-after-free ..
```

- **State fusion** — bridge behaviors at the *interesting program points - the point holding more live variables* via interleaving program statements.

```php
<?php
function dump($dom, $name) {
$list = $dom->getElementsByTagName($name)[0]
->getInScopeNamespaces();
foreach ($list as $entry) {…
