---
repo: "Nymphium/nymphium.github.io"
name: "nymphium.github.io"
description: "移民"
readmeQualityOk: true
url: "https://github.com/Nymphium/nymphium.github.io"
homepage: "https://nymphium.github.io"
language: "TeX"
languages: ["TeX"]
languagePcts: [37]
topics: ["blog", "github-pages", "jekyll-plugin"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2015-03-16T01:38:56Z"
lastCommitAt: "2026-10-31T09:52:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 88
maintainers: ["Nymphium", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6d1b0c3eabba9d3d5974a257c52c7b06e4293b43f08647bfdcac3a408560fee/Nymphium/nymphium.github.io"
---

# nymphium.github.io

# syntax extensions
## import

### `@importmd(path/to/md)`

```markdown
@importmd(path/to/md)

```

converts to

```markdown
hello import
```

```markdown
```

### `@importlisting(path/to/code)`, `@importlisting[caption](https://github.com/Nymphium/nymphium.github.io/blob/HEAD/path/to/code)`, `@importlisting(path/to/code filetype)`

```markdown
@importlsting[cap](/path/to/code ft)

```

converts to

``````markdown
```ft:cap
puts "hello"
```
``````

## ref

```markdown
# a
## a.b
[label:foo]you can refer here

refer [ref:foo]

refer <foo>[ref:foo]

refer [fnref: 1]

---
[^1]: footnote
```

converts to

```markdown
<label id="foo"></label>you can refer here

refer <a href="#foo">(a.b)</a>

refer <a href="#foo">foo</a>

refer [<a href="#fn1">1</a>]
```

## liquid plugin
### twicardify
```markdown
{% twicard alt url %}

or

{% twicard "alt" url %}
```

### GitHub repository
```markdown
{% gh_repo usr/repo %}
```

### twitter id
```markdown
{% twid id %}
```

# Ops

```sh
$ bundle add GEM --skip-install # add gem to Gemfile
$ bundle lock --update=GEM # update gem
$ bundix # regenerate gemset.nix
$ direnv reload
```

# LICENSE…
