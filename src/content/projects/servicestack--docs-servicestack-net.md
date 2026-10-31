---
repo: "ServiceStack/docs.servicestack.net"
name: "docs.servicestack.net"
description: "ServiceStack Docs built with Razor SSG"
readmeQualityOk: true
url: "https://github.com/ServiceStack/docs.servicestack.net"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-06-28T14:17:25Z"
lastCommitAt: "2026-10-31T07:45:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 72
maintainers: ["mythz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e6e173c5546ac90d8a80de1aa10b4ba7e56397c5b3efc3c51489fbb785fde5/ServiceStack/docs.servicestack.net"
---

# razor-ssg

.NET 10.0 razor-ssg Static Generated Razor Pages Project Template

> Browse [source code](https://github.com/NetCoreTemplates/razor-ssg), view live demo [razor-ssg.web-templates.io](https://razor-ssg.web-templates.io) and install with [dotnet-new](https://docs.servicestack.net/dotnet-new):

    $ dotnet tool install -g x

    $ npx create-net razor-ssg ProjectName

Alternatively write new project files directly into an razor-ssg repository, using the Directory Name as the ProjectName:

    $ git clone https://github.com/<User>/<ProjectName>.git
    $ cd <ProjectName>
    $ npx create-net razor-ssg

## Documentation

Documentation for this template is included at [/posts/razor-ssg](https://razor-ssg.web-templates.io/posts/razor-ssg).

## Development Tasks

Tasks to run live reload Tailwind and .NET Razor Pages App during development:

### Run Tailwind in Background

    $ npm run ui:dev

### Run .NET App with Live Reload

    $ dotnet watch

## Local Production Tasks

Tasks to prerender and preview production ssg website build:

### Prerender website

    $ npm run prerender

### Preview pre-rendered website

    $ npm run serve
