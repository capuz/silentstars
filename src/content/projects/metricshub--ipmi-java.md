---
repo: "MetricsHub/ipmi-java"
name: "ipmi-java"
description: "IPMI Java Client"
readmeQualityOk: true
url: "https://github.com/MetricsHub/ipmi-java"
homepage: "https://metricshub.org/ipmi-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["cli"]
stars: 9
forks: 5
openIssues: 21
closedIssues: 57
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2023-11-29T10:40:43Z"
lastCommitAt: "2026-10-12T11:14:46Z"
lastReleaseAt: "2025-11-20T18:42:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 79
maintainers: ["bertysentry", "NassimBtk", "skrcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/8928479ee959ea87541e3d37eba39af75c4230e476801e5cdb0ec627c0663f74/MetricsHub/ipmi-java"
---

# IPMI Java Client

This project is a fork of the excellent [IPMI Library for Java by Verax Systems](https://veraxsystems.com/ipmi-library-for-java/) ([see also](https://en.wikipedia.org/wiki/Verax_IPMI)). It is however not related to [another fork by rbuckland](https://github.com/rbuckland/ipmilib).

See **[Project Documentation](https://metricshub.org/ipmi-java)** and the [Javadoc](https://metricshub.org/ipmi-java/apidocs) for more information on how to use this library in your code.

The IPMI Java Client talks to the Baseboard Management Controller (BMC) of a server over IPMI 2.0 over LAN (RMCP+): it reads the chassis status, the Field Replaceable Units (FRUs) and the sensors of the SDR repository as typed Java objects (or as the text output that MetricsHub parses), opens Serial over LAN consoles, and sends any IPMI command (System Event Log, chassis control) in the same session. It requires Java 8 or later and has no dependency.

```java
try (IpmiClient bmc = IpmiClient.builder("bmc.example.com").credentials("monitor", password).build()) {
    ChassisStatus chassis = bmc.chassisStatus();
    System.out.println("Power is " + (chassis.powerOn() ? "on" : "off"));

    for (Sensor…
