---
repo: "Kicksecure/usability-misc"
name: "usability-misc"
description: "Miscellaneous usability improvements for Kicksecure and derivatives"
readmeQualityOk: true
url: "https://github.com/Kicksecure/usability-misc"
homepage: "https://www.kicksecure.com/wiki/Documentation"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["configuration", "desktop", "kicksecure", "usability"]
stars: 9
forks: 11
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2014-09-25T21:56:34Z"
lastCommitAt: "2026-09-29T08:10:39Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 91
maintainers: ["adrelanos", "claude", "ArrayBolt3"]
openGraphImageUrl: "https://opengraph.githubassets.com/04622d60280a47fe0bbcac8756e869a4eae4359e5df689c4bbf5efe6aeb7bcd7/Kicksecure/usability-misc"
---

# Misc usability improvements #

Enables auto login for user `user` in `lightdm`.
`/etc/lightdm/lightdm.conf.d/30_autologin.conf`
https://www.kicksecure.com/wiki/Desktop#Disable_Autologin

Creates folders /home/user/Downloads and /home/user/Pictures.

Adds account "user" to group libvirt as well as to group kvm.

Ships a file /etc/sudoers.d/user-passwordless that contains comments and
"#user   ALL=(ALL:ALL) NOPASSWD:ALL". Lets account "user" easily run all
commands without password. Disabled (out commented) by default.

Simplifies running OpenVPN as unprivileged user.

Ships a FoxyProxy add-on configuration file for use with Tor Browser.

Sets mousepad as the default editor for environment variable VISUAL
is unset and if mousepad is installed.

Disable sudo default lecture.
/etc/sudoers.d/sudo-lecture-disable

Add pwfeedback to sudo Defaults so password asterisks are shown while typing.
/etc/sudoers.d/pwfeedback

qterminal:

Ships gsudoedit, a wrapper to run sudoedit with a graphical editor.

Bisq workaround "sudo mkdir -p /usr/share/desktop-directories" as per
https://github.com/bisq-network/bisq/issues/848

gpl_sources_download GPL'ed source code of all installed packages.
Used…
