---
repo: "gin-contrib/i18n"
name: "i18n"
description: "i18n middleware"
readmeQualityOk: true
url: "https://github.com/gin-contrib/i18n"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 128
forks: 23
openIssues: 1
closedIssues: 7
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2019-11-24T09:03:48Z"
lastCommitAt: "2026-11-08T10:41:53Z"
lastReleaseAt: "2024-12-26T14:54:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 30
maintainers: ["appleboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/854cad3c7ad1abff4c632adfceacb9c60b532e1c8b0e9be2cc16ea30f00ac67e/gin-contrib/i18n"
---

# i18n

## Usage

Download and install it:

```sh
go get github.com/gin-contrib/i18n
```

Import it in your code:

```go
import ginI18n "github.com/gin-contrib/i18n"
```

Canonical example:

```go
package main

import (
  "log"
  "net/http"

  ginI18n "github.com/gin-contrib/i18n"
  "github.com/gin-gonic/gin"
  "github.com/nicksnyder/go-i18n/v2/i18n"
)

func main() {
  // new gin engine
  gin.SetMode(gin.ReleaseMode)
  router := gin.New()

  // apply i18n middleware
  router.Use(ginI18n.Localize())

  router.GET("/", func(ctx *gin.Context) {
    ctx.String(http.StatusOK, ginI18n.MustGetMessage(ctx, "welcome"))
  })

  router.GET("/messageId/:name", func(context *gin.Context) {
    context.String(http.StatusOK, MustGetMessage(context, &i18n.LocalizeConfig{
      MessageID: "welcomeWithName",
      TemplateData: map[string]string{
        "name": context.Param("name"),
      },
    }))
  })

  router.GET("/messageType/:name", func(context *gin.Context) {
    context.String(http.StatusOK, MustGetMessage(context, &i18n.LocalizeConfig{
      DefaultMessage: &i18n.Message{
        ID: "welcomeWithName",
      },
      TemplateData: map[string]string{
        "name":…
