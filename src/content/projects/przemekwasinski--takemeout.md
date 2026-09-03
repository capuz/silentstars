---
repo: "PrzemekWasinski/TakeMeOut"
name: "TakeMeOut"
description: "A full stack food ordering platform with customer ordering and restaurant management tools - made with .NET"
readmeQualityOk: true
url: "https://github.com/PrzemekWasinski/TakeMeOut"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [63, 32]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-01-29T01:46:39Z"
lastCommitAt: "2026-09-03T08:13:13Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 37
maintainers: ["PrzemekWasinski"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef11601361f3fc022d4e666b6e61714a9160d586a7d0734be6c00105328ccdb/PrzemekWasinski/TakeMeOut"
---

# Take Me Out 
Take Me Out is a restaurant delivery system where users can login/register search for restaurants near them, sort by food type, menu items, location etc. order, see live updates for their order and rate restaurnats. Restaurant owners can register their restaurant, see their daily revenue, rating, orders etc, update customer's orders, add/remove/edit their menu, items, restaurant info and more.

Home Page:

Restaurant Owner's dashboard:

# Tech stack

    Frontend: Vanilla Javascript, Tailwind CSS
    Backend: .NET Framework
    Database: Microsoft SQL

# How to run

Before being able to run this project, the following tools need to be installed on your system:

        .NET 8.0
        Microsoft SQL Server Management Studio (SSMS)

First install the required packages by running the following commands in `src/TakeMeOut.API`:

    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    dotnet add package Microsoft.EntityFrameworkCore.Tools
    dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
    dotnet add package Swashbuckle.AspNetCore
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet add package Microsoft.AspNetCore.Cors…
