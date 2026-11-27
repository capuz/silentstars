---
repo: "armadillu/ofxRemoteUI"
name: "ofxRemoteUI"
description: "OpenFrameworks addon serves any number of variables (bool, float, int, enum, string, ofColor) on the network, so that you can modify from outside the OF app. Includes a native OSX Client. OSC based."
readmeQualityOk: true
url: "https://github.com/armadillu/ofxRemoteUI"
homepage: "http://uri.cat/"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["openframeworks", "controller", "parameters", "osc", "midi", "native", "tweak"]
stars: 140
forks: 23
openIssues: 5
closedIssues: 13
watchers: 12
contributors: 6
recentReleases: 3
createdAt: "2013-01-11T04:49:41Z"
lastCommitAt: "2026-11-27T16:25:02Z"
lastReleaseAt: "2026-11-27T11:44:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 45
maintainers: ["armadillu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c9e743fd3a67654acbbc76c49408f76c8878fcc478666c9d2e19aab8b2403c/armadillu/ofxRemoteUI"
---

# ofxRemoteUI

OpenFrameworks addon that allows you to serve c++ variables/parameters (bool, float, int, enum, string, ofColor) on the network, so that you can modify them remotely. It uses server client architecture, where your app is the server. It communicates both ways; you can modify your project's variables from the client, but you can also pull your app's variable values from the client; this way you can track values that evolve programatically. It runs on OSC.

You can save and then load "presets", which allow you to quickly change values for a lot of your parameters quickly. You can also make "group presets" to change only the values of a subset of your parameters.

__Compile against OF master branch. If you are trying to use this
against an older version (0.9.8 or lower) you should use the commit tagged
with "OF_0.9.8". It requires ofxPoco in OF versions >0.9.8__

Watch a quick [Intro Video](http://youtu.be/F18f67d_WjU).

  

In order of appearance in the screenshot above, Mac OS X native Client, ImGui Client (multiplatform), Built In Client (inside your OpenFrameworks app, keyboard operated only), Web Client (served from your OpenFrameworks app).

---
