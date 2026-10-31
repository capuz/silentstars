---
repo: "huydo862003/typerighter"
name: "typerighter"
description: "A structured type-safe markdown language for note taking"
readmeQualityOk: true
url: "https://github.com/huydo862003/typerighter"
homepage: "https://huydo862003.github.io/typerighter/"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [49, 34]
topics: ["incremental-compilation", "markdown", "static-site-generator", "yaml"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 26
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-29T13:26:09Z"
lastCommitAt: "2026-10-31T09:53:39Z"
lastReleaseAt: "2026-10-04T11:43:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 66
maintainers: ["huydo862003", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5634f3c9d5f7881bf3bfcc44d725f35c06e39a8b8cd852079b1a29bfdf03c76/huydo862003/typerighter"
discussionCount: 1
---

# Typedown

Your documents are a typed graph. Typedown is the language for it.

Typedown draws from Notion's relational databases, Obsidian's linked vault model, and TypeScript's structural type system. If you want the flexibility of plain files with the structure of a database, this is for that.

A vault is a collection of `.td` files. Each file is a node. Schemas define node types. File references (`fref`) are edges. The type checker validates everything, and the editor gives you autocompletion and diagnostics as you write.

```yaml
# _types/Person.td - defines the shape of a person
---
_type: schema
properties:
  name:
    type: string
  role:
    type: 'developer' | 'designer' | 'manager'
  email:
    type: string?
---
```

```yaml
# people/alice.td - a person
---
_type: Person
name: "Alice Chen"
role: "developer"
email: "alice@example.com"
---

Alice is a backend developer focused on authentication systems.
```

```yaml
# tasks/auth.td - a task that links to a person
---
_type: Task
title: "Implement auth"
assignee: fref("people/alice.td")
assignee_name: self.assignee.name
---

Assigned to ${self.assignee.name}.
```

The schema, the content, and the references all live in…
