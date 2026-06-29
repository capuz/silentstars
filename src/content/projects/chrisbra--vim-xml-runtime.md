---
repo: "chrisbra/vim-xml-runtime"
name: "vim-xml-runtime"
description: "Vim filetype plugin for XML files"
url: "https://github.com/chrisbra/vim-xml-runtime"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [78]
stars: 14
forks: 8
openIssues: 5
closedIssues: 23
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2018-05-08T07:14:49Z"
lastCommitAt: "2026-06-29T07:23:18Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 68
undervaluedScore: 42
maintainers: ["chrisbra", "dmitmel"]
openGraphImageUrl: "https://opengraph.githubassets.com/fad47538248ca12b2c699318785800fa55f78ba297ee79d78bce1eb1d6f4d2d5/chrisbra/vim-xml-runtime"
---

# vim-xml-ftplugin [](https://saythanks.io/to/cb%40256bit.org)
Vim xml runtime files

The official XML runtime files for Vim. They include:
* XML [filetype plugin][1]
* XML [indent script][2]
* XML [format script][3]
* XML [syntax script][4]
* XSLT [syntax script][6]
* XSD [syntax script][7]

Once in a while, a snapshot from here will be send to Bram for inclusion and distribution with [Vim][5]

This filetype plugin contains an xmlformatting plugin in the autoload directory:

### XMLFormat
> A Vim plugin to pretty print xml

This plugin tries to format xml prettier. To use it, set the `formatexpr` option in Vim to `xmlformat#Format()` and reformat your document using `gq`

### Installation
Use the plugin manager of your choice.

### Usage

In your XML document enter:
```
:set formatexpr=xmlformat#Format()
```
Then reformat using `gq`

### License & Copyright

© 2018 by Christian Brabandt. The Vim license (see `:h license`) applies to the Vim plugin, the shell script is licensed under the BSD license.

__NO WARRANTY, EXPRESS OR IMPLIED.  USE AT-YOUR-OWN-RISK__

[1]: https://github.com/chrisbra/vim-xml-ftplugin/blob/master/ftplugin/xml.vim
[2]:…
