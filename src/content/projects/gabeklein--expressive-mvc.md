---
repo: "gabeklein/expressive-mvc"
name: "expressive-mvc"
description: "Define classes to organize and control state used by React apps"
readmeQualityOk: true
url: "https://github.com/gabeklein/expressive-mvc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 103
forks: 7
openIssues: 12
closedIssues: 34
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2019-04-21T03:17:42Z"
lastCommitAt: "2026-08-04T06:11:17Z"
lastReleaseAt: "2026-06-25T03:00:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 94
undervaluedScore: 49
maintainers: ["gabeklein", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0543c64ab7d470286b954186701941130c1b8cbad5a1ecd9d1f843729c120038/gabeklein/expressive-mvc"
discussionCount: 0
---

</p>

<h1 align="center">Expressive MVC</h1>

  Define reactive UI with plain classes. When properties change, your components will too.
</p>

</p>

</p>

Expressive puts application state, behavior, and lifecycle in plain classes. Class fields are reactive, getters are computed, methods are auto-bound, and UI components subscribe only to the values they read.

## Install

```bash
npm install @expressive/react
```

## Quick start

```tsx
import State from '@expressive/react';

class Counter extends State {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

function CounterWidget() {
  const { count, increment, decrement } = Counter.use();

  return (
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

No reducers, selectors, dependency arrays, or action wrappers. Update a property and every consumer that reads it updates automatically.

Continue with [Getting Started](https://expressive.dev/docs/getting-started/), explore the [guides](https://expressive.dev/docs/guides/state-classes/), or browse the [API reference](https://expressive.dev/docs/api/state/).

## Packages

| Package…
