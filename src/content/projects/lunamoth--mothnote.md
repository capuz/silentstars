---
repo: "lunamoth/MothNote"
name: "MothNote"
description: "MothNote - 폴더 기반 노트 시스템과 시계·날씨·달력 위젯, 습관·다이어트 트래커를 통합하여 크롬 새 탭을 강력한 올인원 생산성 대시보드로 전환하는 확장 프로그램"
readmeQualityOk: true
url: "https://github.com/lunamoth/MothNote"
homepage: "http://lunamoth.com/entry/MothNote"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-30T10:59:43Z"
lastCommitAt: "2026-07-31T06:30:06Z"
lastReleaseAt: "2025-10-05T04:33:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 75
maintainers: ["lunamoth"]
openGraphImageUrl: "https://opengraph.githubassets.com/b090766d98e27151972ac44a2e4d48f877cb8b77a9155fd4dcfededc40ababd2/lunamoth/MothNote"
---

## 🦋 MothNote

[MothNote lunamoth 4th 블로그 소개 글](http://lunamoth.com/entry/MothNote)

[MothNote GitHub](https://github.com/lunamoth/MothNote)

MohtNote 는 폴더 기반 노트 시스템에 시계, 날씨, 달력 위젯을 더한 올인원 대시보드 구글 크롬 새 탭 확장 프로그램입니다.

---

### 개발 과정

MothNote 로 구글 크롬 새 탭에서 빠르게 바로 노트를 쓸 수 있고, 시계/달력/날씨/온도 등도 빠르게 보실 수 있습니다. 16가지 기능을 갖춘 [LunaTools](http://lunamoth.com/entry/LunaTools) 확장 프로그램 만든 이후로 문득 새 탭 확장 프로그램을 만들어보면 어떨까 하는 생각이 들어서 만들기 시작했습니다. 

개발자도 아니고 프로그래밍도 전혀 모릅니다만, 구글 AI 스튜디오 (웹) 에서 구글 제미나이 2.5 프로로 2025년 7월 25일 만들기 시작해서 38일 정도 개발해서 2025년 9월 1일 릴리스하게 됐습니다. 외부 라이브러리 제외한 코드 줄 수는 7,385줄 입니다. (GPT-5 출시 후에는 GPT-5 로 개발하고 있네요.)

가장 많이 보게 되는 새 탭에서 바로 노트를 쓸 수 있다면 편할 것 같아서, 많은 프로젝트 관리 툴에서 보던 3단 컬럼 구조로 노트 앱을 우선 만들기 시작했습니다. Solarized Light/Dark 테마 지원을 넣었고, Tabliss 확장 프로그램에서 아이디어를 얻어서 디지털 시계, 아날로그 시계, 날씨, 온도를 넣고, 일기장 활용을 위해서 달력도 넣었습니다.

글쓰기 앱에서 많이 구현하는 포커스 모드, 젠 모드도 넣었습니다. 레이아웃 설정, 편집기 글꼴 설정, 날씨 도시 설정, 데이터 백업/복원 기능도 지원했습니다.

중간에 다중 탭 동기화 기능을 지원하다가 오버 엔지니어링이란걸 이해하고 롤백하기도 했었네요. "원자적 작업" 이라는 단어도 만들면서 지원하면서 알게 됐던 기억 나는군요. 

기존에 만들었던 날씨 상세 페이지도 결합해 보면 좋을 것 같아서 넣어봤습니다. 마크다운은 지원하지 않으려고 했는데 외부 라이브러리 쓰는 법 알게 돼서 마크다운 뷰 모드를 지원했습니다. (Snakdown 쓰다가, Marked 로 변경) 
 
폴더 기본값으로 PARA, 불렛노트에서 권장하는 폴더를 넣어봤습니다. Todo.txt 식의 활용도…
