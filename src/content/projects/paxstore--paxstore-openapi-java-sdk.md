---
repo: "PAXSTORE/paxstore-openapi-java-sdk"
name: "paxstore-openapi-java-sdk"
description: "Cloud open api SDK for customer system to synchronize related data"
readmeQualityOk: true
url: "https://github.com/PAXSTORE/paxstore-openapi-java-sdk"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "paxstore"]
stars: 35
forks: 35
openIssues: 6
closedIssues: 9
watchers: 12
contributors: 10
recentReleases: 1
createdAt: "2018-07-05T07:24:34Z"
lastCommitAt: "2026-07-10T07:00:34Z"
lastReleaseAt: "2026-06-29T08:55:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 54
maintainers: ["paxstore-support", "tunglee5420"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0656a478b2def01a0b48955fa4b1b29aa1eef05f0014d9b6e55e0a5da53ead/PAXSTORE/paxstore-openapi-java-sdk"
---

# PAXSTORE Open API Java SDK

<br/>
<br/>

## Security Announcement  
This Open API SDK depends on log4j-1.2.7. It won't affected by the vulnerability CVE-2021-44228. But a similar vulnerability(CVE-2021-4104) is found in log4j 1.2.x. If the developer is not using JMSAppender it won't affected. Also developer can remove JMSAppender using command(zip -q -d log4j-1.2.17.jar org/apache/log4j/net/JMSAppender.class). Below is the description about CVE-2021-44228.  

```  
JMSAppender in Log4j 1.2 is vulnerable to deserialization of untrusted data when the attacker has write access to the Log4j configuration. The attacker can provide TopicBindingName and TopicConnectionFactoryBindingName configurations causing JMSAppender to perform JNDI requests that result in remote code execution in a similar fashion to CVE-2021-44228. Note this issue only affects Log4j 1.2 when specifically configured to use JMSAppender, which is not the default. Apache Log4j 1.2 reached end of life in August 2015. Users should upgrade to Log4j 2 as it addresses numerous other issues from the previous versions.
```

The SDK is using slf4j as the log facade and the log4j as the log implementation. Developers can…
