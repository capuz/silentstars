---
repo: "CAUCSE/CAUSW_backend"
name: "CAUSW_backend"
description: "Spring boot application for CAUSW backend system"
url: "https://github.com/CAUCSE/CAUSW_backend"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 30
forks: 19
openIssues: 38
closedIssues: 498
watchers: 3
contributors: 34
recentReleases: 5
createdAt: "2021-06-05T05:50:01Z"
lastCommitAt: "2026-06-25T06:40:45Z"
lastReleaseAt: "2026-06-19T02:52:41Z"
status: "thriving"
tags: ["legacy_hero", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["bingle625", "riadan710", "yvngyeong"]
openGraphImageUrl: "https://opengraph.githubassets.com/86cf63114a1aeb97f87fa9ab9003b2b14a13a37fe6e8d2ca7e35cc786afc3a48/CAUCSE/CAUSW_backend"
discussionCount: 0
---

# CAUSW Backend

중앙대학교 소프트웨어학부 동문네트워크 커뮤니티([causw.co.kr](https://causw.co.kr)) 서비스의 Backend 입니다.

서비스 이용 중 불편한 사항 혹은 문의사항이 있으신 경우 개발팀에 연락 부탁드리며, 서비스 개선을 위한 다양한 의견은 언제든 환영입니다.

프로젝트에 참여하시고 싶으시다면, [Contributing Guide](CONTRIBUTING.md)를 참조하시어 issue 혹은 pull request를 생성해주세요!

## 주요 기능

- **커뮤니티**: 게시판/게시글/댓글/대댓글, 투표, 좋아요·즐겨찾기, 신고, 경조사(결혼/장례 등) 공지
- **사용자**: 자체 가입 + Google/Kakao/Apple OAuth2 로그인, 학적 인증, 약관 동의, 차단 관계 관리
- **애셋**: 파일 업로드(S3), 사물함 신청/관리
- **캠퍼스**: 학사 일정 관리
- **알림**: 이벤트 기반 푸시 알림(FCM) 발송/구독 설정
- **연동**: 외부 공지사항 크롤링 → 게시글 자동 변환
- **관리자**: 운영자 로깅 기능

## Tech Stack

- Java 25, Spring Boot 4.0
- JPA / QueryDSL, MySQL, Flyway
- Spring Security, JWT, OAuth2(Google/Kakao/Apple)
- Redis, S3, Firebase(FCM), Spring Batch

## Architecture

멀티 모듈(`global`, `app-main`) 구성이며, 코드 구조는 도메인 중심 레이어드 패턴(`api → service → repository → entity`)을 따릅니다.

자세한 아키텍처/컨벤션 문서: [docs/guides/](docs/guides/README.md)

## Getting Started

### 요구 사항

- JDK 25
- MySQL
- Redis
- (선택) AWS S3, Firebase, Gmail SMTP, OAuth2 클라이언트 키 — 해당 기능 사용 시에만 필요

### 실행

```bash
# .env 준비 (.env.example 참고)
cp .env.example .env

# 빌드
./gradlew clean build

# 로컬 실행 (application-local.yml + .env 로딩)
./gradlew :app-main:bootRun

#…
