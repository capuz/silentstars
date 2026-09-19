---
repo: "alxkm/streamer"
name: "streamer"
description: "Stream collectors and helpers the JDK left out"
readmeQualityOk: true
url: "https://github.com/alxkm/streamer"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["collections", "collections-framework", "collections-java", "java", "java-8", "javastreams", "javautility", "javautils", "steam-api"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-10-08T20:01:18Z"
lastCommitAt: "2026-09-19T08:13:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["dependabot[bot]", "alxkm"]
openGraphImageUrl: "https://opengraph.githubassets.com/0001f4be79421799ec06a62212a39c96df4ca8c1d3ea1d8ca545e1e062005037/alxkm/streamer"
---

<h1 align="center">
  Streamer
</h1>

  <b>The stream operators <code>java.util.stream</code> forgot.</b><br>
  Zip, batch, sliding windows, running folds, sorted merges. Lazy, tested, zero dependencies.
</p>

</p>

</p>

---

## The problem

Java's Stream API is excellent at map, filter and reduce, and silent about everything else. Pair two
streams positionally, cut a stream into chunks of 500 for a batch insert, compute a moving average,
emit running totals, merge two sorted files without loading either one - and you are writing a
`Spliterator` by hand. Again.

Those spliterators are already written here, with the edge cases they usually get wrong: the short
tail, the unequal lengths, the close handler that leaks the underlying file, the negative range that
splits into billions of elements that were never in it.

```java
// Batch 10 million rows into inserts of 500. One batch is in memory at a time.
try (Stream<Row> rows = repository.streamAll()) {
    Streamer.of(rows).batch(500).forEach(repository::insertAll);
}

// Seven day moving average over a price series.
Streamer.of(prices)
        .windowed(7)
        .mapToDouble(week ->…
