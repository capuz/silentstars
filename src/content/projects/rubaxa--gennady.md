---
repo: "RubaXa/gennady"
name: "gennady"
description: "🤖 Gennadyᵇᵉᵗᵃ 🗯️ — GENeral Extensible Neural Network Adaptive Data Yntelligence."
url: "https://github.com/RubaXa/gennady"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai", "commit", "commitizen", "generator", "llm", "local", "code-review", "review", "resolve-conflicts", "review-verify"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-03-05T10:09:32Z"
lastCommitAt: "2026-06-27T06:23:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 68
maintainers: ["RubaXa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/943193945/8f07dcd7-89e3-4f94-a366-e36379e44536"
---

## 🤖 Gennadyᵇᵉᵗᵃ 🗯️

**GEN**eral **E**xtensible **N**eural **N**etwork **A**daptive **D**ata **Y**ntelligence.

CLI-инструмент для работы с git-изменениями, merge-конфликтами и GitLab review-пайплайном.

---

## ⚡ Быстрый старт

```bash
# Справка
npx gennady help

# По умолчанию показывается справка
npx gennady

# Commit запускается только явно
npx gennady commit
```

---

## 🧩 Что нужно в окружении

- Node.js `22+`
- Git-репозиторий (для команд с git-контекстом)
- Для GitLab-команд: `GITLAB_PERSONAL_TOKEN`

```bash
# Обязательно для review-verify / review-issues / vcs-reply (live)
export GITLAB_PERSONAL_TOKEN="<token>"

# Опционально (default: /api/v4)
export GITLAB_API_PATH="/api/v4"
```

---

## 🧭 Команды CLI

### 📝 `commit`

Генерация commit message из staged-изменений.

```bash
npx gennady commit
npx gennady commit --mode=oneline
npx gennady commit --branch=develop
npx gennady commit --task=MAILCORE-123
npx gennady commit --apply
```

**Опции:**

- `--mode`, `-m`: `auto | oneline | detailed`
- `--oneline`, `--short`, `--one`, `-o`: форсировать one-line
- `--branch`, `-b`: target branch для diff
- `--task`, `-t`: добавить task id в subject
- `--model`: модель AI backend
-…
