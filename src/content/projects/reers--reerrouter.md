---
repo: "reers/ReerRouter"
name: "ReerRouter"
description: "App URL router for iOS (Swift only). Register via Swift Macro"
readmeQualityOk: true
url: "https://github.com/reers/ReerRouter"
homepage: "https://deepwiki.com/reers/ReerRouter"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["deeplink", "ios", "navigator", "router", "routing", "swift", "swiftmacro"]
stars: 93
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-08-07T08:19:18Z"
lastCommitAt: "2026-07-25T06:00:30Z"
lastReleaseAt: "2026-03-30T14:05:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 28
maintainers: ["vnixx"]
openGraphImageUrl: "https://opengraph.githubassets.com/e445e9af0ce4882355f492f4e2b37ad58c9adfe43462c64ab15b834cd291bacc/reers/ReerRouter"
---

[中文文档](https://github.com/reers/ReerRouter/blob/HEAD/README_CN.md)

# ReerRouter
App URL router for iOS (Swift only). Inspired by [URLNavigator](https://github.com/devxoul/URLNavigator).

With the support of `@used` and `@section` (stable since Swift 6.3), data can be written into Mach-O sections. Combined with Swift Macros, this enables capabilities similar to various decoupling and registration methods from the Objective-C era. This framework also supports registering routes in this manner.

Registering UIViewController
```
extension Route.Key {
    // Note: The variable name 'chat' must exactly match the assigned string
    static let chat: Route.Key = "chat"
}

@Routable(.chat)
class ChatViewController: UIViewController {
    static func make(with param: Route.Param) -> ChatViewController? {
        return .init()
    }

    // ... other methods ...
}

@Routable("setting")
class SettingViewController: UIViewController {
    static func make(with param: Route.Param) -> SettingViewController? {
        return .init()
    }

    // ... other methods ...
}
```
Registering an action:
```
extension Route.Key {
    // Note: The variable name 'testKey' must exactly match the assigned…
