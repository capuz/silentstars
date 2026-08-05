---
repo: "EvotecIT/OfficeIMO"
name: "OfficeIMO"
description: "MIT-licensed, COM-free .NET libraries for creating, reading, editing, converting, rendering, and extracting Office, PDF, email, OneNote, and text formats."
readmeQualityOk: true
url: "https://github.com/EvotecIT/OfficeIMO"
homepage: "https://officeimo.com/"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["docx", "openxml", "openxml-sdk", "office", "word", "c-sharp", "hacktoberfest", "aspose-alternative", "document-automation", "document-conversion"]
stars: 498
forks: 69
openIssues: 1
closedIssues: 177
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2021-12-22T07:54:02Z"
lastCommitAt: "2026-08-05T06:07:39Z"
lastReleaseAt: "2022-11-20T09:17:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 38
maintainers: ["PrzemyslawKlys", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/440778041/94cacd07-e5ee-48a7-8c5c-73bf117646e6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060936Z&X-Amz-Expires=300&X-Amz-Signature=76a1fcda33220c544b0abc8f992cf5ae5cd612d7ca96a638ee2a95c6c9124f57&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ3NiwibmJmIjoxNzg1OTEwMTc2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.e3kjVZL2G5JtsCiNWZyVrGFBlcB7ViCnKTdtBBsUNLs"
fundingLinks: ["GITHUB:https://github.com/PrzemyslawKlys", "CUSTOM:https://paypal.me/PrzemyslawKlys"]
---

# OfficeIMO — Office and document libraries for .NET

OfficeIMO is a family of COM-free .NET libraries for creating, reading, editing, converting, and exporting Office and document formats. It runs in services, desktop applications, build agents, containers, and automation hosts without Microsoft Office, Excel, PowerPoint, Visio, or LibreOffice automation.

This is not one facade over a collection of unrelated document libraries. OfficeIMO owns its OneNote, PDF, Markdown, RTF, OpenDocument, AsciiDoc, LaTeX, CSV, EPUB, ZIP, drawing, legacy Word `.doc`, legacy Excel `.xls`, and legacy PowerPoint `.ppt`/`.pot`/`.pps` implementations. Word, Excel, and PowerPoint use the Open XML SDK for package mechanics; HTML uses AngleSharp for DOM and CSS parsing. Converters compose the same first-party object models used by the native packages and return diagnostics when a target format cannot carry everything from the source.

The current source line is `3.1.x`; the latest NuGet release is `3.0.3`. Applications should keep OfficeIMO packages on the same coordinated version. The 3.1 source API keeps CSV and Excel behavior package-owned, uses one document lifecycle vocabulary, and keeps converters…
