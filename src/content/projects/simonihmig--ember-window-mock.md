---
repo: "simonihmig/ember-window-mock"
name: "ember-window-mock"
description: "Mock window global in tests with test-friendly replacements for location, alert/confirm/prompt/ and more."
url: "https://github.com/simonihmig/ember-window-mock"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [53, 42]
topics: ["ember", "ember-addon"]
stars: 64
forks: 17
openIssues: 6
closedIssues: 36
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2017-09-26T21:07:58Z"
lastCommitAt: "2026-06-26T23:30:07Z"
lastReleaseAt: "2022-02-18T11:38:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 88
undervaluedScore: 52
maintainers: ["renovate[bot]", "simonihmig", "bobisjan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ee8e2995baa8aeb669308479b1b889f58c2962ea532e06a9aff25eb10de589a/simonihmig/ember-window-mock"
---

# ember-window-mock

This Ember CLI addon provides the `window` global as an ES6 module import that you can use in any component or controller where
you need `window`. But some of its properties and functions are prohibitive to be used
in tests as they will break the test run:

- you cannot set `window.location.href` to trigger a redirect, as that will leave your test page
- `alert`, `confirm` and `prompt` are blocking calls, and cannot be closed without user interaction, so they will just
  suspend your test run

So when running tests this import will be replaced with one that mocks these critical parts.

## Compatibility

- Ember.js v5.12 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-window-mock
```

## Usage

### How to use it in your app

Let's say you want to redirect to an external URL. A simple controller could look like this:

```js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  redirect(url) {
    window.location.href = url;
  }
}
```

With this addon, you can just import `window` instead of using the global:

```js
import…
