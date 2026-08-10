---
repo: "taekwombo/tree-sitter-cypher"
name: "tree-sitter-cypher"
description: "Cypher grammar for Tree-sitter"
readmeQualityOk: true
url: "https://github.com/taekwombo/tree-sitter-cypher"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 38]
topics: ["cypher", "cypher-query-language", "parser", "tree-sitter"]
stars: 13
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-01T12:39:43Z"
lastCommitAt: "2026-08-10T05:05:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 52
undervaluedScore: 29
maintainers: ["taekwombo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb52e7c832c1117a0c163bfe929a4560c07888ab366b7b398fddcc029214a3f7/taekwombo/tree-sitter-cypher"
---

tree-sitter-cypher
================

Cypher grammar for [tree-sitter].

> Master branch does not include legacy grammar support (e.g. =~ regex syntax).
> 
> Legacy grammar is provided on `legacy` branch and `-legacy` suffixed tags.
>
> [M23-legacy](https://github.com/taekwombo/tree-sitter-cypher/releases/tag/M23-legacy)

### Development

#### Initialising repository

Create `test.cql` file if you want to run test locally against single file using `test:dev` npm script:

    echo "// Comment" > test.cql

#### NPM Scripts

Install the dependencies:

    npm install

Build parser

    npm run build

Run the tests:

    npm run test

Run the build and tests in watch mode:

    npm run test:watch

Test parser in debug mode against `test.cql` file:

    npm run test:dev

Update openCypher repository, generate tests, and run tests with "-u" flag:

    npm run test:regenerate

#### Testing bindings
```sh
go test ./bindings/go/binding_test.go
python -m unittest ./bindings/python/tests/test_binding.py
node ./bindings/node/binding_test.js

cargo test
swift test
```

#### References
* [opencypher]
* [opencypher/tools] repo

[tree-sitter]: https://github.com/tree-sitter/tree-sitter…
