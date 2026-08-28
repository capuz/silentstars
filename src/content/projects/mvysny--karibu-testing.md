---
repo: "mvysny/karibu-testing"
name: "karibu-testing"
description: "Vaadin Server-Side Browserless Containerless Unit Testing"
readmeQualityOk: true
url: "https://github.com/mvysny/karibu-testing"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [82]
stars: 136
forks: 17
openIssues: 0
closedIssues: 192
watchers: 6
contributors: 10
recentReleases: 2
createdAt: "2018-02-27T07:58:35Z"
lastCommitAt: "2026-08-28T14:23:51Z"
lastReleaseAt: "2026-07-23T11:06:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 43
maintainers: ["mvysny"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e6d133cbdfe502525b91d3411bc4d3b4967942a8198d23c726e7e3d53a61dc1/mvysny/karibu-testing"
---

# Karibu-Testing: The Vaadin Unit Testing

The Unit Testing library for [Vaadin](https://vaadin.com/).

When building apps with Vaadin Flow, your app manipulates Vaadin components
server-side, while the browser is just a mere "reflection" of
the server-side state. For example, setting the `Button`'s caption to "Foo" updates the `Button`'s
state server-side; Vaadin Flow then automatically applies the change in the browser-side `<vaadin-button>` element.
This happens automatically, behind-the-scenes; this is tested by the Vaadin company and doesn't need to be
tested by your app. Therefore, to test your app, you can leave out the "unimportant" browser part: you
want your tests to focus on the server-side where your logic resides.

Karibu-Testing gives you the ability to call `UI.getCurrent()` straight from your JUnit
test methods, and receive a
meaningful result in the process. You can call `UI.navigate()` to navigate around in your app;
you can instantiate your components and views directly from your JUnit test methods.
In order to do so, Karibu-Testing mocks `CurrentRequest`, `VaadinSession` and others in your
currently running JVM (in which your JUnit tests run).

Karibu-Testing…
