---
repo: "TimothyHan/qa-buddy-skills"
name: "qa-buddy-skills"
description: "Your little QA buddy can help you with QA practices"
readmeQualityOk: true
url: "https://github.com/TimothyHan/qa-buddy-skills"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [67]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-04-06T14:10:40Z"
lastCommitAt: "2026-08-20T04:08:27Z"
lastReleaseAt: "2026-08-20T03:16:43Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 72
undervaluedScore: 49
maintainers: ["timothyh124", "TimothyHan"]
openGraphImageUrl: "https://opengraph.githubassets.com/87edc4441004a86fbe0bcd370a6b5877270ee9f7863d6781f23d072e1b21e3b9/TimothyHan/qa-buddy-skills"
---

# QABuddy

**당신의 프로젝트를 학습하는 QA 파운데이션**

[한국어](https://github.com/TimothyHan/qa-buddy-skills/blob/HEAD/README.md) · [English](https://github.com/TimothyHan/qa-buddy-skills/blob/HEAD/README-en.md)

스크럼 팀에서 일하는 SDT(Software Developers in Test)를 위한 AI 파트너입니다.<br>
에픽 테스트 계획 수립부터 스프린트 실행, 릴리스 검증까지 전체 워크플로우를 지원합니다.<br>
팀마다 QA의 요구는 다릅니다 — 그래서 QABuddy는 **자기 개선**하는 파운데이션으로 제공됩니다:<br>
모든 스킬 실행이 프로젝트 고유의 학습을 포착하고 다음 실행에 적용합니다.<br>
공식 지원 플랫폼은 **Claude Code**입니다. Jira 없이도 작동합니다.<br>
(Cursor/Copilot용 미검증 설치 스크립트도 빌드에 포함됩니다 — 아래 참고)

AI 코딩 어시스턴트의 네이티브 **스킬 시스템** 위에 구축되었습니다.<br>
QABuddy는 AI가 자동으로 인식하고 실행하는 `SKILL.md` 파일 모음입니다 —<br>
별도의 앱, 데몬, Node.js 외 의존성이 없습니다.

[빠른 시작](#빠른-시작) · [스킬](#스킬) · [안내 워크플로우](#안내-워크플로우) · [변경 이력](https://github.com/TimothyHan/qa-buddy-skills/blob/HEAD/CHANGELOG.md) · [기여하기](https://github.com/TimothyHan/qa-buddy-skills/blob/HEAD/CONTRIBUTING.md)

</div>

---

## QABuddy를 사용해야 하는 이유

| QABuddy 없이 | QABuddy와 함께 |
|---|---|
| 테스트 계획을 처음부터 수동으로 작성 | `/qa-start`가 에픽 컨텍스트를 기반으로 테스트 계획 자동 생성 |
| 그루밍 시 기억에 의존하여 티켓 리뷰 | `/qa-review-ticket`이 구조화된 체크리스트로 인수 조건(AC) 점검 |
| 스프레드시트로 테스트 커버리지 추적 | 지식 베이스가 추적성 매핑으로 커버리지 관리 |
| 복사-붙여넣기로 Jira에 결함 등록 | `/qa-qa`가 재현 단계 + 스크린샷과 함께 결함 자동 등록…
