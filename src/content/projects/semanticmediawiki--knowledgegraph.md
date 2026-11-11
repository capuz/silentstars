---
repo: "SemanticMediaWiki/KnowledgeGraph"
name: "KnowledgeGraph"
description: "Visualize the knowledge graph within Semantic MediaWiki"
readmeQualityOk: true
url: "https://github.com/SemanticMediaWiki/KnowledgeGraph"
homepage: "https://www.mediawiki.org/wiki/Extension:KnowledgeGraph"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [63, 37]
topics: ["knowledge-graph", "mediawiki", "mediawiki-extension", "semantic", "semantic-mediawiki", "smw", "vis-network"]
stars: 5
forks: 5
openIssues: 2
closedIssues: 86
watchers: 9
contributors: 19
recentReleases: 2
createdAt: "2024-01-25T18:51:04Z"
lastCommitAt: "2026-11-11T11:18:12Z"
lastReleaseAt: "2026-10-14T14:43:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 91
maintainers: ["gesinn-it-gea", "translatewiki", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32d073deb6b9724252a8cf886fc82886a337f2b26c340dc0a83024dcd58c76b2/SemanticMediaWiki/KnowledgeGraph"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/smw", "CUSTOM:https://www.semantic-mediawiki.org/wiki/Sponsorship"]
---

# KnowledgeGraph

This extension provides the `#knowledgegraph` parser function to visualize the [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) in Semantic MediaWiki with [vis-network.js](https://github.com/visjs/vis-network)

Includes a KnowledgeGraph Designer through which interactively create/export graphs.

## Requirements

- PHP 8.1 or later
- MediaWiki 1.39 or later
- SemanticMediaWiki 5.1.0 or later

## Usage

Insert a parser function like

```
{{#knowledgegraph:
nodes=Page A, Page B
|properties=HasProperty1,HasProperty2
|depth=3
|graph-options=Mediawiki:KnowledgegraphGraphOptions
|property-options?HasProperty1=Mediawiki:KnowledgegraphNodeOptionsHasProperty1
|show-toolbar=false
|show-property-type=false
|width=100%
|height=400px
}}
```

`nodes=` and `properties=` are split on `,` by default. If your page titles or property names contain commas (e.g. legal citations, bibliographic entries), configure a different separator in `LocalSettings.php`:

```php
$wgKnowledgeGraphListSeparator = ';';
```

Without `properties=`, only direct properties are loaded. To include inverse properties, list them with a `-` prefix, e.g. `|properties=HasProperty1,-HasProperty1`.…
