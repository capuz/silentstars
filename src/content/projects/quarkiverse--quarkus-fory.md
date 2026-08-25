---
repo: "quarkiverse/quarkus-fory"
name: "quarkus-fory"
description: "A blazingly fast multi-language serialization framework powered by JIT and zero-copy."
readmeQualityOk: true
url: "https://github.com/quarkiverse/quarkus-fory"
homepage: "https://docs.quarkiverse.io/quarkus-fory/dev"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["quarkus-extension", "serialization", "fory"]
stars: 15
forks: 5
openIssues: 1
closedIssues: 16
watchers: 2
contributors: 38
recentReleases: 0
createdAt: "2024-10-31T12:13:56Z"
lastCommitAt: "2026-08-25T04:10:19Z"
lastReleaseAt: "2025-12-06T04:25:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["dependabot[bot]", "quarkiverse-ci[bot]", "zhfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/33d01ff42368af37f82c36136479fb173d3ec8676903560e6738846fb5f1539e/quarkiverse/quarkus-fory"
---

# Quarkus Fory

Quarkus Fory is a Quarkus extension to use [Apache Fory](https://github.com/apache/fory) for serialization.

## Documentation

The documentation for this extension can be found [here](https://docs.quarkiverse.io/quarkus-fory/dev/index.html) while the documentation for the Apache Fory can be found at https://fory.apache.org/.

## Getting Started

```java
import java.util.List;
import java.util.Map;

import io.quarkiverse.fory.ForySerialization;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import org.apache.fory.BaseFory;

@ForySerialization
record Foo(int f1, String f2, List<String> f3, Map<String, Long> f4) {
}

@Path("/fory")
@ApplicationScoped
public class ForyResources {
  @Inject
  BaseFory fory;

  @GET
  @Path("/record")
  public Boolean testSerializeFooRecord() {
    Foo foo1 = new Foo(10, "abc", List.of("str1", "str2"), Map.of("k1", 10L, "k2", 20L));
    Foo foo2 = (Foo) fory.deserialize(fory.serialize(foo1));
    return foo1.equals(foo2);
  }
}
```

## Use Apache Fory with Quarkus REST/RESTEasy
You can send a http request with Fory protocol, and let Fory to handle…
