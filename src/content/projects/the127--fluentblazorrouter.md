---
repo: "The127/FluentBlazorRouter"
name: "FluentBlazorRouter"
description: "A fluently configured router for blazor. No @page with compile time constants needed anymore!"
readmeQualityOk: true
url: "https://github.com/The127/FluentBlazorRouter"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [54, 20]
stars: 8
forks: 1
openIssues: 7
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2021-12-17T22:50:52Z"
lastCommitAt: "2026-08-28T14:24:17Z"
lastReleaseAt: "2026-08-28T13:23:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 58
maintainers: ["The127"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe0d638a1766acbcefd0fc046ea2d0fc0f9ad488157084343d4e0fbcddd90a2a/The127/FluentBlazorRouter"
---

# FluentBlazorRouter

FluentBlazorRouter is an alternative router for blazor applications.
It allows you to use dynamic groups and nesting instead of using hardcoded compile time constatnts to route to your amazing blazor pages.
And all that without repeating yourself! (The future is now!)

# NOTICE! This library was primarily written for .net 7 and 8

For a full working example see the `net10example` folder and its project.

If you are using .net 10 or newer just replacing the router in the App.razor file doens't work anymore.
Instead you will need to add a single "RoutedPage" with an `@page` attribute (and also remove the layout from the new `Routes.razor` file or it will render that twice) like so:

```c#
@page "/"
@page "/{**path}"

@using FluentBlazorRouter

<FluentRouter>
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
    </Found>
    <NotFound>
        <LayoutView Layout="@typeof(MainLayout)">
            <p>Not found</p>
        </LayoutView>
    </NotFound>
</FluentRouter>

@code {
    // not used but required
    [Parameter]
    public string Path { get; set; }
}
```

This page will essentially work like…
