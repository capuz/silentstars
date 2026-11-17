---
repo: "mwakidenis/Healthcare-Management-System"
name: "Healthcare-Management-System"
description: "A robust Healthcare Management System built with Java Swing, JDBC, and MySQL, featuring full CRUD modules for patients, doctors, and appointments. Implements DAO architecture, transaction management, multithreading for smooth UI, password hashing for security, and clean MVC-style separation for maintainable healthcare administration workflows."
readmeQualityOk: true
url: "https://github.com/mwakidenis/Healthcare-Management-System"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-14T07:29:24Z"
lastCommitAt: "2026-11-17T14:36:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8294f13d0c277307f9a9ac4c4a3e28af23759f5c70047f1a035c75a1460361f/mwakidenis/Healthcare-Management-System"
---

# 🏥 Online Healthcare Management System (Java Swing + MySQL)

**A desktop & optional web module** for hospital administration: patient registration, doctor management, appointment booking, and basic records.
Built with **Java Swing** (desktop UI), **JDBC / MySQL** (database), DAO pattern, transaction-handling, and GUI responsiveness (multithreading).

## ✨ Key Features

* **User Authentication** — Admin login with secure password hashing (bcrypt).
* **Admin Dashboard** — Central interface to manage doctors, patients, and appointments.
* **Patient Management** — Add / Edit / Delete patient profiles.
* **Doctor Management** — Add / Edit / Delete doctors, specializations.
* **Appointment Management** — Create / Update / Delete appointments, status tracking.
* **Search & Filtering** — Live search in tables (TableRowSorter).
* **Background Loading** — Multithreading used to load lists and refresh appointment data without freezing the UI.
* **Synchronization** — Critical sections and synchronized DAO operations to avoid concurrent write conflicts.
* **JDBC + Transactions** — PreparedStatements, proper commit/rollback, connection pooling-ready pattern.
* **Clean Architecture** — Model…
