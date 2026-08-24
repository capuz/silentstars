---
repo: "hfhbd/routing-compose"
name: "routing-compose"
description: "Routing feature for Compose Web, Compose HTML and Desktop"
readmeQualityOk: true
url: "https://github.com/hfhbd/routing-compose"
homepage: "https://routing.softwork.app/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["compose-web", "kotlin", "compose-desktop", "compose-html"]
stars: 156
forks: 14
openIssues: 10
closedIssues: 38
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2021-06-08T15:22:41Z"
lastCommitAt: "2026-08-24T04:21:55Z"
lastReleaseAt: "2021-06-15T20:56:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 29
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/800c9cc8bc28ce8ecc52bce3a897a29bf7c5406ab0d9005c75e0c6de6dfe1d01/hfhbd/routing-compose"
fundingLinks: ["GITHUB:https://github.com/hfhbd"]
discussionCount: 2
---

# RoutingCompose

Routing feature for [Compose Web, Compose HTML and Desktop](https://github.com/Jetbrains/compose-jb)

## Install

This package is uploaded to MavenCentral.

````kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("app.softwork:routing-compose:LATEST")
}
````

## Usage

Example with `HashRouter`, `BrowserRouter` and `DesktopRouter` will be implemented in the same manner.

```kotlin
HashRouter(initPath = "/hello") { // or BrowserRouter(initPath = "/hello") {
    route("/hello") {
        Text("Hello World")
    }
}
```

More complex sample showing `Router.current`, query parameters, `@Composable` support and dynamic routing with `mutableState`:

```kt
@Composable
fun SomeContainer(content: @Composable () -> Unit) {
    header()
    content()
    footer()
}

HashRouter(initPath = "/users") { // or BrowserRouter(initPath = "/users") {
    val enableFeature by remember { mutableStateOf(false) }
    route("/users") {
        SomeContainer {
            int { userID ->
                Text("User with $userID")
            }
            noMatch {
                Text("User list")
            }
        }
    }
    if (enableFeature) {…
