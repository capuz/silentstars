---
repo: "morpheuslord/Startup-SBOM"
name: "Startup-SBOM"
description: "A tool to reverse engineer and inspect the RPM and APT databases to list all the packages along with executables, service, versions and CVE."
readmeQualityOk: true
url: "https://github.com/morpheuslord/Startup-SBOM"
homepage: "https://morpheuslord.github.io/Startup-SBOM/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["linux", "reverse-engineering", "sbom", "sbom-tool", "startup", "startup-script", "apt-packages", "linux-app", "package-resolver", "rpm-packa"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2024-03-31T11:53:02Z"
lastCommitAt: "2026-11-05T11:24:14Z"
lastReleaseAt: "2026-11-05T11:26:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 74
maintainers: ["morpheuslord", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c467163adfb52a4b54e1e61de809094e98bb14e736857233a54b7104d8bb319a/morpheuslord/Startup-SBOM"
discussionCount: 1
---

Startup-SBOM statically analyses a Linux root filesystem, container or image and
answers three questions most SBOM tools can't:

1. **Vulnerability → threat.** Not "openssl has 14 CVEs", but *"an unauthenticated
   remote attacker who can reach TCP/22 could exploit CVE-2024-6387 in
   openssh-server (sshd, `ssh.service`, enabled at boot, runs as root) to execute
   code as root — EPSS 0.94, known exploited. Fix: upgrade to 1:9.2p1-2+deb12u3."*
   Every finding is placed in context: is it reachable at boot, through which service,
   linked by which binary, what triggers it (boot, socket, timer, cron, D-Bus, udev
   device event, setuid binary, kernel) and who can fire that trigger, as which user,
   network-exposed, mitigated by which
   systemd hardening, mapped to MITRE ATT&CK, with a CISA SSVC decision
   (Track / Track\* / Attend / Act).
2. **Chained attacks.** A privilege-state attack graph
   (`remote → local:<user> → root → container escape → persistence`) built from
   vulnerabilities *and* misconfigurations (setuid/capability binaries, privileged
   containers, mounted Docker socket, kernel CVEs, writable units), pruned by
   hardening and ranked by likelihood × impact.
3.…
