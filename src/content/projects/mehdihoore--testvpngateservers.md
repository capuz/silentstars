---
repo: "mehdihoore/TestVpnGateServers"
name: "TestVpnGateServers"
description: "The Python code retrieves a list of SSTP servers from the VpnGate website, tests each server, and sorts them based on the test results."
url: "https://github.com/mehdihoore/TestVpnGateServers"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
stars: 13
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-03T13:49:14Z"
lastCommitAt: "2026-06-28T10:58:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 67
maintainers: ["mehdihoor"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f5f0c6cc2adc25a5c6e542e83016e3e33b8905c254bda4c2f5e69668379bac9/mehdihoore/TestVpnGateServers"
---

Server Speed Test
This Python script performs a speed test on various servers and exports the results to Excel files. The script uses the Requests library to get the HTML content of a website that contains a table of servers and their associated information. Then, it uses BeautifulSoup to parse the HTML and extract the data from the table.

Once the data is extracted, the script creates a pandas DataFrame object from the table data and manipulates it to extract the relevant information. It then applies a ping test to each server in the DataFrame using the Test-NetConnection PowerShell cmdlet and the sstp-client tool.

Finally, the script exports the resulting DataFrame to two Excel files: one containing the original data and one containing the ping test results.

Requirements
To run this script, you will need:

Python 3.6 or higher
The Requests library
The pandas library
The BeautifulSoup library
The Test-NetConnection PowerShell cmdlet (included in Windows)
The sstp-client tool (available for download from https://sstp-client.sourceforge.net/)
Usage
To use this script:

Clone the repository to your local machine.
Install the required libraries.
Ensure that Test-NetConnection and…
