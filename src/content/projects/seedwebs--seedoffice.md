---
repo: "SeedWebs/SeedOffice"
name: "SeedOffice"
description: "Internal to for SeedWebs team."
url: "https://github.com/SeedWebs/SeedOffice"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 23
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T15:57:20Z"
lastCommitAt: "2026-06-25T01:36:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 37
maintainers: ["mennwebs"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5ddf0eb70004e79a7649c3304ff9e3b186f30b21a13d7b91081d9c17a1b0827/SeedWebs/SeedOffice"
---

# SeedOffice

ระบบจัดการงานภายในของทีม **SeedWebs** — รวม งาน/โปรเจกต์ · ลงเวลา · ค่าตอบแทน · อีเมลกลาง · เงินสดย่อย ไว้ที่เดียว เพื่อเลิกใช้ Notion + Everhour + คิดเงินเดือนด้วยมือ

แกนหลักคือลูป **งาน → ชั่วโมงที่ลง → เงิน** (ค่าตอบแทนรายคน + ต้นทุน/กำไรต่อโปรเจกต์)

## สถานะ

🚀 **ขึ้น production แล้ว** → **[office.seedwebs.com](https://office.seedwebs.com)** (deploy แรก มิ.ย. 2026)

ใช้งานจริงครบลูป **งาน → เวลา → เงิน** พร้อมฟีเจอร์รอบข้าง:

- ✅ **P1** — ลูปเงิน (โปรเจกต์/งาน · ลงเวลา timer+manual · ค่าตอบแทนงวด 25→24 · ต้นทุน/กำไร) + เอกสาร + ลูกค้า/CRM
- ✅ **P2** — เงินสดย่อย · team hub + ปฏิทินทีม · realtime presence (Durable Objects) · PWA
- ✅ **P3** — อีเมลกลาง (Gmail: ตอบ/มอบหมาย/ค้นย้อนหลัง) · sync Google Calendar + ICS feed
- ⏳ ถัดไป: P4 (ใบเสนอราคา → FlowAccount) · แจ้งเตือนภายใน · cutover เลิก Notion/Everhour

> ดีไซน์อ้างอิง [mockup.html](./mockup.html) ([ดู Live](https://seedwebs.github.io/SeedOffice/)) · สเปกเต็ม [SPEC.md](./SPEC.md)

## Stack

- **Backend:** Cloudflare Workers · Hono 4 · D1 + Drizzle 0.45 · R2 · Durable Objects (WebSocket presence/collision)
- **Frontend:** React 19 · Vite 8 · React Router 7 · Tailwind 4.3
- **Monorepo:** pnpm workspaces —…
