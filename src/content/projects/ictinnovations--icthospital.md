---
repo: "ictinnovations/ICTHospital"
name: "ICTHospital"
description: "Open source hospital management software with unified communications. Laravel 11, by ICT Innovations."
readmeQualityOk: true
url: "https://github.com/ictinnovations/ICTHospital"
homepage: "https://www.icthospital.com"
language: "CSS"
languages: ["CSS", "PHP"]
languagePcts: [39, 22]
topics: ["hospital-management-system", "healthcare", "hms", "open-source", "patient-management", "unified-communications", "hospital-management", "laravel", "php", "ictinnovations"]
stars: 19
forks: 16
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2020-07-08T12:54:01Z"
lastCommitAt: "2026-09-13T08:29:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 64
maintainers: ["ictvision"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff648083b9b6ddc5c6d03a457fc9ec4219b105b49454f37c4b712659abf62348/ictinnovations/ICTHospital"
---

# ICTHospital

Hospital management software with unified communications built in. ICTHospital handles
the day-to-day running of a hospital or clinic, and adds SMS, voice and video
consultation so patients and clinicians can reach each other without leaving the system.

Built and maintained by [ICT Vision](https://ict.vision), part of
[ICT Innovations](https://www.ictinnovations.com).

Product site: **[www.icthospital.com](https://www.icthospital.com)**

---

## Status: active rebuild

This repository holds a **rebuild in progress**, not a finished release.

ICTHospital previously ran on CodeIgniter 2.2.2, which reached end of life in 2017 and
will not run on PHP 8. Rather than patch an unsupported framework carrying patient data,
the application is being rebuilt on **Laravel 11**, sharing a foundation with our
[ICTSchool](https://github.com/ictinnovations/ICTSchool) platform.

**What works today**

- Full hospital data model: 50 tables covering patients, appointments, doctors, nurses,
  beds and wards, prescriptions, lab tests, diagnostic reports, pharmacy, payments,
  expenses and payroll
- Authentication, users, and a hospital role catalogue: 90 permissions across Admin,…
