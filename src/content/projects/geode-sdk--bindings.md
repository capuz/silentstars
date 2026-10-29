---
repo: "geode-sdk/bindings"
name: "bindings"
description: "Addresses & function signatures for Geometry Dash"
readmeQualityOk: true
url: "https://github.com/geode-sdk/bindings"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 107
forks: 197
openIssues: 9
closedIssues: 20
watchers: 0
contributors: 148
recentReleases: 1
createdAt: "2023-12-20T10:55:48Z"
lastCommitAt: "2026-10-29T10:20:05Z"
lastReleaseAt: "2026-10-27T17:20:57Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["Cvolton", "hiimjasmine00", "Kingminer7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/733884744/55b32ee5-42ed-4ccb-8316-bf8029dee258"
---

# Bindings

Addresses and bindings for [Geometry Dash](https://store.steampowered.com/app/322170/Geometry_Dash), for use with the [Geode](https://github.com/geode-sdk/geode) mod loader.

## Contributing

You can contribute new addresses / fields by opening up a [Pull Request](https://github.com/geode-sdk/bindings/pull).

The syntax of a binding is a simplified version of C++:
```cpp
// Platforms you can link directly to the symbol on, so win for Cocos2d on 
// Windows and android for everything on Android
[[link(android)]]
class Example : Base1, Base2 {
    /// Documentation for this binding. Uses Flash-compatible JSDoc
    /// @param param This param does things
    /// @param other This controls how the other param acts
    /// @returns A number depicting what it did
    int binding(float param, bool other) = win 0x123456, m1 0x789012;

    // If the binding is inlined on some platform, provide a reconstructed 
    // definition for it
    void inlined(bool x) {
        if (x) {
            // Do stuff
        }
    }

    void otherInlined() = win inline, imac 0x442110 {
        // code
    }

    // Statics and virtuals are as you'd expect
    static void example() = win…
