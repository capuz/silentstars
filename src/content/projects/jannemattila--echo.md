---
repo: "JanneMattila/Echo"
name: "Echo"
description: "Simple ASP.NET Echo application. Comes in handy if you play a lot with Webhooks."
readmeQualityOk: true
url: "https://github.com/JanneMattila/Echo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["asp-net-core", "webhook"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2018-05-01T14:26:29Z"
lastCommitAt: "2026-11-20T12:24:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 37
maintainers: ["JanneMattila"]
openGraphImageUrl: "https://opengraph.githubassets.com/c382b9863ec742a34a7b14b760e114886676cc7991d798ddd76594bf04a3724f/JanneMattila/Echo"
---

# Instructions




Echo can be used for testing various integrations and webhooks.
It echoes back the request headers and request body, so you can
study content better.

## Working with 'Echo'

### How to create image locally

```batch
# Build container image
docker build . -t echo:latest

# Run container using command
docker run -it --rm -p "8080:8080" echo:latest
``` 

### How to test locally

Using `curl`:

```batch
curl -d '{ "firstName": "John", "lastName": "Doe" }' -H "Content-Type: application/json" -X POST http://localhost:2001/api/echo
``` 

Using `PowerShell`:

```powershell
$url = "http://localhost:2001/api/echo"
$data = @{
    firstName = "John"
    lastName = "Doe"
}
$body = ConvertTo-Json $data
Invoke-RestMethod -Body $body -ContentType "application/json" -Method "POST" -DisableKeepAlive -Uri $url
``` 

Using Visual Studio Code with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension:

```http
### Invoke Echo
POST http://localhost:2001/api/echo HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    firstName: "John"
    lastName: "Doe"
}
```…
