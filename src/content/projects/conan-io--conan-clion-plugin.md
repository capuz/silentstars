---
repo: "conan-io/conan-clion-plugin"
name: "conan-clion-plugin"
description: "CLion C/C++ IDE plugin for Conan Package Manager"
readmeQualityOk: true
url: "https://github.com/conan-io/conan-clion-plugin"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [81]
stars: 112
forks: 27
openIssues: 46
closedIssues: 48
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2018-03-26T07:37:14Z"
lastCommitAt: "2026-11-05T00:21:46Z"
lastReleaseAt: "2023-08-24T10:23:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 42
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e40a9298d5f9e4a4a64797e45e4826e3b2bb79a1a79bd6f7da0d43196b16e16c/conan-io/conan-clion-plugin"
---

# Conan CLion plugin

Conan, the C and C++ package manager, now directly in your IDE.
List available libraries, install and use them without leaving CLion

## Using the Plugin

> **Note**
> 
> For a detailed explanation of how to use the plugin check: https://blog.conan.io/introducing-new-conan-clion-plugin/

Go to the “Conan” tool tab at the bottom of the IDE. You will see that the only enabled
action in the toolbar of the plugin is the one with the ⚙️ (wheel) symbol, click on it. 

The first thing you should do there is configuring the Conan client executable that's
going to be used. You can point to one specifically installed in an arbitrary location on
your system or you can select *"Use Conan installed in the system"* to use the one
installed at the system level.

You will find there some options marked as default. Normally, if you are using the Conan plugin, you wouldn't want to unmark them. So leave
them and let's create our project and add the libraries to it. So, click on the OK button
and the plugin should be ready to use.

After doing the initial configuration, you will notice that the list of libraries is now
enabled and that the 🔄 (update) and 👁️ (inspect) symbols…
