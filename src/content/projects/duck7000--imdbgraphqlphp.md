---
repo: "duck7000/imdbGraphQLPHP"
name: "imdbGraphQLPHP"
description: "IMDb GraphQL API Wrapper class in PHP"
readmeQualityOk: true
url: "https://github.com/duck7000/imdbGraphQLPHP"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 27
forks: 7
openIssues: 3
closedIssues: 155
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2022-10-23T19:08:37Z"
lastCommitAt: "2026-11-07T13:54:49Z"
lastReleaseAt: "2023-10-28T21:02:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6bcd67257d6fb58ab847a8ab8c4712df67a19de4e7be6d34cc6013828b3375ad/duck7000/imdbGraphQLPHP"
---

imdbGraphQLPHP
=======

PHP library for retrieving film and TV information from IMDb.<br>
This library uses GraphQL API from imdb to get the data.<br>
Thanks to @tBoothman for his groundwork to make this possible!<br><br>

imdbGraphQLPHP is NOT a fork, it is based on imdbphp<br>
Retrieve all information from IMDb including films, TV series, TV episodes, people and coming soon releases.<br>
Search for titles on IMDb.<br>
Download film posters, actor, recommendations, foto's and episode images.<br>
The results can be localized and cached.<br>
Localization only seems to effect title, photo, plotoutline and recommendations (titles only). Check wiki homepage to enable.<br>
There is a full list of all methods, descriptions and outputs in the wiki.
https://github.com/duck7000/imdbGraphQLPHP/wiki

Quick Start
===========

* Clone this repo or download the latest [release zip]
* Find a film you want the data for e.g. A clockwork orange https://www.imdb.com/title/tt0066921/
* Include `bootstrap.php`.
* Get some title data

For Title search:
```php
$imdb = new \Imdb\TitleSearch();
$results = $imdb->search("1408", "MOVIE,TV", "1955-01-01", "2000-01-01");
All info is in the wiki page
```

For…
