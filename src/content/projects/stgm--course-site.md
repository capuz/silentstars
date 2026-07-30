---
repo: "stgm/course-site"
name: "course-site"
description: "Course website that serves Markdown from a git repository. A great tool for teachers who happen to think like programmers."
readmeQualityOk: true
url: "https://github.com/stgm/course-site"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [61, 29]
stars: 6
forks: 8
openIssues: 30
closedIssues: 89
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2012-12-20T09:30:43Z"
lastCommitAt: "2026-07-30T06:07:06Z"
lastReleaseAt: "2023-07-24T07:16:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 77
maintainers: ["stgm"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf41556fa1b956f8e8557a4b7d4847a842b695f18efb028915fab049fac52205/stgm/course-site"
---

Course website
==============

This site serves courses that reside in a git repo consisting of mostly Markdown-formatted text files and any other source files that should be served to the students. The code is targeted towards Rails 8.0.

How to install
--------------

Clone the application:

    git clone git@github.com:uva/course-site.git
    cd course-site
    bundle install
    rails db:setup

You can now claim the site by authenticating, and then load the initial content by specifiying a git repository URL that can be cloned.

Alternatively, you can clone the course contents yourself, into the `public/course` directory:

    cd public
    git clone <course-url> course

On the source format
--------------------

* Have a look at https://github.com/minprog/platforms for information on
  how to organize your course repository. At the very least, you need a
  `course.yml` and a `info` directory containing subpages for the homepage.

Organization
------------

* Put markdown files in a directory structure (extension `.md`). That
  structure will be exposed in the live website.

        ├── problems
        │   ├── acid
        │   │   ├── index.md
        │   │   └── submit.yml…
