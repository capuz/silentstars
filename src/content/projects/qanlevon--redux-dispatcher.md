---
repo: "Qanlevon/redux-dispatcher"
name: "redux-dispatcher"
description: "An all-in-one simple solution to manage actions with less code  🦄"
readmeQualityOk: true
url: "https://github.com/Qanlevon/redux-dispatcher"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-11-07T04:46:31Z"
lastCommitAt: "2026-10-16T08:26:49Z"
lastReleaseAt: "2021-10-29T07:26:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 30
maintainers: ["Qanlevon"]
openGraphImageUrl: "https://opengraph.githubassets.com/835fd0814def32a3ec3b1f0fb032aaecb80d5209b53271808ebe34ead73d5295/Qanlevon/redux-dispatcher"
---

## redux-dispatcher is an all-in-one simple solution to manage actions with less code 🦄
**Its main purpose is to combine action type, action creator and dispatch function into one,
then you no need to worry about defining and managing action type constants.**

## Short example
```js
import { createDispatcher } from 'redux-dispatcher'

const key = "app"

const mapDispatch = {
    setUser: name => ({ name })
};

const appDispatcher = createDispatcher(key, mapDispatch)
```
```js
appDispatcher.setUser("Anonymous")  // dispatch action {type: "app/SET_USER", name: "Anonymous"}
```

**Guaranteed**:
- Intuitive
- Less code

**Suitable**:
- If you use Redux and want to reduce boilerplate
- If you find it tiresome every time you need to define, import, manage actions

**Advanced functionalities**:
- [Action with side effect](#user-content-retrieve-side-effect-result-after-dispatching-an-action-no-more-callback)
- [Thunk support](#user-content-define-thunk-like-your-favourite-redux-thunk)
- [Immutable helpers](#user-content-immutable-helper-for-state)

## Usage
### 1. Install and setup

```npm install redux-dispatcher --save```

**Setup**
```js
import {applyMiddleware, createStore} from…
