---
repo: "Bd-Mutant7/NDDA"
name: "NDDA"
description: "an application that scans a local area network (LAN) and displays all devices connected to the same network as the host machine."
url: "https://github.com/Bd-Mutant7/NDDA"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-26T18:45:29Z"
lastCommitAt: "2026-06-25T01:32:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 54
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d351de11e6cf9fb115d5f52c76557c501fee96c01015bdb2d33b9e019a8340e/Bd-Mutant7/NDDA"
---

### Network Device Discovery Application

## Objective
To design and implement a Python-based application that discovers devices on a local area network using ARP scanning and presents the results in a graphical interface.

## Features
- ARP-based network discovery
- Displays IP address, MAC address, hostname, and vendor
- Graphical User Interface (GUI)
- Export scan results to CSV
- Cross-platform support (Windows, Linux, macOS)

## Technologies Used
- Python
- Scapy
- Tkinter
- PyInstaller

## How It Works
The application sends ARP broadcast requests within a specified subnet. Devices that respond are identified as active hosts. MAC addresses are used to determine vendor information.

## Usage
1. Run the application as Administrator / sudo
2. Click "Scan Network"
3. View discovered devices
4. Export results to CSV if required

## Ethical Considerations
This tool is intended for educational purposes and must only be used on networks where the user has authorization.

## Author
[P_Kariuki007]
