---
repo: "samkiell/Studzy"
name: "Studzy"
description: "Study with steeze"
readmeQualityOk: true
url: "https://github.com/samkiell/Studzy"
homepage: "https://studzy.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai", "chat", "chat-application", "learning", "learning-by-doing", "study", "studying", "studzy", "studzyai"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T23:07:28Z"
lastCommitAt: "2026-09-01T08:49:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 57
maintainers: ["samkiell"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a4452e7a8933f05b1e5e8fb5fe493806549a82b0b960f1fce7541c4e113e69f/samkiell/Studzy"
---

# Studzy

A modern study companion built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── auth/callback/      # OAuth callback handler
│   ├── dashboard/          # Protected dashboard pages
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── auth/               # Authentication components
│   ├── dashboard/          # Dashboard components
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── supabase/…
