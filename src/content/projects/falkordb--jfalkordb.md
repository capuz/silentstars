---
repo: "FalkorDB/JFalkorDB"
name: "JFalkorDB"
description: "Java API for FalkorDB"
readmeQualityOk: true
url: "https://github.com/FalkorDB/JFalkorDB"
homepage: "https://www.falkordb.com/"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["falkordb", "graphdatabase", "devtools", "javatools", "knowledge-graph", "llm"]
stars: 22
forks: 9
openIssues: 3
closedIssues: 30
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2023-11-26T13:38:14Z"
lastCommitAt: "2026-09-08T08:16:45Z"
lastReleaseAt: "2023-12-12T10:44:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["barakb", "dependabot[bot]", "gkorland"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae47a30391955aed11be6c98ed7633a16888880c113be7441433d4a27006c306/FalkorDB/JFalkorDB"
---

# JFalkorDB

FalkorDB Java client

## Official Releases

```xml
  <dependencies>
    <dependency>
      <groupId>com.falkordb</groupId>
      <artifactId>jfalkordb</artifactId>
      <version>0.11.1</version>
    </dependency>
  </dependencies>
```

## Snapshots

```xml
  <repositories>
    <repository>
      <id>snapshots-repo</id>
      <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
  </repositories>
```

and

```xml
  <dependencies>
    <dependency>
      <groupId>com.falkordb</groupId>
      <artifactId>jfalkordb</artifactId>
      <version>0.11.2-SNAPSHOT</version> 
    </dependency>
  </dependencies>
```

## Example: Using the Java Client

```java
package com.falkordb;

import com.falkordb.graph_entities.Edge;
import com.falkordb.graph_entities.Node;
import com.falkordb.graph_entities.Path;
import com.falkordb.Graph;
import com.falkordb.GraphContext;
import com.falkordb.GraphContextGenerator;
import com.falkordb.GraphTransaction;
import com.falkordb.Record;
import com.falkordb.ResultSet;
import com.falkordb.FalkorDB;
import com.falkordb.Driver;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class…
