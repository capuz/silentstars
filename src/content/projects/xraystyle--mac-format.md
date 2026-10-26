---
repo: "xraystyle/mac_format"
name: "mac_format"
description: "OS X app to quickly look up vendor information and translate MAC address into various vendor formats."
readmeQualityOk: true
url: "https://github.com/xraystyle/mac_format"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2016-04-28T00:56:12Z"
lastCommitAt: "2026-10-26T18:06:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 44
maintainers: ["xraystyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b6aacadf7625534d9e297e9ea521814f59828dcc456f72c246db6bf86490d8/xraystyle/mac_format"
---

MAC Address Formatter And OUI Lookup Tool
------------------------

Mac Address Formatter is a Mac OS X app that will reformat MAC addresses to different vendor formats and perform OUI vendor lookups on MAC addresses in most any format.

It has two components, the CLI utility and the OS X contextual menu services.

To install MAC Formatter, paste the following command into a terminal window:
	
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/xraystyle/mac_format/master/install)"

If you've previously installed and want to update to the newest version, just re-run the above script again.

Installing this app requires typing your admin password to install the required Ruby Gem, `Docopt`.

To use the contextual menu services, highlight a MAC address anywhere and right-click. Under the `Services` submenu, click on the format you'd like to convert to. You'll see a notification that it's completed and the converted MAC address will be copied to your clipboard. If you select the Vendor Lookup service option, you'll receive a notification with the name of the vendor.

CLI Tool instructions:

The command name is `mac_format` and it's installed to `/usr/local/bin`.

	Usage:…
