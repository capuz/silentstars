---
repo: "johnmcgovern/ansible-splunk-base"
name: "ansible-splunk-base"
description: "This Ansible role that installs or upgrades a bare Splunk instance of a specified version with either systemd (Workload Management supported) or initd for process management. "
readmeQualityOk: true
url: "https://github.com/johnmcgovern/ansible-splunk-base"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [90]
stars: 19
forks: 19
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2019-02-06T06:36:09Z"
lastCommitAt: "2026-08-19T04:07:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 68
undervaluedScore: 53
maintainers: ["johnmcgovern"]
openGraphImageUrl: "https://opengraph.githubassets.com/71da1397e04e26bd484c273ff4b269dab802f7594387c9711242b9e95264efc5/johnmcgovern/ansible-splunk-base"
---

# Ansible-Splunk-Base

This is an Ansible project that installs or upgrades Splunk to a specific version. It can also perform basic OS config (ulimits, THP disabled, hostname, etc.), ./splunk/etc/ backups, and SSL cert installation.

### Setup

1. Install Ansible
 
		- sudo apt-get install ansible (Ubuntu) 
		- brew install ansible (macOS)
		- pipx install ansible-core (any platform, isolated)

2. git clone this project

		- git clone https://github.com/johnmcgovern/ansible-splunk-base.git
	
3. Navigate to project base directory

		- cd ./ansible-splunk-base		

3a. Install the required collections

	This project uses ansible.posix (firewalld) and community.general (archive)
	in addition to ansible.builtin. The full "ansible" package already bundles
	them; a minimal "ansible-core" install does not.

		- ansible-galaxy collection install -r requirements.yml

4. Copy hosts.sample to hosts

		- cp hosts.sample hosts

5. Edit hosts file to include desired hosts

		- vi hosts
	
6. Copy group_vars/all.sample to group_vars/all

		- cp group_vars/all.sample group_vars/all

7. Edit group_vars/all variables as appropriate for your environment

		- vi group_vars/all

### Selecting a Splunk…
