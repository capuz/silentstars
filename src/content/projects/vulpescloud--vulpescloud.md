---
repo: "VulpesCloud/VulpesCloud"
name: "VulpesCloud"
description: "Easily Manage your Minecraft Network with VulpesCloud!"
readmeQualityOk: true
url: "https://github.com/VulpesCloud/VulpesCloud"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["cloudsystem", "kotlin", "minecraft", "minecraft-network", "minecraft-server", "minecraft-server-management", "velocity"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-04T12:57:16Z"
lastCommitAt: "2026-08-05T06:09:05Z"
lastReleaseAt: "2026-04-17T19:46:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 80
maintainers: ["TheCGuyGitHub", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/867643559/2f67e9df-aba0-4a6c-a3c7-e70aacf3e37f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060937Z&X-Amz-Expires=300&X-Amz-Signature=a0efffee8e80a3d65ae5b817329fc4cff226c0403cbd3a6dfc9e83dca74d7598&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ3NywibmJmIjoxNzg1OTEwMTc3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.IYGrCQ7mPqbHcX-Yu--9iIot8gP1j2RXnfzaYV6_iU0"
---

# VulpesCloud

  

> [!CAUTION]
> # VulpesCloud is in Early Development! Bugs may occur, please Report them!

# API

### Adding the Vulpescloud Repository
##### build.gradle.kts
```kotlin
repositories {
    maven("https://repo.vulpescloud.de/releases")
}
```
### Artifacts

| artifact id           | usage                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------|
| api       | When developing almost anything related to VulpesCloud                                        |
| bridge    | When developing Minecraft plugins for VulpesCloud                                             |
| connector | When developing something that needs access to the Main Plugin, for example a Minestom Server |
| node      | When developing modules for the Cloud                                                         |
| wrapper   | Generally no usage for Developers                                                             |

### Adding VulpesCloud to the Dependencies 
#### build.gradle.kts
```kotlin
repositories {…
