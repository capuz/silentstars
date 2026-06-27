---
repo: "tweekmonster/helpful.vim"
name: "helpful.vim"
description: ":notebook: Display vim version numbers in docs"
url: "https://github.com/tweekmonster/helpful.vim"
language: "Vim Script"
languages: ["Vim Script", "Python"]
languagePcts: [56, 42]
stars: 186
forks: 5
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2016-04-09T04:54:00Z"
lastCommitAt: "2026-06-27T00:48:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/341dccf59f1065189f97c97383ece7b264c2a55710a1311acbed2edd629935c6/tweekmonster/helpful.vim"
---

# helpful.vim

A plugin for plugin developers to get the version of Vim and Neovim that
introduced or removed features.

## Usage

The command `:HelpfulVersion` takes a subject to search for helptags and
display version information.

Examples:

```vim
" Search for a function
:HelpfulVersion matchaddpos()
```

## Options

- `b:helpful` - If set to `1`, display version information about the text under
  the cursor on `CursorMoved` in `help` or `vim` filetypes.
- `g:helpful` - Same as above but always on.  It's also less humorous to read
  out loud.

## License

MIT
