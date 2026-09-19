---
repo: "Azure/repair-script-library"
name: "repair-script-library"
description: "Organize and archive known repair scripts to enable anyone to easily fix their machines. The scripts are made primarily to repair VMs on the cloud."
readmeQualityOk: true
url: "https://github.com/Azure/repair-script-library"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [99]
stars: 49
forks: 60
openIssues: 5
closedIssues: 11
watchers: 10
contributors: 2905
recentReleases: 0
createdAt: "2019-06-04T22:45:00Z"
lastCommitAt: "2026-09-19T01:35:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 59
maintainers: ["EdwinBernal1", "anmocanu", "rjmccallumbigl"]
openGraphImageUrl: "https://opengraph.githubassets.com/f274f4a4320009a095b096e841c2815c911c120b3548a81f582c8d7d16d90a42/Azure/repair-script-library"
---

# Repair Script Library

The Repair Script Library organizes and archives known Windows and Linux repair scripts to automate frequent fix scenarios.
Each repair script has a unique ID mapped on [map.json](https://github.com/Azure/repair-script-library/blob/master/map.json)

# Run Scripts on Azure VM via Azure CLI

1. Open [Azure Cloud Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview) (Or [install Azure CLI manually](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest))


2. Install the vm-repair extension
```
az extension add -n vm-repair
```

3. Run a script using its unique ID mapped on [map.json](https://github.com/Azure/repair-script-library/blob/master/map.json)
```
az vm repair run -g MyResourceGroup -n MyVM --run-id win-hello-world --verbose
```

## When the VM is not bootable

1. Create a repair VM to host the fix for a source VM's OS disk
```
az vm repair create -g MyResourceGroup -n MySourceVM --verbose
```

2. Run a script on the repair VM to fix the attached source VM's OS disk (Don't forget the --run-on-repair parameter)
```
az vm repair run -g MyResourceGroup -n MyVM --run-id…
