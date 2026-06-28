---
repo: "jogemu/md3css"
name: "md3css"
description: "Pure CSS Material 3 Design with flexible icon placement."
url: "https://github.com/jogemu/md3css"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
topics: ["css", "css-nesting", "css-variables", "material-design", "css-baseline"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-08T00:02:35Z"
lastCommitAt: "2026-06-28T06:54:38Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 31
maintainers: ["jogemu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/812090515/77c53572-3f4c-4eea-9c1b-0d18d1871859"
discussionCount: 0
---

# md3css

Pure CSS Material 3 Design with flexible icon placement. Leverages recent CSS features, including nesting to reduce redundancy, dynamic light-dark schemes with a wide color gamut and pseudo-classes that became part of Baseline as recently as May 2024. Change the hue of the color scheme, add a font or place an icon with just one CSS variable. Using inheritance, multiple elements can be influenced while combining stylesheets, classes and inline style.

Common buttons are `<button>` or `<a>` within a `<fieldset>`. Use the respective button type in lower case as class and specify the optional leading icon by setting the CSS variable `--icon: url('/path/to/file.svg')` or `url('data:image/svg+xml;utf8,<svg>...</svg>')`. Since the image is used as a mask, the color of the image does not have to match the color scheme.

```html
<fieldset>
  <button>Text button</button>
</fieldset>
```

Inputs without a label are not styled, but an id is not necessary. Put the label text in a `<span>` such that `<label><input/><span/></label>`. The previously introduced variable describes the optional leading icon and `--icon2` the optional trailing icon. Several of these inputs can be grouped in…
