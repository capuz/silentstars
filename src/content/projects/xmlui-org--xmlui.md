---
repo: "xmlui-org/xmlui"
name: "xmlui"
description: "A framework for building user interfaces declaratively, with XML markup and flexible theming"
readmeQualityOk: true
url: "https://github.com/xmlui-org/xmlui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ui-framework", "webapp", "webapplication", "webapps", "xml"]
stars: 213
forks: 7
openIssues: 33
closedIssues: 272
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2024-08-06T12:29:14Z"
lastCommitAt: "2026-08-17T04:20:31Z"
lastReleaseAt: "2025-05-16T08:54:20Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 40
maintainers: ["Dotneteer", "judell", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb182da38d986047c97b08e43729cb0a02f78cec3085be9f34e5c8394b1107c/xmlui-org/xmlui"
discussionCount: 1
---

# XMLUI

**XMLUI** is a framework for building user interfaces declaratively, with XML markup and flexible theming.

**Easy to create**. Build on the web platform with little or no knowledge of React or CSS.

**Clean and modern**. Enjoy themes that look great out of the box and are easy to modify. Create experiences that meet expectations for modern web apps.

**Connected**. Read and write APIs with little or no scripting.

**Modular**. Use a comprehensive suite of [components](https://docs.xmlui.org/components/_overview) that you can extend with — again! — little or no scripting.

**Easy to deploy**. Just drop a handful of files onto a static webserver.

## See it in action

```xml
<App>
  <Select id="lines" initialValue="bakerloo">
    <Items data="https://api.tfl.gov.uk/line/mode/tube/status">
        <Option value="{$item.id}" label="{$item.name}" />
    </Items>
  </Select>
  <DataSource
    id="tubeStations"
    url="https://api.tfl.gov.uk/Line/{lines.value}/Route/Sequence/inbound"
    resultSelector="stations"/>
  <Table data="{tubeStations}" height="280px">
    <Column bindTo="name" />
    <Column bindTo="modes" />
  </Table>
</App>
```

## Getting started

The fastest way…
