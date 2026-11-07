---
repo: "lydell/elm-app-url"
name: "elm-app-url"
description: "URLs for applications"
readmeQualityOk: true
url: "https://github.com/lydell/elm-app-url"
homepage: "https://package.elm-lang.org/packages/lydell/elm-app-url/latest/"
language: "Elm"
languages: ["Elm"]
languagePcts: [92]
topics: ["elm"]
stars: 30
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-10-16T14:34:57Z"
lastCommitAt: "2026-11-07T10:34:15Z"
lastReleaseAt: "2023-07-26T19:59:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["lydell"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd4c1cea753fb67a70a990b51b05eb93cd93881dc6b7727d7d2468219446d58d/lydell/elm-app-url"
---

# elm-app-url

`AppUrl` is an attempt at making URL handling simpler than [elm/url]!

It’s based around this [AppUrl] type:

```elm
type alias AppUrl =
    { path : List String
    , queryParameters : QueryParameters
    , fragment : Maybe String
    }

type alias QueryParameters =
    Dict String (List String)
```

Which works really nicely with pattern matching!

```elm
import AppUrl exposing (AppUrl)
import Dict

parse : AppUrl -> Maybe Page
parse url =
    case url.path of
        [] ->
            Just Home

        [ "product", productId ] ->
            String.toInt productId |> Maybe.map (Product << ProductId)

        [ "products" ] ->
            Just
                (ListProducts
                    { color = Dict.get "color" url.queryParameters |> Maybe.andThen List.head
                    , size = Dict.get "size" url.queryParameters |> Maybe.andThen List.head
                    }
                )

        _ ->
            Nothing

type Page
    = Home
    | Product ProductId
    | ListProducts Filters

type ProductId
    = ProductId Int

type alias Filters =
    { color : Maybe String
    , size : Maybe String
    }
```

Creating URL strings is pretty smooth too:…
