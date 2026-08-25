---
repo: "simonmichael/hledger_site"
name: "hledger_site"
description: "The repo for hledger.org, the hledger project's website."
readmeQualityOk: true
url: "https://github.com/simonmichael/hledger_site"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [50, 33]
topics: ["hledger", "haskell", "ledger", "web-application", "console-application", "command-line-tool", "tui", "library", "accounting", "plaintext-accounting"]
stars: 155
forks: 57
openIssues: 7
closedIssues: 42
watchers: 5
contributors: 66
recentReleases: 0
createdAt: "2019-08-24T11:47:53Z"
lastCommitAt: "2026-08-25T04:10:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["simonmichael", "tabrez-syed", "nyiyui"]
openGraphImageUrl: "https://opengraph.githubassets.com/614c09d17d0218a49b92e9b129cf987555d97a3e36007e6f90336a4bcd628f79/simonmichael/hledger_site"
---

## hledger site repo

This is the repository for the hledger.org website.
(If you're looking for the main hledger code repo, see <https://github.com/simonmichael/hledger>.)

It contains the configuration and most of the content source files for the site.
(But most dev docs and the dev version of the manuals are symlinked from the main hledger repo.)

### History

This repo was created in 2019 by combining the site/ subfolder
previously in the main hledger repo, and the github wiki, preserving
the essential histories of both (though for the true original history
of site/ up to 2019/08, see the main hledger repo.)

In 2021, this site was converted from sphinx to mdbook.  

### Config 

This is intended to be cloned as the "site" subdirectory of the main hledger repo.
Currently this is done manually, not via git submodule or subtree.

mdbook configuration is in book.toml.  

Some static assets are kept in css/, theme/, js/ and highslide/. 

A few more assets and most of the site's content source is in src/. 

Some hledger docs are kept in the main hledger repo, and included in
the website via symbolic links in src/. These are:

- developer docs like CONTRIBUTING.md and README.md.…
