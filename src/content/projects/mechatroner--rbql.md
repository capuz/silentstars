---
repo: "mechatroner/RBQL"
name: "RBQL"
description: "🦜RBQL - Rainbow Query Language: SQL-like query engine for (not only) CSV file processing. Supports SQL queries with Python and JavaScript expressions."
readmeQualityOk: true
url: "https://github.com/mechatroner/RBQL"
homepage: "https://rbql.org"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [54, 41]
topics: ["sql-like", "transpiler", "csv", "olap"]
stars: 338
forks: 15
openIssues: 25
closedIssues: 25
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2017-07-15T18:30:35Z"
lastCommitAt: "2026-08-25T04:09:49Z"
lastReleaseAt: "2021-06-10T02:34:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 69
undervaluedScore: 24
maintainers: ["mechatroner"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/97334911/e3b01500-7830-462b-b383-9b8828af04c8"
discussionCount: 1
---

# RBQL: Rainbow Query Language

RBQL is an eval-based SQL-like query engine for (not only) CSV file processing. It provides SQL-like language that supports SELECT queries with Python or JavaScript expressions.  
RBQL is best suited for data transformation, data cleaning, and analytical queries.  
RBQL is distributed with CLI apps, text editor plugins, IPython/Jupyter magic command, Python and JS libraries.  

[Official Site](https://rbql.org/)

### Main Features

* Use Python or JavaScript expressions inside _SELECT_, _UPDATE_, _WHERE_ and _ORDER BY_ statements
* Supports multiple input formats
* Result set of any query immediately becomes a first-class table on its own
* No need to provide FROM statement in the query when the input table is defined by the current context.
* Supports all main SQL keywords
* Supports aggregate functions and GROUP BY queries
* Supports user-defined functions (UDF)
* Supports query chaining pipe `|` operator
* Provides other useful query features which traditional SQL engines do not have
* Lightweight, dependency-free, works out of the box

#### Limitations:

* RBQL doesn't support nested queries, but they can be emulated with consecutive queries
*…
