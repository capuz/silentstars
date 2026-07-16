---
repo: "inkdropapp/inkdrop-model"
name: "inkdrop-model"
description: "Inkdrop data model definitions in json-schema and flowtype"
readmeQualityOk: true
url: "https://github.com/inkdropapp/inkdrop-model"
homepage: "https://www.inkdrop.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["inkdrop", "json-schema"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2017-12-16T09:20:43Z"
lastCommitAt: "2026-07-16T06:00:12Z"
lastReleaseAt: "2026-07-15T05:29:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 66
maintainers: ["renovate[bot]", "craftzdog", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e6981e1c6ed37003aa0082cfe3910bfd97cb593cdc49795d947d8845b9ebf30/inkdropapp/inkdrop-model"
---

# Inkdrop Model

Inkdrop data model definitions in json-schema and TypeScript

## Documentations

Human readable definitions are [here](https://github.com/inkdropapp/inkdrop-model/tree/master/docs/schema.md).

## Install

```sh
npm install inkdrop-model
```

## Models

- **Note** - A markdown document with title, body, status, tags, and visibility settings
- **Book** - A notebook for organizing notes, with support for nesting and custom icons
- **Tag** - A label for categorizing notes, with customizable colors
- **File** - An image attachment that can be embedded in notes

## Usage

### TypeScript

```typescript
import type { Note, Book, Tag, File } from 'inkdrop-model'
```

### Json Schema

```javascript
import { NoteSchema, BookSchema, TagSchema, FileSchema } from 'inkdrop-model'
```

You can validate data with json schemas.
Below example uses [ajv](https://github.com/epoberezkin/ajv) as a validator:

```javascript
import { NoteSchema } from 'inkdrop-model'
import Ajv from 'ajv'
const ajv = new Ajv()
const validate = ajv.compile(NoteSchema)

const data = {
  _id: 'note:BkgOZZUJzf',
  title: 'link',
  doctype: 'markdown',
  updatedAt: 1513330812556,
  createdAt: 1513214207639,…
