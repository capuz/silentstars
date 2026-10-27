---
repo: "rollersearch/search"
name: "search"
description: "PHP search-systems made possible"
readmeQualityOk: true
url: "https://github.com/rollersearch/search"
homepage: "https://rollerworkssearch.readthedocs.io/en/latest/index.html"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "search", "elasticsearch", "doctrine", "symfony", "rollerworks", "rollerworkssearch", "rollerscapes", "rollersearch"]
stars: 110
forks: 18
openIssues: 5
closedIssues: 103
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2013-08-05T09:03:44Z"
lastCommitAt: "2026-10-27T12:40:14Z"
lastReleaseAt: "2016-03-13T13:11:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 35
maintainers: ["sstok"]
openGraphImageUrl: "https://opengraph.githubassets.com/37a6038ff560bf5e9bac6eba900f0cea9cf462e56814eff293373ec7a4623581/rollersearch/search"
discussionCount: 0
---

RollerworksSearch
=================

## About RollerworksSearch

RollerworksSearch is a powerful search-system for PHP.
Created to make searching in a PHP powered application as simple and fast as possible.

Whether you want to search for users in your SQL database, want to provide a 
powerful search system for searching products using an ElasticSearch back-end, 
or are looking for a way to abstract filtering for a reporter.

> [!WARNING]
> Elasticsearch support is [currently broken](https://github.com/rollersearch/search/issues/347)
> and might not be fixed until the next stable release (after v2.0.0).

### How about complex data structures?

A complex data is structure is no problem, say your customer data is stored
in the "customer" table, the "invoices" data is stored in it's own table, and
the details of the invoices have there own table.

Instead of writing a very verbose SQL query, your users can use the easy to learn
StringQuery syntax:

> `invoice-price: > $20.00; invoice-row-label: ~*"my cool product"; customer-type: !consumer`.

You just searched in three relational tables using a single condition with a
user-friendly syntax. And that is just the start,…
