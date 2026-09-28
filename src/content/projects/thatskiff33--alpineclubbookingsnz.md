---
repo: "thatskiff33/AlpineClubBookingsNZ"
name: "AlpineClubBookingsNZ"
description: "Custom Website, Booking, and Membership Management for Alpine Clubs in New Zealand."
readmeQualityOk: true
url: "https://github.com/thatskiff33/AlpineClubBookingsNZ"
homepage: "https://tokoroa.org.nz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["booking-system", "club-management", "docker", "nextjs", "postgresql", "prisma", "stripe", "typescript", "xero", "nonprofit-software"]
stars: 8
forks: 8
openIssues: 56
closedIssues: 1547
watchers: 1
contributors: 7
recentReleases: 1
createdAt: "2026-04-03T03:25:48Z"
lastCommitAt: "2026-09-28T10:06:06Z"
lastReleaseAt: "2026-07-07T02:45:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 72
maintainers: ["thatskiff33-agents", "thatskiff33", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1200103511/70af0fe2-8bde-4423-baea-1d2efeac9374"
fundingLinks: ["GITHUB:https://github.com/thatskiff33"]
discussionCount: 2
---

<h1 align="center">
</h1>

</p>

</p>

**AlpineClubBookingsNZ** is an open-source booking, membership, payment, and
lodge-operations platform for small clubs. Members book real beds against real
capacity; admins run the whole club — bookings, membership lifecycle, fees,
Stripe and bank-transfer payments, Xero accounting, lodge chores, even the TV in
the lodge lobby — from one app.

**One deployment serves one club — and this repository is the generic product
every club deploys, not one club's copy of it.** Nothing here encodes which club
you are. Your name, capacity, age tiers, integer-cent rates, policies, wording,
branding, and which capabilities exist at all are values you supply. So the
normal way to adopt this is **configure, don't fork**, on four levers:

- **Module toggle** — switch a whole capability on or off for your deployment
  (kiosk, chores, waitlist, Xero, bed allocation, lobby displays, and more).
  [`docs/guides/modules.md`](https://github.com/thatskiff33/AlpineClubBookingsNZ/blob/HEAD/docs/guides/modules.md) is the live list, with each
  module's out-of-the-box default.
- **Setting** — every club has the capability, each supplies its own value or
  policy. Edited…
