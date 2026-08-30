---
repo: "YoRyan/turbogmailify"
name: "turbogmailify"
description: "A self-hosted replacement for Gmail's POP3 importer†. Now IMAP-capable, fast, and realtime."
readmeQualityOk: true
url: "https://github.com/YoRyan/turbogmailify"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["gmail", "gmail-api", "imapsync", "email-forwarding", "imap", "pop3"]
stars: 27
forks: 7
openIssues: 0
closedIssues: 6
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2024-04-20T05:52:09Z"
lastCommitAt: "2026-08-30T00:40:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 58
maintainers: ["YoRyan", "dependabot[bot]", "rootbeer"]
openGraphImageUrl: "https://opengraph.githubassets.com/322a27d4ba45cdc92c38b81692623907c327a5e469f7e94b3ae07631c26f53c0/YoRyan/turbogmailify"
---

# Turbogmailify

Turbogmailify is a self-hosted replacement for Gmail's built-in POP3 importer, which was sunset in January 2026. It collects emails from IMAP servers and imports them using Google's official [Gmail API](https://developers.google.com/workspace/gmail/api/guides). In addition to still being available, Turbogmailify is also much faster and more flexible compared to Google's former POP importer.

### Features and Limitations

✅ Speed: Turbogmailify polls your IMAP inbox every few minutes, as opposed to Google's POP importer, which was notorious for taking up to an hour between refreshes. On many IMAP servers, Turbogmailify can take advantage of the IDLE command to achieve instantaneous detection of new emails.

✅ Flexibility: You can configure Turbogmailify to check multiple IMAP accounts and apply custom labels to the emails it imports.

✅ Reliability: The final import step, expunging the original message from the IMAP inbox, is executed by Turbogmailify if and only if the message has been successfully imported into Gmail. Turbogmailify checks the Junk folder, too, so you won't lose any important messages that have been marked false positives.

⚒️ Classification:…
