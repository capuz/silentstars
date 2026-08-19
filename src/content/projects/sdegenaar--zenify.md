---
repo: "sdegenaar/zenify"
name: "zenify"
description: "Complete state management for Flutter—hierarchical dependency injection, intelligent async caching, and offline-first resilience. Zero boilerplate, automatic cleanup"
readmeQualityOk: true
url: "https://github.com/sdegenaar/zenify"
homepage: "https://pixel-innovations.com"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["async-programming", "dart", "dependency-injection", "state-management", "zenify", "flutter", "flutter-package", "flutter-state-management", "offline-first", "reactive-programming"]
stars: 32
forks: 2
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-05-20T03:30:31Z"
lastCommitAt: "2026-08-19T04:09:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["sdegenaar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ee20f3c50d15744e92be67355bfa0973ffad3bc37d1ac6b55e109e4f30ad979/sdegenaar/zenify"
---

<h1>Zenify</h1>
  <p><em>The state management framework that works the way Flutter works.</em></p>
  <p><b>Automatic Query Caching • Scoped DI with Auto-Disposal • Offline-First • No Code Generation</b></p>
</div>

**Zenify is a complete Flutter state management framework with a built-in TanStack Query engine, offline-first resilience, and hierarchical dependency injection — with zero boilerplate and no code generation.**

```dart
// Hierarchical DI with automatic cleanup
scope.put<UserService>(UserService());
final service = scope.find<UserService>()!;

// Reactive state that just works
final count = 0.obs();
ZenObserver(() => Text('${count.value}'))  // Auto-rebuilds

// Infinite scroll — automatic page management
final feed = ZenInfiniteQuery<PostPage>(
  queryKey: 'feed',
  initialPageParam: 1,
  infiniteFetcher: (page, _) => api.getPosts(page: page),
  getNextPageParam: (lastPage, all) => lastPage.hasMore ? all.length + 1 : null,
);

feed.fetchNextPage();             // append next page
feed.hasNextPage.value            // know when to stop
feed.isFetchingNextPage.value     // drive your loading footer
feed.data.value                   // all pages, reactive
```

---

## 🎯…
