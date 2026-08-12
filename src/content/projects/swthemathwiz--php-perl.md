---
repo: "swthemathwiz/php-perl"
name: "php-perl"
description: "PHP Perl Extension (Updated for PHP7)"
readmeQualityOk: true
url: "https://github.com/swthemathwiz/php-perl"
language: "C"
languages: ["C", "PHP"]
languagePcts: [60, 38]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-06-29T02:08:59Z"
lastCommitAt: "2026-08-12T05:13:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 68
maintainers: ["swthemathwiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/68d928b4062e4c720d04dfbf8d0282118872dbdde3cad89a0df75227a312ef83/swthemathwiz/php-perl"
discussionCount: 0
---

PHP Perl Extension (Updated for PHP 7 and PHP 8)
================================================

What is the PHP Perl Extension?
===============================

This extension allows embedding a Perl interpreter into PHP 7+, enabling you to:

  * Execute Perl files
  * Evaluate Perl code
  * Access values of Perl variables
  * Call Perl subroutines
  * Instantiate and manipulate Perl objects

About the Updates
=================
I have updated version 1.0.1 of the php-perl extension source (built for PHP 5)
to support PHP 7+.  The source has been modified extensively. I started numbering
the new versions from 1.20.0. The updates have never been tested on any OS other
than Linux, so your mileage may vary on other operating systems.

Except as noted, the syntax and semantics have not changed, and
the limitations of the PHP 5 version are still present.

The primary changes were:

  - Adapted to the newer PHP object model.
  - Modified the use of binary hashes (no longer supported).
  - Deleted the older tasking model code.
  - Made general changes for the PHP 5-to-7 transition.
  - Updated miscellaneous code (4+ years of API changes).
  - Modified various tests, primarily because…
