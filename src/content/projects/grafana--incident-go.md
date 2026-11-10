---
repo: "grafana/incident-go"
name: "incident-go"
description: "Clients, scripts and examples for using the Grafana Incident API"
readmeQualityOk: true
url: "https://github.com/grafana/incident-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["keep"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 13
recentReleases: 0
createdAt: "2023-02-23T20:17:56Z"
lastCommitAt: "2026-11-10T11:37:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 34
maintainers: ["nokka", "renovate-sh-app[bot]", "Ferril"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/605747397/0d162335-2695-4c9c-a471-4779853866fb"
---

# Grafana Incident API - Go client library

The Grafana Incident Go client library allows you to access the Grafana Incident API from your Go code.

- Get started with the [Grafana Incident API documentation](https://grafana.com/docs/grafana-cloud/incident/api/)
- Or dive deep into the [Go reference docs](https://grafana.com/docs/grafana-cloud/incident/api/reference/go/)

## Get started

Import the package:

```
go get github.com/grafana/incident-go@latest
```

## Make calls to the API

In this example, we will use the [IncidentsService.CreateIncident() method](https://grafana.com/docs/grafana-cloud/incident/api/experimental/reference/go/#createincident) to declare an Incident, and print its ID.

```go
// create a client, and the services you need
serviceAccountToken := os.Getenv("SERVICE_ACCOUNT_TOKEN")
client := incident.NewClient("https://your-api-endpoint/api", serviceAccountToken)
incidentsService := incident.NewIncidentsService(client)

// declare an incident
createIncidentResp, err := incidentsService.CreateIncident(ctx, incident.CreateIncidentRequest{
	Title: "short description explaining what's going wrong",
	Severity: incident.Options.IncidentSeverity.Minor,
})
if err !=…
