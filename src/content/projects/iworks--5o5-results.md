---
repo: "iworks/5o5-results"
name: "5o5-results"
description: "5O5 sailors, boats & results."
url: "https://github.com/iworks/5o5-results"
homepage: "https://5o5.iworks.pl/"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["5o5", "results", "regatta"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2018-06-21T07:38:58Z"
lastCommitAt: "2026-06-23T06:41:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 74
maintainers: ["iworks"]
openGraphImageUrl: "https://opengraph.githubassets.com/460606bf10f74d68173cd2648cd12b8a13ef37a276fb5019ad8dc3fc61a78f8a/iworks/5o5-results"
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
