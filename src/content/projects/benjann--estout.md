---
repo: "benjann/estout"
name: "estout"
description: "Stata module to make regression tables"
readmeQualityOk: true
url: "https://github.com/benjann/estout"
homepage: "http://repec.sowi.unibe.ch/stata/estout/index.html"
language: "Stata"
languages: ["Stata"]
languagePcts: [100]
stars: 84
forks: 20
openIssues: 18
closedIssues: 50
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2015-05-21T09:57:24Z"
lastCommitAt: "2026-10-23T12:04:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 28
maintainers: ["benjann"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e554126173607cfe302233b2de761d7d94211654c6fe042467e1cdac5c71c72/benjann/estout"
---

# estout

The **estout** package provides tools for making regression tables in [Stata](http://www.stata.com). The package currently contains the following programs:

1. **esttab**: Command to produce publication-style regression tables that display nicely in Stata's results window or, optionally, are exported to various formats such as CSV, RTF, HTML, or LaTeX. **esttab** is a user-friendly wrapper for the **estout** command.

2. **estout**: Generic program to compile a table of coefficients, "significance stars", summary statistics, standard errors, t- or z-statistics, p-values, confidence intervals, or other statistics for one or more models previously fitted and stored. The table is displayed in the results window or written to a text file for use with, e.g., spreadsheets or LaTeX.

3. **eststo**: Utility to store estimation results for later tabulation. **eststo** is an alternative to official Stata's **estimates store**. Main advantages of **eststo** over **estimates store** are that the user does not have to provide a name for the stored estimation set and that **eststo** may be used as a prefix command.

4. **estadd**: Program to add extra results to the returns of an…
