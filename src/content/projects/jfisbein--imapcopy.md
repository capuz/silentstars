---
repo: "jfisbein/imapcopy"
name: "imapcopy"
description: "Copy recursively all email messages and folders from 1 imap account to another"
readmeQualityOk: true
url: "https://github.com/jfisbein/imapcopy"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["email", "imap", "java", "imapcopy", "synchronization", "backup"]
stars: 14
forks: 4
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2013-11-25T20:07:22Z"
lastCommitAt: "2026-08-10T05:05:18Z"
lastReleaseAt: "2022-02-23T20:20:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 59
maintainers: ["jfisbein", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1085779afb1801664fc7ec20cf7912f759783322beb3d71f274e25f32751360/jfisbein/imapcopy"
---

imapcopy
========

Copy recursively all email messages and folders from one imap account to another

Usage Instructions
-------------------------

#### Run as a docker container: **(recommended)**

        docker run -it --name imapcopy jfisbein/imapcopy --source imap://peter:mypassword@foo.com --target imaps://peter%40gmail.com:myotherpasword@imap.gmail.com --fromDate 2018-02-01 --toDate 2019-01-01 --excluded Spam INBOX [Gmail] Spam Drafts Bin "Bart Simpson"        

#### Run as a command line tool:
* Download the application from the repository
* build de jar:

        mvn clean package
        
* Run the application:

        java -jar target/imapcopy-x.y.z.jar --source sourceImapAccount --target targetImapAccount --fromDate filterFromDate --toDate filterToDate --excluded [list of exlcuded folders]    
        (ex: java -jar target/imapcopy-1.1.0.jar --source imap://peter:mypassword@foo.com --target imaps://peter%40gmail.com:myotherpasword@imap.gmail.com --fromDate 2018-02-01 --toDate 2019-01-01 --excluded Spam INBOX [Gmail])

        
### Imap accounts url format

        {protocol}://[user:password@]{host}[:port]
        
Where 
* `protocol` can be `imap` or `imaps`
* `user`…
