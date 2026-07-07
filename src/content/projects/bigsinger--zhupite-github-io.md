---
repo: "bigsinger/zhupite.github.io"
name: "zhupite.github.io"
description: "Personal blog"
originalDescription: "个人博客"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bigsinger/zhupite.github.io"
homepage: "https://bigsinger.github.io"
language: "CSS"
languages: ["CSS", "HTML", "JavaScript"]
languagePcts: [45, 28, 25]
stars: 19
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-02-28T05:33:34Z"
lastCommitAt: "2026-07-07T06:39:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 65
maintainers: ["bigsinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/015d12934ac71701aec2065771d66e08fe54d429896d9af234070a8072a3400e/bigsinger/zhupite.github.io"
---

# Zhu Pite's Bad Handwriting

My personal blog: [zhupite.com](https://zhupite.com) → A technical site with over 600 blog posts covering Android reverse engineering, C++/C# development, reading notes, hiking guides, and more.

---

## Quick Start

### Writing and Publishing

1. Create a Markdown file in the `_posts/` directory, naming format: `YYYY-MM-DD-article-title.md`
2. The article header must include YAML frontmatter:

```yaml
---
layout: post
title: Article Title
subtitle: Subtitle (optional)
date: 2025-05-28
author: zhupite
header-img: /assets/images/banner.jpg (optional)
catalog: true
sticky: true                # Set to true to pin to the homepage (optional)
tags: [tag1, tag2]
---
```

3. Write the body directly in Markdown, supporting code highlighting, images, tables, and other standard syntax.
4. Push to the `master` branch on GitHub, and GitHub Pages will automatically compile and publish.

### Creating a New Page

Add a `.md` file in the `pages/` directory, frontmatter example:

```yaml
---
layout: page
title: Page Name
description: Page Description
permalink: /page-name/
menu: Navigation Name
---
```

Then add navigation links in the `navs` section of `_config.yml`.…
