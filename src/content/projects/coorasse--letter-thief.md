---
repo: "coorasse/letter_thief"
name: "letter_thief"
description: "LetterThief allows your Ruby On Rails app to store sent emails in your database."
readmeQualityOk: true
url: "https://github.com/coorasse/letter_thief"
homepage: "https://github.com/coorasse/letter_thief"
language: "HTML"
languages: ["HTML", "Ruby"]
languagePcts: [52, 47]
topics: ["rails"]
stars: 62
forks: 5
openIssues: 5
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-03-22T20:41:31Z"
lastCommitAt: "2026-09-11T08:14:56Z"
lastReleaseAt: "2026-01-08T10:28:43Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 35
maintainers: ["dependabot[bot]", "coorasse", "wivern-co-uk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/953214820/1e1b65d0-56bb-4687-bd45-90013bcc236b"
---

# LetterThief

**A Rails engine to log email deliveries, visualize them in the Browser and, if you want, intercept them.**

This gem allows you to log on the database the emails sent by your application.

It provides an interface to visualize the emails directly in the Browser, and search them.

You can of course navigate and search your emails using ActiveRecord `LetterThief::EmailMessage` model and integrate it
other parts of your app.

> List of interecepted email

> Email preview

You can also use `Letter Thief` as a delivery method in your application as well.

Set `config.action_mailer.delivery_method = :letter_thief` to stop sending emails and have them only logged in your
database. That's particularly useful in development environments or staging/pre-production environments as well.

If you used `letter_opener` in the past you know how nice it is to have
the sent emails opened automatically in your Browser when working locally.
LetterThief supports this as well with the very same mechanism, but `launchy` is not a direct dependency.
If you add Launchy on your Gemfile, emails will be opened right away once sent.

Since emails are persisted on the Database it means you can…
