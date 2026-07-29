---
repo: "tribalfs/oneui-design"
name: "oneui-design"
description: "Complementary design library for  SESL8, SESL7 and SESL6 modules for creating OneUI-styled android application."
readmeQualityOk: true
url: "https://github.com/tribalfs/oneui-design"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["oneui-design-library", "jetpack-android", "material-ui", "sesl-androidx-library", "sesl-material-library", "oneui7"]
stars: 94
forks: 41
openIssues: 1
closedIssues: 13
watchers: 14
contributors: 1
recentReleases: 0
createdAt: "2023-03-07T21:00:30Z"
lastCommitAt: "2026-07-29T06:15:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 39
maintainers: ["tribalfs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/610968668/912d5864-636e-4634-a843-d56d4182f918?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061627Z&X-Amz-Expires=300&X-Amz-Signature=95b1add88d8c6633d93dee529a439751714b4823260cf3fee210c2fcf138d528&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjA4NywibmJmIjoxNzg1MzA1Nzg3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.jN8IL9STyNvCgsAW0-hA1E6EcJwxStw3sR1nNms6q1I"
fundingLinks: ["CUSTOM:paypal.me/tribalfs"]
discussionCount: 0
---

## Unofficial OneUI Design Library (OneUI 8, 7 & 6)

This design lib is consists of custom components intended to complement and integrate with both [SESL Android Jetpack Modules](https://github.com/tribalfs/sesl-androidx?tab=readme-ov-file#sesloneui-android-jetpack-unofficial)
and [SESL Material Components for Android](https://github.com/tribalfs/sesl-material-components-android?tab=readme-ov-file#sesloneui-material-components-for-android-unofficial).

## Usage
- Declare the needed github maven and authentication for [SESL Android Jetpack Modules](https://github.com/tribalfs/sesl-androidx?tab=readme-ov-file#sesloneui-android-jetpack-unofficial)
  and [SESL Material Components for Android](https://github.com/tribalfs/sesl-material-components-android?tab=readme-ov-file#sesloneui-material-components-for-android-unofficial)
  dependencies to your project following their usage guide. Then add the following next:

```
repositories {
  //other remote repositories
  
   maven {
      url = uri("https://maven.pkg.github.com/tribalfs/oneui-design")
      credentials {
          username = "<gh_username>"
          password = "<gh_access_token>"
      }
   } 
}
```

```
dependencies {…
