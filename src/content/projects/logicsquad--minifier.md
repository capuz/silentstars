---
repo: "logicsquad/minifier"
name: "minifier"
description: "Java-based minification for web resources."
readmeQualityOk: true
url: "https://github.com/logicsquad/minifier"
language: "Java"
languages: ["Java"]
languagePcts: [79]
topics: ["java", "minify", "web"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 13
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-12-27T06:56:03Z"
lastCommitAt: "2026-08-09T04:47:39Z"
lastReleaseAt: "2024-10-28T09:43:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 52
maintainers: ["paulhoadley"]
openGraphImageUrl: "https://opengraph.githubassets.com/83531e3e86d82c429ed1b167a640b340bc34d3f9c204c7c72f8061194d8e3a72/logicsquad/minifier"
---

Minifier
========

What is this?
-------------
This project provides Java classes to do one thing: safely "minify"
web resources. The key word is "safely": the aim is _not_ to produce
maximal size reduction, nor introduce any morphological changes, but
to provide _reasonable_ file size reduction in most cases.

At launch, we will provide classes to minify Javascript and CSS.

Getting started
---------------
There are two minifier classes:

* `CSSMinifier` for CSS; and
* `JSMinifier` for Javascript.

They both implement `Minifier`, which declares a single method:

    void minify(Writer writer) throws MinificationException;

Further, they both extend `AbstractMinifier`, which provides a
constructor taking a `Reader` object. So you need a `Reader` and a
`Writer` to minify a resource, and that's it. For example:

    Reader input = new FileReader("basic.css");
    Writer output = new FileWriter("basic-min.css");
    Minifier min = new CSSMinifier(input);
    try {
        min.minify(output);
    } catch (MinificationException e) {
        // Handle exception
    }

And that's it. A `MinificationException` will usually wrap some _other_
exception, such as…
