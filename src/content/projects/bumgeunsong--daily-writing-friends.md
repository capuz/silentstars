---
repo: "BumgeunSong/daily-writing-friends"
name: "daily-writing-friends"
description: "Writing App"
url: "https://github.com/BumgeunSong/daily-writing-friends"
homepage: "https://dailywritingfriends.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 9
forks: 0
openIssues: 39
closedIssues: 121
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-10-19T09:13:28Z"
lastCommitAt: "2026-06-28T06:54:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 72
maintainers: ["BumgeunSong", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f9770e40d7909dc82ebc73eff9feaa142b41db99555ae42cad176c9717ec338/BumgeunSong/daily-writing-friends"
---

# 매일 글쓰기 프렌즈 (Daily Writing Friends)

글을 잘 쓰고 싶고, 생각이 깊어지고 싶다면? '매일 쓰는 습관'만큼 좋은 건 없다! 1달 동안 당신을 매일 쓰는 사람으로 만들어드립니다.

## 프로젝트 설명

'매일 글쓰기 프렌즈'는 사용자가 매일 글을 쓰는 습관을 기를 수 있도록 돕는 모노레포 기반 웹 서비스입니다. 현재 저장소에는 사용자용 웹 앱(`apps/web`)과 운영용 어드민 앱(`apps/admin`)이 함께 포함되어 있습니다.

## 사용한 기술

- **Monorepo / Package Manager:** pnpm workspace (pnpm 9)
- **Web App:** React 18, Vite 6, TypeScript 5
- **Admin App:** Next.js 16, React 18, TypeScript 5
- **Styling:** Tailwind CSS (web: v3, admin: v4)
- **State Management:** TanStack Query (web: v4, admin: v5)
- **Routing (web):** React Router v6
- **Editor:** Tiptap v3
- **Backend / DB / Auth:** Supabase (Postgres, Auth, RLS)
- **BaaS 연동:** Firebase (Storage, Remote Config, Analytics, Performance)
- **Server Functions:** Supabase Edge Functions (Deno)
- **Monitoring:** Sentry
- **Testing:** Vitest, Playwright

## 기능

- Supabase 기반 로그인/회원가입/비밀번호 재설정 및 계정 설정
- 게시판(코호트) 탐색 및 권한 기반 글 읽기
- 게시글 작성/수정/상세 보기 (Tiptap 에디터)
- 프리라이팅 모드 (튜토리얼, 타이머 기반 작성)
- 임시저장(드래프트) 자동 저장 및 불러오기
- 댓글/답글/리액션 기능
- 알림 목록 조회 및 상태 관리
- 글쓰기 통계, 기여도 그래프, 연속 글쓰기 스트릭/뱃지
- 사용자 설정(다크 모드, 차단 사용자 관리, 캐시 정리)
- 후원자(Donator) 배지 표시

## 설치 방법

1. **저장소 클론:**

   ```bash
   git clone…
