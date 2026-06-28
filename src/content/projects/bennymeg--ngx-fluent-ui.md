---
repo: "bennymeg/ngx-fluent-ui"
name: "ngx-fluent-ui"
description: "Angular & online library for Microsoft Fluent UI icons"
url: "https://github.com/bennymeg/ngx-fluent-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["fluent-ui", "microsoft", "angular", "icons"]
stars: 24
forks: 1
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-03-23T13:43:41Z"
lastCommitAt: "2026-06-28T02:02:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 34
maintainers: ["bennymeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/af740bb21ccde3872e4374aca20e48c058ef801ca65340ab526cdee4d2b00e20/bennymeg/ngx-fluent-ui"
---

<br/>
  </a>

  <h3 align="center">NGX Fluent UI</h3>

    Microsoft's Fluent UI icons library for Angular applications
    <br/>
    <br/>
    .
    .
  </p>

  <br/>

  
  </div>
</p>

<hr></br>

## Installation

```bash
npm install ngx-fluent-ui-icons
```

## Usage

1. Import Fluent UI icon module

```ts  
import { NgModule } from '@angular/core';

import { FluentUiIconsModule } from 'ngx-fluent-ui-icons';
import { heart_24_filled, heart_24_regular } from 'ngx-fluent-ui-icons';

@NgModule({
  imports: [
    FluentUiIconsModule.pick({ heart_24_filled, heart_24_regular })
  ]
})
export class AppModule { }
```
> **Note:** Only the icons you pick will be bundled in the final build

2. Use it in the html template

```html
<fluent-ui-icon name="heart_24_filled" class="beat" style="fill: red;"></fluent-ui-icon>

<fui name="heart_24_regular" class="beat" style="color: red;"></fui>
```

## Roadmap

See the [open issues](https://github.com/bennymeg/ngx-fluent-ui/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly…
