---
repo: "ntoskrnl7/crtsys"
name: "crtsys"
description: "C/C++ Runtime library for system file (Windows Kernel Driver) - Supports Microsoft STL"
url: "https://github.com/ntoskrnl7/crtsys"
language: "C++"
languages: ["C++"]
languagePcts: [69]
topics: ["windows-driver", "windows-kernel", "crt", "cruntime-library", "cpp", "driver-programming", "stl", "wdk", "c", "kernel"]
stars: 193
forks: 35
openIssues: 0
closedIssues: 2
watchers: 6
contributors: 1
recentReleases: 1
createdAt: "2021-10-04T11:57:24Z"
lastCommitAt: "2026-07-03T12:21:28Z"
lastReleaseAt: "2026-06-16T07:34:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 44
maintainers: ["ntoskrnl7", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77ae6e7c03c31ff24f4bb2dfad9361b80c531c4ded5179d4b7e71dde894c9293/ntoskrnl7/crtsys"
---

# crtsys

Familiar MSVC C++ runtime and STL experience for Windows kernel drivers (`.sys`).

[Korean documentation](./docs/ko-kr.md)

`crtsys` brings MSVC CRT/STL/VCRT/UCRT source paths into Windows kernel drivers.
Driver code keeps familiar MSVC C++ headers and STL types while runtime
dependencies are mapped onto a kernel-mode substrate with explicit driver-test
coverage and IRQL contracts.

Listed coverage means "verified by driver tests". It is not an exhaustive
support ceiling for every header or code path that may compile or work.

## Quick Start

| Path | Use when | Start here |
| --- | --- | --- |
| NuGet / MSBuild | Visual Studio or Build Tools WDK driver project | `PackageReference` or `Install-Package crtsys` |
| CMake prebuilt | Offline or pinned CI dependency | `find_package(crtsys CONFIG REQUIRED)` |
| CMake / CPM | CMake-based driver project that consumes `crtsys` from GitHub | `CPMAddPackage("gh:ntoskrnl7/crtsys@<version>")` |

Minimal MSBuild/NuGet consumer:

```xml
<ItemGroup>
  <PackageReference Include="crtsys" Version="<version>" />
</ItemGroup>
```

```powershell
msbuild .\my_driver.vcxproj /restore /p:Configuration=Debug /p:Platform=x64
```

For Visual Studio…
