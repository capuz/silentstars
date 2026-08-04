---
repo: "sergey-tihon/Clippit"
name: "Clippit"
description: "Fresh PowerTools for OpenXml"
readmeQualityOk: true
url: "https://github.com/sergey-tihon/Clippit"
homepage: "https://sergey-tihon.github.io/Clippit/"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [78, 22]
topics: ["dotnet", "openxml"]
stars: 68
forks: 28
openIssues: 4
closedIssues: 120
watchers: 2
contributors: 26
recentReleases: 8
createdAt: "2019-11-21T16:44:08Z"
lastCommitAt: "2026-08-04T06:11:46Z"
lastReleaseAt: "2026-07-04T08:15:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["github-actions[bot]", "sergey-tihon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fee8b5fd45392b75ddce0e90d728dbe2328f4ff4fce6cd5910e861eea2464552/sergey-tihon/Clippit"
discussionCount: 1
---

# Clippit — Fresh PowerTools for OpenXml

Clippit is a .NET library for programmatically creating, modifying, and converting
Word (DOCX), Excel (XLSX), and PowerPoint (PPTX) documents. Built on top of the
[Open XML SDK](https://github.com/OfficeDev/Open-XML-SDK), it provides high-level
APIs that handle the complexity of the Open XML format so you can focus on your content.
It also includes a scriptable CLI for PowerPoint split/build/verify workflows,
manifest-driven Word build/compare/consolidate workflows, DOCX template
assembly and markup cleanup, DOCX↔HTML conversion, and XLSX create/verify
workflows.

📖 **[Full documentation and tutorials →](https://sergey-tihon.github.io/Clippit/)**

🛠️ **[CLI usage →](https://sergey-tihon.github.io/Clippit/cli.html)**

🤖 **Workspace skills for coding assistants:** `clippit install --skills`

## Installation

```bash
dotnet add package Clippit
```

## Quick Start

```csharp
using Clippit.PowerPoint;

// Split a presentation into individual slides
var presentation = new PmlDocument("deck.pptx");
var slides = PresentationBuilder.PublishSlides(presentation);
foreach (var slide in slides)
    slide.SaveAs(Path.Combine("output",…
