---
repo: "IBM/Bank-of-Z"
name: "Bank-of-Z"
description: "Sample Z application showing how to work with mainframe software."
url: "https://github.com/IBM/Bank-of-Z"
language: "COBOL"
languages: ["COBOL"]
languagePcts: [71]
stars: 10
forks: 13
openIssues: 7
closedIssues: 4
watchers: 1
contributors: 37
recentReleases: 0
createdAt: "2026-03-12T15:28:00Z"
lastCommitAt: "2026-06-28T03:09:41Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 55
maintainers: ["jbyibm", "AndrewTwydell", "stewartfrancis"]
openGraphImageUrl: "https://opengraph.githubassets.com/d35dbaec53b231e46d749cb3d74b622fe7188fb69fa2f4a830f45cc74c9bb252/IBM/Bank-of-Z"
discussionCount: 1
---

# Bank of Z

## Overview

The Bank of Z provides a modern browser interface to manage a personal bank account. The application is hybrid – it drives IMS transactions that update a Db2 database for some customers and it drives CICS transactions that update the same Db2 database for other customers.

This hybrid application is the result of a merger of two banking systems into one. The Bank of Z UI routes requests based on customer number. In both cases, z/OS Connect enables the client to communicate with the transactional environment.

### Key Components

- **Bank of Z UI**: Modern browser-based interface for customer banking operations
- **z/OS Connect**: Enterprise API gateway enabling communication between the UI and mainframe transaction systems
- **CICS**: Transaction processing system for customers with IDs starting with 'C'
- **IMS TM**: Transaction Manager for customers with IDs starting with 'I'
- **Money and Account Management Db2 DB**: Shared database for account and transaction data
- **Money and Account Management IMS DB**: IMS database for account management
- **Account History Db2 DB**: Database storing historical account information
- **MQ**: Message queuing system…
