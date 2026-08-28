---
repo: "quentinsf/IMAPdedup"
name: "IMAPdedup"
description: "IMAP message de-duplicator"
readmeQualityOk: true
url: "https://github.com/quentinsf/IMAPdedup"
homepage: "https://quentinsf.com/software/imapdedup"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 377
forks: 62
openIssues: 6
closedIssues: 47
watchers: 22
contributors: 20
recentReleases: 0
createdAt: "2010-09-19T18:29:21Z"
lastCommitAt: "2026-08-28T14:36:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 24
maintainers: ["quentinsf"]
openGraphImageUrl: "https://opengraph.githubassets.com/2776b12b0d4e893bc1338eea606c12bf4f405fbfa5764f184d06885cdab76dfb/quentinsf/IMAPdedup"
---

# IMAPdedup
*A duplicate email message remover*

IMAPdedup is a command-line utility that looks for duplicate messages in a set of IMAP mailboxes and tidies up all but the first copy of any duplicates found.

To be more exact, it *marks* the second and later occurrences of a message as 'deleted' on the server.   Exactly what that does in your environment will depend on your mail server and your mail client.

Some mail clients will let you still view such messages *in situ*, so you can take a look at what's happened before 'compacting' the mailbox.  Sometimes deleted messages appear in a 'Trash' folder.  Sometimes they are hidden and can be displayed and un-deleted if wanted, until they are purged.

Whatever your system does, you will usually have the option to see what has been deleted, and to recover it if needed, using your email program, after running this script.  (If your server purges the deleted messages automatically, you may be able to prevent this with the `--no-close` option.)  There is also a 'dry-run' option, so you can check what might happen before doing anything scary.

## How it works

By default, IMAPdedup will simply look for messages with a duplicate…
