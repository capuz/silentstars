---
repo: "caltechlibrary/crossrefapi"
name: "crossrefapi"
description: "This is a Go package fork working politely with the CrossRef API."
readmeQualityOk: true
url: "https://github.com/caltechlibrary/crossrefapi"
homepage: "https://software.library.caltech.edu/crossrefapi"
language: "Go"
languages: ["Go"]
languagePcts: [76]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2018-07-05T18:36:01Z"
lastCommitAt: "2026-10-26T20:59:54Z"
lastReleaseAt: "2023-06-06T21:49:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 59
maintainers: ["rsdoiel"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d43652d4c501193f190234ce1035f7a4fd1202f73ef0e4bae92a9b0dc59c33f/caltechlibrary/crossrefapi"
---

# crossrefapi

This is a go package for working with the Crossref API. It is inspired by
the an excellent CrossRefAPI Python package listed in the Crossref API docs.
This package is meant to follow the "polite" guidelines for interacting 
with the public API at api.crossref.org.

## Go package example

```go
    appName := path.Base(os.Args[0])
    client, err := crossrefapi.NewCrossRefClient(appName, "jane.doe@library.example.edu")
    if err != nil {
        // handle error...
    }
    works, err := client.Works("10.1037/0003-066x.59.1.29")
   
    if err != nil {
        // handle error...
    }
    // continue processing your "works" result...
```

You can compare two copies of a "works" response and see what has changed.

```go

    appName := path.Base(os.Args[0])
    client, err := crossrefapi.NewCrossRefClient(appName, "jane.doe@library.example.edu")
    if err != nil {
        // handle error...
    }
    newWorks, err := client.Works("10.1037/0003-066x.59.1.29")
    if err != nil {
        // handle error...
    }
    // Fetch our previously saved works document.
    src, err := os.ReadFile("0003-066x.59.1.29.json")
    if err != nil {
        // handle error...
    }…
