---
repo: "sudopark/TodoCalendar"
name: "TodoCalendar"
description: "📆  iOS Todo calendar app"
readmeQualityOk: true
url: "https://github.com/sudopark/TodoCalendar"
homepage: "https://apps.apple.com/kr/app/to-do-calendar/id6639620385"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 14
forks: 2
openIssues: 40
closedIssues: 513
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-03-02T15:42:34Z"
lastCommitAt: "2026-08-22T04:06:10Z"
lastReleaseAt: "2025-04-17T14:46:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 73
maintainers: ["sudopark"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de603da619fc0365a7e33d9af74fbdb47554098ab6d3147787cc251264d983a/sudopark/TodoCalendar"
---

# To-do Calendar
할일 목록이 있는 iOS 달력 앱

 ---|---|---|---

## What is To-do Calendar?
To-do Calendar는 할일 목록을 관리할 수 있는 달력 앱 입니다.
앱이 제공하는 다음의 기능들을 이용하여 일정 및 할일을 관리하세요.

- 일반 달력앱과 같이 일정을 달력에 추가하세요.
- 할일도 달력에 추가하여 관리할 수 있습니다.
- 추가한 일정 및 할일에 미리알림을 추가하거나, 이 중 제일 중요한 이벤트를 등록하세요.
- 앱이 제공하는 다양한 종류의 위젯을 사용하여 더 간편하게 일정을 관리하세요.

## Install
1. 이 repository를 클론 받고 develop 브랜치를 checkout 합니다.
   
2. clone 받은 프로젝트 디렉토리로 이동하여 [./install/install.sh](https://github.com/sudopark/TodoCalendar/blob/HEAD/install/install.sh)를 실행해주세요. 프로젝트 빌드를 위해 필요한 더미 파일들이 필요한 위치로 이동됩니다.

3. [mise](https://mise.jdx.dev/)를 설치하고, 프로젝트 루트에서 Tuist를 설치합니다.
   
   ```bash
   brew install mise
   mise install      # mise.toml에 정의된 tuist 버전 자동 설치
   ```
   
4. 다음을 실행하여 dependency를 설치하고 Xcode project를 생성하세요
   
   ```bash
   tuist install
   tuist generate --no-open
   ```
   
5. 생성된 TodoCalendar.xcworkspace를 사용하여 Xcode를 실행시킵니다.
   
6. `TodoCalendarApp ` Scheme 을 선택하고 앱을 실행시킵니다

   
클론받은 앱은 오프라인 모드로만 사용이 가능합니다.(로그인 및 계정 관련 기능 정상동작 x) 해당 기능을 포함하여 빌드하려는 경우 [문의](mailto:todocalendar.help@gmail.com)해주세요

## 프로젝트 구조

### Domain
```
Domain
├── Models
├── Repositories
├── Usecases
└── Utils
```
서비스 구현을 위한 Model과 Usecase 구현체가 포함됩니다.…
