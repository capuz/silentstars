---
repo: "AnswerDotAI/aidialog"
name: "aidialog"
description: "Read, search, and edit AI dialogs stored as Jupyter notebooks, and convert them to and from LLM chat histories"
readmeQualityOk: true
url: "https://github.com/AnswerDotAI/aidialog"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [70, 30]
stars: 8
forks: 0
openIssues: 0
closedIssues: 47
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-07-23T08:30:40Z"
lastCommitAt: "2026-10-29T12:25:07Z"
lastReleaseAt: "2026-08-06T06:25:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 59
maintainers: ["jph00", "KeremTurgutlu", "PiotrCzapla"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1309710150/87af603c-20ac-425d-8e7a-073211359648"
---

# aidialog

`aidialog` provides the [`Dialog`](https://AnswerDotAI.github.io/aidialog/dialog.html#dialog)/[`Message`](https://AnswerDotAI.github.io/aidialog/dialog.html#message) model used by solveit and the fastai AI tooling ecosystem. An AI dialog is a Jupyter notebook whose cells are messages: notes, runnable code, and prompts with replies. Four modules build on each other:

- `aidialog.msg_parts`: the canonical [`Msg`](https://AnswerDotAI.github.io/aidialog/msg_parts.html#msg)/[`Part`](https://AnswerDotAI.github.io/aidialog/msg_parts.html#part) chat message model and its wire text form
- `aidialog.dialog`: the core [`Dialog`](https://AnswerDotAI.github.io/aidialog/dialog.html#dialog)/[`Message`](https://AnswerDotAI.github.io/aidialog/dialog.html#message) model, including plain-text rendering of Jupyter outputs
- `aidialog.ipynb`: reading and writing dialogs as `.ipynb` files
- `aidialog.dlgskill`: search and editing tools for dialogs and notebooks, registered as a pyskill

[aihist](https://github.com/AnswerDotAI/aihist) converts between dialogs, chat histories and saved replies, and writes saved replies and dialogs as Markdown for display. It also builds a dialog’s model…
