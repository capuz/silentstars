---
repo: "CleasbyCode/jpws"
name: "jpws"
description: "JPG-PowerShell Polyglot Tool"
readmeQualityOk: true
url: "https://github.com/CleasbyCode/jpws"
language: "C"
languages: ["C"]
languagePcts: [75]
topics: ["hacking", "powershell", "script", "tweet", "twitter", "powershell-script", "pwsh", "pwsh-scripts", "x-twitter", "tweetable"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-15T23:51:45Z"
lastCommitAt: "2026-09-30T09:56:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 39
maintainers: ["CleasbyCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5c1978034ea81d372c62ace24b09ffb14a78bca2b2c3f3dde4e206a5d00a9b5/CleasbyCode/jpws"
---

# jpws

Embed a ***PowerShell*** script within a ***JPG*** image to create a postable ***JPG-PowerShell*** polyglot file.

**Credits:**
* Image "Rainbow Dragon" — [Duncan Crombie / @theartofweb](https://x.com/theartofweb)
* PowerShell "text-sine.ps1" — [Darren Shaw / @gierrofo](https://x.com/gierrofo)

## Usage (***Linux***)

```console

user1@linuxbox:~/Downloads/src$ sudo apt install libturbojpeg0-dev libjpeg-dev
user1@linuxbox:~/Downloads/src$ chmod +x compile_jpws.sh
user1@linuxbox:~/Downloads/src$ ./compile_jpws.sh
user1@linuxbox:~/Downloads/src$ Compilation successful. Executable 'jpws' created.
user1@linuxbox:~/Downloads/src$ sudo cp jpws /usr/bin
user1@linuxbox:~/Desktop$ jpws

Usage: jpws [-alt] <cover_image> <pwsh_script>
       jpws --info

user1@linuxbox:~/Desktop$ jpws dragon.jpg sinewave.ps1

Saved JPG-PowerShell polyglot image: jpws_10a2f7c934bd1.jpg (121098 bytes).

Complete!
```
https://github.com/user-attachments/assets/f5b87dbf-885e-4cb5-a70c-5879c82f7e20

## How It Works

*Note: When downloading images from ***X-Twitter***, always click the image in the post to ***FULLY EXPAND*** it before saving. This ensures you get the original size image with the embedded…
