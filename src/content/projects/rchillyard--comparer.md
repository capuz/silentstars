---
repo: "rchillyard/Comparer"
name: "Comparer"
description: "A functional (three-way) comparer for Scala"
readmeQualityOk: true
url: "https://github.com/rchillyard/Comparer"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "compare", "comparer", "functional-programming"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2019-06-05T13:35:17Z"
lastCommitAt: "2026-10-21T21:15:33Z"
lastReleaseAt: "2026-10-20T18:19:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 72
maintainers: ["rchillyard"]
openGraphImageUrl: "https://opengraph.githubassets.com/d35185f1645dbbb566e1f5e4604f5d8146bfee8ad9be2438b00d79f94133716b/rchillyard/Comparer"
---

# Comparer: a functional three-way comparer.

## Making _Comparer_ a dependency
If you're using sbt, then include the following line (see the badge above for the current version):

    libraryDependencies += "com.phasmidsoftware" %% "comparer" % "2.0.0"
    
Comparer 2.x is for Scala 3 only, and can be used from Scala 3.3 or later.
If you are using Scala 2.13, then use version 1.1.0 (see [Migrating from 1.x](#migrating-from-1x)).

Full Scaladoc is available via [javadoc.io](https://javadoc.io/doc/com.phasmidsoftware/comparer_3).

## Introduction
Why do I say that this is a functional comparer? Because _Comparers_ can be composed!
And it's three-way, like the rather primitive Java mechanism, because _Comparer_ distinguishes between less than, equals, and greater than.

### The "old" object-oriented way
Let's take a look at a typical date comparison using the built-in comparisons provided by Scala
(and, ultimately, Java):

    case class Date(year: Int, month: Int, day: Int) extends Ordered[Date]:
      def compare(that: Date): Int =
        val cfy = year.compareTo(that.year)
        if cfy != 0 then cfy
        else
          val cfm = month.compareTo(that.month)
          if cfm…
