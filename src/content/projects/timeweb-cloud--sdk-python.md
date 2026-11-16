---
repo: "timeweb-cloud/sdk-python"
name: "sdk-python"
description: "Generated Python SDK for the Timeweb Cloud API"
originalDescription: "Сгенерированный Python SDK для API Timeweb Cloud"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/timeweb-cloud/sdk-python"
homepage: "https://timeweb.cloud/api-docs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "python", "sdk"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-23T14:44:13Z"
lastCommitAt: "2026-11-16T11:51:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: ["timeweb-cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/33bd6fea422706b85de55695a00f31c12dbc09dddd82b409bc9c545627048555/timeweb-cloud/sdk-python"
---

# timeweb-cloud-api
# Introduction
The Timeweb Cloud API lets you manage cloud resources programmatically using standard HTTP requests.

Many of the features available in the Timeweb Cloud control panel are also available through the API, allowing you to automate your own workflows.

This documentation first describes the general design and operating principles of the API, and then the specific endpoints. Examples of requests to them are also provided.

## Requests
Requests must be made over the `HTTPS` protocol to ensure transactions are encrypted. The following request methods are supported:
|Method|Usage|
|--- |--- |
|GET|Retrieves data about collections and individual resources.|
|POST|For collections, creates a new resource of this type. Also used to perform actions on a specific resource.|
|PUT|Updates an existing resource.|
|PATCH|Some resources support partial updates, that is, updating only some of a resource's attributes; in this case, the PATCH method is used instead of PUT.|
|DELETE|Deletes a resource.|

The `POST`, `PUT`, and `PATCH` methods may include an object in the request body with the content type `application/json`.

### Parameters in requests…
