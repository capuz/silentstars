---
repo: "Kyeongrok/cds-remake"
name: "cds-remake"
description: "Uncharted Waters 3 Remake"
originalDescription: "대항해시대3 리메이크"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/Kyeongrok/cds-remake"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 15
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-20T15:40:57Z"
lastCommitAt: "2026-10-18T08:16:42Z"
lastReleaseAt: "2026-09-23T05:42:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 52
maintainers: ["kyeongrok3view"]
openGraphImageUrl: "https://opengraph.githubassets.com/45ac8e5b47640f7fc35bcac66e742b3a3525227d85cfb551254708d25a046386/Kyeongrok/cds-remake"
---

# Uncharted Waters 3 Development Tools

A WPF application that reads the SAVEDATA.CDS file of Uncharted Waters 3 and displays character information.

## Key Features

- Read the SAVEDATA.CDS file
- Display character information (name, stats, specialties, fame, origin, age, face, constellation)
- Filter out characters who have not yet appeared (under 18 or over 60)
- Search by name
- Filter by specialty level (26 specialties, levels 1-9)

## Build Instructions

### Build to Desktop

```bash
cd C:\Users\ocean\git\cds-helper\cds-helper
dotnet publish -c Release -o "C:\Users\ocean\Desktop\대항해시대3뷰어"
```

After the build completes, the executable is created in the `C:\Users\ocean\Desktop\대항해시대3뷰어` folder.

Executable: `cds-helper.exe`

### Development Build

```bash
cd C:\Users\ocean\git\cds-helper\cds-helper
dotnet build
```

### Run

```bash
cd C:\Users\ocean\git\cds-helper\cds-helper
dotnet run
```

## Requirements

- .NET 6.0 or later
- Windows (WPF)
- System.Text.Encoding.CodePages package (EUC-KR encoding support)

## Save File Location

The program automatically looks for the save file in these paths:

1. `SAVEDATA.CDS` in the same folder as the executable
2.…
