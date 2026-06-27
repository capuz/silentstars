---
repo: "DataTalksClub/course-management-platform"
name: "course-management-platform"
description: "Django-based course management platform for Zoomcamps "
url: "https://github.com/DataTalksClub/course-management-platform"
homepage: "https://courses.datatalks.club/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 82
forks: 35
openIssues: 10
closedIssues: 133
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2023-04-24T17:16:21Z"
lastCommitAt: "2026-06-27T00:49:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 54
maintainers: ["alexeygrigorev", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d0c26df53ea894bbd4d808f77c377485cb383b8db0f427ba5624426eaacea3f/DataTalksClub/course-management-platform"
---

# Course Management System

A Django-based web application for managing and participating in
DataTalks.Club courses.

The platform supports course administration, homework and project
submissions, peer review workflows, course leaderboards, and API access
to course data.

## Features

- User authentication: registration and login for students and instructors.
- Course management: instructors can create and manage courses.
- Homework and projects: students can submit homework and projects.
- Peer reviews: students can evaluate project submissions from their peers.
- Leaderboard: course rankings based on submitted work and scores.
- API access: authenticated endpoints for course, homework, project, graduate,
  certificate, and OpenAPI data.
- Health check: a public endpoint for service monitoring.

## Project Structure

```text
├── accounts/             # User accounts and authentication
├── api/                  # OpenAPI schema and API tests
├── cadmin/               # Custom admin views
├── course_management/    # Django project settings and root configuration
├── courses/              # Course, homework, project, and review logic
├── data/                 # Public and…
