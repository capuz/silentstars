---
repo: "transmitly/transmitly"
name: "transmitly"
description: "Model transactional email, SMS, push and voice as domain intents in .NET, then deliver through SMTP, SendGrid, Twilio, Firebase and more."
readmeQualityOk: true
url: "https://github.com/transmitly/transmitly"
homepage: "https://transmit.ly"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["communications", "push", "sms", "transactional-emails", "transmitly", "voice", "email", "notifications", "transactional-notifications", "communications-platform"]
stars: 25
forks: 2
openIssues: 2
closedIssues: 7
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2024-02-09T04:44:05Z"
lastCommitAt: "2026-08-18T04:09:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 38
maintainers: ["JeremyMelton"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/754945939/3085b823-f18e-469f-a399-1ce4bc83a953"
discussionCount: 2
---

Let your .NET application express it's intent to communicate without doing the work in your business logic.

Transmitly is an extensible transactional communications library for .NET. It keeps email, SMS, push, voice, message composition, provider configuration, and delivery handling out of your domain and application logic.

Your application expresses an intent:

```csharp
var result = await _communicationsClient.DispatchAsync(
    "WelcomeKit",
    newAccount.EmailAddress,
    new { firstName = newAccount.FirstName });
```

Elsewhere, Transmitly defines what `WelcomeKit` means: which channels are involved, how content is composed, which providers can deliver it, and how delivery events are handled.

```text
Application
    |
    | Dispatch("WelcomeKit")
    v
Pipeline: WelcomeKit
    |
    +-- Email ----> SMTP / SendGrid / Mailgun / Infobip
    +-- SMS ------> Twilio / Infobip
    +-- Push -----> Firebase
    +-- Voice ----> Twilio / Infobip
```

That separation is the point of Transmitly.

## When should I use it?

Transmitly is a good fit when:

- transactional communication is becoming infrastructure rather than a single `SendEmail(...)` call
- provider SDKs, templates,…
