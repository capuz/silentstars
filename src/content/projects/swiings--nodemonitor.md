---
repo: "swiings/NodeMonitor"
name: "NodeMonitor"
description: "Meshtastic Node Monitor and analyzer tool"
readmeQualityOk: true
url: "https://github.com/swiings/NodeMonitor"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-06T21:49:13Z"
lastCommitAt: "2026-11-05T00:22:18Z"
lastReleaseAt: "2026-10-11T17:08:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["swiings"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1203253493/7c8f60be-bbd5-4181-8a3e-c7f3d0c25855"
---

NodeMonitor README (work in progress)

Main NodeMonitor Page 
Full Screen Map with Convex Hull and rare Airplane node in view

Traffic Detail card displayed 

Installation
Using a terminal window, from your projects folder, run the following command...
    git clone https://github.com/swiings/NodeMonitor

Git will create a subdirectory for NodeMonitor and download all the files. 

Look in the /projects/NodeMonitor/scripts folder for setup_pi.sh. 

    Execute /Projects/NodeMonitor/scripts/setup_pi.sh 

This will install all the requirements for the NodeMonitor server, the listener and other apps. It will fetch any missing libraries and display a verbose log. At the end of the install script, the Listener will be running. The setup log will have the URL to put in a browser to see the NodeMonitor screens.  The URL will be https://nodemonitor.local:5000 (from any device on the same network; accept the self-signed certificate warning).
The Pi’s own name also works: https://yourmachinename.local:5000
If you run more than one NodeMonitor Pi on the same network, give each its own name when installing, e.g. NM_MDNS_NAME=nodemonitor-car ./scripts/setup_pi.sh

NodeMonitor Technical Details…
