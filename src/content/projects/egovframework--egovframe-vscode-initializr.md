---
repo: "eGovFramework/egovframe-vscode-initializr"
name: "egovframe-vscode-initializr"
description: "eGovFrame Initializer in Visual Studio Code"
url: "https://github.com/eGovFramework/egovframe-vscode-initializr"
language: "TypeScript"
languages: ["TypeScript", "Handlebars"]
languagePcts: [79, 20]
stars: 10
forks: 24
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 22
recentReleases: 2
createdAt: "2025-08-11T00:35:02Z"
lastCommitAt: "2026-06-30T06:49:30Z"
lastReleaseAt: "2026-05-19T06:28:41Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["swanpark8538", "z3rotig4r", "dasomel"]
openGraphImageUrl: "https://opengraph.githubassets.com/190ca3599d37c0847740542ee7e3351a763bbbe4aa63d4c4797d8adf6dac2caf/eGovFramework/egovframe-vscode-initializr"
---

# eGovFrame VSCode Initializr

## 개요

**eGovFrame VSCode Initializr**는 전자정부 표준프레임워크(eGovFrame) 프로젝트 생성 및 설정을 위한 Visual Studio Code 확장 프로그램입니다. 개발자가 eGovFrame 기반 프로젝트를 쉽고 빠르게 시작할 수 있도록 도와주는 통합 도구입니다.

가이드 문서들 목록은 다음과 같습니다.
- **README.md**: Extension 사용자를 위한 기능 활용 방법 소개
- **[CONTRIBUTING.md](https://github.com/eGovFramework/egovframe-vscode-initializr?tab=contributing-ov-file#contributing-guide)**: 컨트리뷰션 참여자를 위한 컨트리뷰션 참여 방법 소개
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)**: Extension 개발자를 위한 아키텍쳐, 폴더 구조 소개
- **[GettingStarted.md](./docs/GettingStarted.md)**: eGovFrame VSCode Initializr를 처음 개발하는 분들을 위한 소개
- **[DEVELOPER.md](./docs/DEVELOPER.md)**: eGovFrame VSCode Initializr 개발을 위한 기능, 시스템, 기술스택 소개

## 주요 기능

- **프로젝트 생성 기능**: eGovFrame 템플릿 기반 프로젝트 자동 생성
- **CRUD 코드 생성 기능**: DDL 기반 CRUD 코드 자동 생성
  - **실시간 미리보기**: DDL 변경시 템플릿 미리보기 자동 업데이트 (11개 템플릿 지원)
  - **성능 최적화**: 병렬 렌더링 및 지연 로딩으로 빠른 응답성
- **설정 코드 생성 기능**: Spring Framework 설정 파일 (XML, Java Config, YAML, Properties) 생성
- **VSCode 네이티브 UI**: VSCode 테마 통합 커스텀 React 컴포넌트 기반 사용자 인터페이스
- **다크/라이트 테마**: VSCode 테마 자동 연동 및 실시간 전환 지원

## 주요 기능별 상세 설명

### 1. 프로젝트 생성 (Projects)

#### 기능 개요
- eGovFrame 표준 템플릿 기반 프로젝트 자동 생성
- Maven/Gradle 프로젝트…
