---
repo: "Mini-Sylar/express-typed-router"
name: "express-typed-router"
description: "Typed router for express with auto docs and standard schema support"
readmeQualityOk: true
url: "https://github.com/Mini-Sylar/express-typed-router"
homepage: "https://www.npmjs.com/package/@minisylar/express-typed-router"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["express", "express-js", "node", "nodejs", "javascript", "typescript", "typescript-library", "validation", "yup", "zod"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-24T11:52:10Z"
lastCommitAt: "2026-10-29T12:24:57Z"
lastReleaseAt: "2025-08-10T17:58:04Z"
status: "thriving"
tags: ["funded"]
healthScore: 91
undervaluedScore: 83
maintainers: ["Mini-Sylar", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc7042c69e535ef220a1c48109eb170382eb475cb3909b008e487125c49bc31f/Mini-Sylar/express-typed-router"
fundingLinks: ["GITHUB:https://github.com/Mini-Sylar"]
---

# @minisylar/express-typed-router

A strongly typed Express router with **Standard Schema** validation, automatic type inference, and ✨ OpenAPI docs.

Define routes once, infer `params` / `body` / `query`, and generate a clean API spec for docs or client generation.

---

## Documentation generated from your codebase

## What you get

- **Typed route handlers** — `req.params`, `req.body`, `req.query` inferred from your route + schema
- **Typed middleware** — middleware can extend `req` and `res.locals`
- **✨ OpenAPI docs** — generated from routes, schemas, and captured responses
- **Schema-agnostic** — any Standard Schema-compatible validator (Zod, Yup, Valibot, Arktype, Joi...)
- **Express 4 & 5** — common patterns supported
- **Client-friendly output** — generate `api.d.ts` and build any client wrapper

---

## Install

```bash
npm install @minisylar/express-typed-router
pnpm add @minisylar/express-typed-router
```

Requires Express 4.18+ or Express 5.

---

## Quick start

```ts
import express from "express";
import { z } from "zod";
import { createTypedRouter } from "@minisylar/express-typed-router";

const app = express();
app.use(express.json());

const router =…
