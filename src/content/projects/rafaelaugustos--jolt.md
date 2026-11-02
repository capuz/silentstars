---
repo: "rafaelaugustos/jolt"
name: "jolt"
description: "Make NativeScript move."
readmeQualityOk: true
url: "https://github.com/rafaelaugustos/jolt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
stars: 6
forks: 0
openIssues: 9
closedIssues: 149
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-13T21:37:00Z"
lastCommitAt: "2026-11-02T11:36:40Z"
lastReleaseAt: "2026-10-19T22:42:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["rafaelaugustos"]
openGraphImageUrl: "https://opengraph.githubassets.com/45da6614e88998a45ff98bbc61997a99e8de46915427f7c4d7091fd591a2a5b6/rafaelaugustos/jolt"
---

Native animations for <a href="https://nativescript.org">NativeScript</a>: presets, springs, keyframes and stagger, one call each.

```ts
import { animate } from '@rafaelaugusto/jolt'

animate(card, 'fadeInUp')
animate(button, { scale: 1.1 }, 'bouncy')
animate(rows, 'fadeInUp', { stagger: 40 })
```

NativeScript's `view.animate()` covers the basics and stops there: one curve for every property, a `spring` curve with no settings, no keyframes, and a promise that rejects when the animation is cancelled. Anything richer ends up as platform code.

Jolt computes the motion once, in JavaScript, when the animation starts, and hands it to the platform as keyframes: Core Animation on iOS, `ObjectAnimator` on Android. Those default view tracks play without per-frame JavaScript. Real-size layout, opt-in subscribers, gesture input and timeline step activation retain their documented [execution limits](https://jolt.rafaelaugusto.dev/guide/how-it-works). Springs follow real physics, and an animation that interrupts another one starts from where the view is, at the speed it was going.

The [0.1.0-rc.8 release candidate](https://github.com/rafaelaugustos/jolt/releases/tag/v0.1.0-rc.8) adds Web…
