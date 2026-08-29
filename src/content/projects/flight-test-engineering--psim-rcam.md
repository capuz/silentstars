---
repo: "flight-test-engineering/PSim-RCAM"
name: "PSim-RCAM"
description: "Python implementation of non-linear 6DOF GARTEUR RCAM aircraft flight dynamics model"
readmeQualityOk: true
url: "https://github.com/flight-test-engineering/PSim-RCAM"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["6dof", "aircraft", "aircraft-dynamics", "fdm", "flight-dynamics", "flight-simulation", "flightgear", "native-fdm", "non-linear", "non-linear-dynamics"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-09-27T09:47:57Z"
lastCommitAt: "2026-08-29T10:22:53Z"
lastReleaseAt: "2026-02-15T11:39:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["flight-test-engineering"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad3e54e6b17edae6e065655fecf8772fcb5d063e506bd62e703e7a59324d3e30/flight-test-engineering/PSim-RCAM"
---

# PSim-RCAM
Welcome to PSim-RCAM - short for Python Simulation - Research Civil Aircraft Model!

This is a Python implementation of the non-linear flight dynamics model published by:  
Group for Aeronautical Research and Technology Europe (GARTEUR) - [Research Civil Aircraft Model (RCAM) (rev Jun 1995)](http://garteur.org/wp-content/reports/FM/FM_AG-08_TP-088-3.pdf)  
HOWEVER:  
    # a few equations and values are only available in the later RCAM revision (dated Feb 1997)  
    # the 1997 revision is not easy to find  
    # the values and equations from this reference were obtained from youtube videos listed below:  

The excellent tutorials by Christopher Lum (for Matlab/Simulink) were used as a guide:  
1 - [Equations/Modeling](https://www.youtube.com/watch?v=bFFAL9lI2IQ)  
2 - [Matlab implementation](https://www.youtube.com/watch?v=m5sEln5bWuM)  

In addition to what prof. Lum implements, the following features are added here:  
1 - Ground reactions (landing gear), to allow for takeoff and landing  
2 - Actuator dynamics  
3 - Turbofan engine deck (with parallel processing/multi-core), based on: [Turbofan…
