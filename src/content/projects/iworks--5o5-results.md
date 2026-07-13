---
repo: "iworks/5o5-results"
name: "5o5-results"
description: "5O5 sailors, boats & results."
readmeQualityOk: true
url: "https://github.com/iworks/5o5-results"
homepage: "https://5o5.iworks.pl/"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["5o5", "results", "regatta", "boat", "history", "registry", "int505"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2018-06-21T07:38:58Z"
lastCommitAt: "2026-07-13T06:37:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 77
maintainers: ["iworks", "finnboeger"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ef475020d345d7a0c18db1dd8a882ee0b214528a50f2a896fe60c181e28db21/iworks/5o5-results"
fundingLinks: ["GITHUB:https://github.com/iworks", "KO_FI:https://ko-fi.com/iworks"]
---

# International 5O5 Class Archive

The [database combining boat registry, competitors, and events](https://5o5.iworks.pl/). You can review the 5O5 boat register linked to which crews raced each boat and an extensive list of regattas those people and boats competed in with results.

Feel free to create a PR if you can fill out or add something.

## How to run a site and import results

1. Install [WordPress](https://wordpress.org/download/).
1. Install the [Fleet Manager](https://wordpress.org/plugins/fleet/) WordPress plugin.
1. Get a copy of this repository.
1. Copy `/tools/wordpress/mu-plugin/505-import-filter.php` into your WordPress `wp-content/mu-plugin/`, create this directory if it does not exist.
1. Copy `etc/config.example.php` into `etc/config.php`.
1. Edit `etc/config.php` and set `$wordpress_path` as the document root of your WordPress installation.
1. Run `./bin/import.php all`.

## Contributors

I will thank those people (ordered by time).

* **Ebbe Rosén** provided the first batch of results and helped me when I needed something more.
* **Mike Hattemore** provided a lot of WC and UK Nationals.
* **Peter Scannell** helped with the manual fixing of Irish results.
*…
