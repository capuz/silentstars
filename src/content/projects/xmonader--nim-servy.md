---
repo: "xmonader/nim-servy"
name: "nim-servy"
description: "Servy is a fast, simple and lightweight micro web-framework for Nim"
url: "https://github.com/xmonader/nim-servy"
homepage: "https://xmonader.github.io/nim-servy/"
language: "Nim"
languages: ["Nim"]
languagePcts: [89]
topics: ["nim", "framework", "web", "webframework"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2019-10-18T10:34:48Z"
lastCommitAt: "2026-07-03T12:21:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 35
maintainers: ["xmonader"]
openGraphImageUrl: "https://opengraph.githubassets.com/518227ef49c2d3991bc34f7cedf72ba8f7bca2c9ab4946583937e356b0561b87/xmonader/nim-servy"
---

# servy

A production-ready async web framework for Nim.

## Installation

```
nimble install servy
```

## Quickstart

```nim
import servy

when isMainModule:
  var router = initRouter()

  proc handleHello(req: Request, res: Response): Future[void] {.async.} =
    res.json(%*{"message": "hello world!"})

  router.addRoute("/hello", handleHello)

  let opts = newServerOptions(port = 9000)
  var s = initServy(opts, router)
  s.run()
```

## Routing

### Basic routes

```nim
router.addRoute("/", handleIndex)
router.addRoute("/get", handleGet, HttpGet)
router.addRoute("/post", handlePost, HttpPost)
router.addRoute("/put", handlePut, HttpPut)
router.addRoute("/delete", handleDelete, HttpDelete)
```

### URL parameters

```nim
proc handleUser(req: Request, res: Response): Future[void] {.async.} =
  res.json(%*{"user": req.urlParams["user"]})

router.addRoute("/user/:user", handleUser)
router.addRoute("/multi/:first/:second", handleMultiParam)
```

### Query parameters

```nim
proc handleQuery(req: Request, res: Response): Future[void] {.async.} =
  res.json(%*{"params": req.queryParams})
```

Request: `GET /query?page=1&limit=10` gives `req.queryParams["page"]` = `"1"`.

##…
