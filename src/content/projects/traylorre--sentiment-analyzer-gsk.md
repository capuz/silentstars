---
repo: "traylorre/sentiment-analyzer-gsk"
name: "sentiment-analyzer-gsk"
description: "A cloud-hosted Sentiment Analyzer service developed with GitHub Spec-Kit"
readmeQualityOk: true
url: "https://github.com/traylorre/sentiment-analyzer-gsk"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 5
forks: 0
openIssues: 14
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-15T06:25:24Z"
lastCommitAt: "2026-08-01T06:16:03Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 54
maintainers: ["traylorre", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1096898233/c1681251-d680-4c7e-8bc1-df444746f2f3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061705Z&X-Amz-Expires=300&X-Amz-Signature=76cd9f0fcff2a38d387877f86cb455f6a966b5b07653e4128f0613044604c366&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMyNSwibmJmIjoxNzg1NTY1MDI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.56pYY1SkHT4jwsXa74Uo_-CxdRmTQSWaD6AvGWFsowI"
---

# sentiment-analyzer-gsk

A cloud-hosted Sentiment Analyzer service built with serverless AWS architecture (Lambda, DynamoDB, EventBridge, SNS/SQS). Features dev/preprod/prod promotion pipeline with automated testing and deployment gates.

## CI/CD Pipeline Status

```mermaid
%%{init: {"theme": "dark", "themeVariables": {"primaryColor": "#4A90A4", "tertiaryColor": "#2d2d2d", "lineColor": "#88CCFF", "primaryTextColor": "#FFFFFF", "clusterBkg": "#2d2d2d", "clusterBorder": "#555555"}, "flowchart": {"curve": "basis", "nodeSpacing": 50, "rankSpacing": 60}}}%%
flowchart LR
    subgraph Build["Build Stage"]
        build["Build Lambda<br/>Packages"]
        test["Unit Tests<br/>(Mocked AWS)"]
    end

    subgraph Images["Container Images"]
        sse_img["Build SSE<br/>Lambda Image"]
        analysis_img["Build Analysis<br/>Lambda Image"]
        dashboard_img["Build Dashboard<br/>Lambda Image"]
    end

    subgraph Preprod["Preprod Stage"]
        deploy_preprod["Deploy<br/>Preprod"]
        test_preprod["Integration<br/>Tests"]
    end

    subgraph Prod["Production Stage"]
        deploy_prod["Deploy<br/>Prod"]
        canary["Canary<br/>Test"]
        summary["Summary"]
    end…
