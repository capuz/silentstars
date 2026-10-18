---
repo: "IBM/cloud-pak-deployer"
name: "cloud-pak-deployer"
description: "Configuration-based installation of OpenShift and Cloud Pak for Data/Integration/Watson AIOps/Business Automation on various private and public cloud infrastructure providers. Deployment attempts to achieve the end-state defined in the configuration. If something fails along the way, you only need to restart the process to continue the deployment."
readmeQualityOk: true
url: "https://github.com/IBM/cloud-pak-deployer"
homepage: "https://ibm.github.io/cloud-pak-deployer/"
language: "Jinja"
languages: ["Jinja", "Shell", "Python"]
languagePcts: [54, 20, 20]
stars: 163
forks: 82
openIssues: 33
closedIssues: 615
watchers: 11
contributors: 42
recentReleases: 0
createdAt: "2022-05-31T09:10:30Z"
lastCommitAt: "2026-10-18T08:17:07Z"
lastReleaseAt: "2022-12-18T07:42:41Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 48
maintainers: ["fketelaars", "jandusek4"]
openGraphImageUrl: "https://opengraph.githubassets.com/025cd7f37ab4d56d8223e913094f02d603c501380252b33b59d6c45382eddc7a/IBM/cloud-pak-deployer"
---

# Cloud Pak Deployer

The intention of the Cloud Pak Deployer is to simplify the initial installation and also continuous management of OpenShift and the Cloud Paks on top of that, driven by automation. It will help you deploy (currently) Cloud Pak for Data on various Red Hat OpenShift and infrastructures such as IBM Cloud ROKS, Azure Red Hat OpenShift (ARO), Red Hat OpenShift on AWS (ROSA), VMWare vSphere and also on existing Red Hat OpenShift environments.

The Cloud Pak Deployer was created for a joint project with one of our key partners who need to fully automate the deployment of Cloud Pak for Data on IBM Cloud based on a configuration that is kept in a Git repository, and make changes to it via configuration changes, i.e. GitOps.

A couple of notes from the authors:
* If you find this repository useful, please **"Star"** it on GitHub to advertise it to a wider community
* If you have questions or problems, please open an issue in the GitHub repository
* Even better, if you find a defect and can resolve it, please fork the repository, fix it and send a pull request

> **DISCLAIMER** The scripts in this repository are provided **"as is"** and have been developed with several…
