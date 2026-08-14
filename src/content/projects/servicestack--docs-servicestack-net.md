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
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-06-28T14:17:25Z"
lastCommitAt: "2026-08-14T05:13:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["mythz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b870bf6ce0c48a9e339582bdb6be3b5572dec4fc609323971224259a3773a228/ServiceStack/docs.servicestack.net"
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
