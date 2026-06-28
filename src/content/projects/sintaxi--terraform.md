---
repo: "sintaxi/terraform"
name: "terraform"
description: "Asset pipeline for the Harp Web Server."
url: "https://github.com/sintaxi/terraform"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 102
forks: 91
openIssues: 21
closedIssues: 21
watchers: 5
contributors: 29
recentReleases: 0
createdAt: "2013-03-31T21:44:51Z"
lastCommitAt: "2026-06-28T03:07:27Z"
lastReleaseAt: "2021-05-26T21:28:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 59
undervaluedScore: 37
maintainers: ["sintaxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/db4623bb1eb56bce0b4eefd72263e7ee5f3ba2ad2cd8b8b7eac1afca03b2ec1f/sintaxi/terraform"
---

# terraform

> Terraform is the pre-processor engine for the [Harp](https://github.com/sintaxi/harp) web server. Terraform does not write or serve files. It processes and provides a layout/partial paradigm.

## Features

- pre-processors
- layouts
- partials
- metadata (via _data.json)
- LRU cache (production mode)

### Supported Pre-Processors

**HTML** – EJS, Jade, Markdown
**CSS** – LESS, Stylus, Sass (SCSS)
**JavaScript** – CoffeeScript

## Install

```
npm install terraform
```

## API

Step 1) require the library

```javascript
var terraform = require('terraform')
```

Step 2) set the root

- publicPath (String): path to public directory
- globals (Object): global variables to be available to every template

```javascript
var planet = terraform.root("path/to/public/dir", { "title": "Bitchin" })
```

Step 3) render a file

```javascript
planet.render('index.jade', { "title": "Override the global title" }, function(error, body){
  console.log(body)
})
```

## Tests

Please run the tests

```
npm install
npm test
```

## License

Copyright © 2012–2014 Chloi Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software…
