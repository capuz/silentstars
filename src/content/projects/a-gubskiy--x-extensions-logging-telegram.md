---
repo: "a-gubskiy/X.Extensions.Logging.Telegram"
name: "X.Extensions.Logging.Telegram"
description: "Telegram logging provider"
readmeQualityOk: true
url: "https://github.com/a-gubskiy/X.Extensions.Logging.Telegram"
homepage: "https://nuget.org/packages/X.Extensions.Logging.Telegram"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["netcore", "logging", "telegram-bot", "aspnet", "aspnetcore"]
stars: 41
forks: 6
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2021-01-25T11:10:48Z"
lastCommitAt: "2026-10-29T21:24:51Z"
lastReleaseAt: "2026-10-29T21:25:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 58
maintainers: ["dependabot[bot]", "a-gubskiy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f420ffcffca63701ef37e52af7caa824a4376929c30514915a212746c74b22d/a-gubskiy/X.Extensions.Logging.Telegram"
fundingLinks: ["GITHUB:https://github.com/a-gubskiy", "BUY_ME_A_COFFEE:https://buymeacoffee.com/g.andrew", "CUSTOM:http://andrew.gubskiy.com/donate"]
---

# X.Extensions.Logging.Telegram

Telegram logging provider for `Microsoft.Extensions.Logging`. Receive important log messages directly on your phone or laptop.

```
dotnet add package X.Extensions.Logging.Telegram
```

Targets `netstandard2.0` and `net10.0`.

## Prepare Telegram bot and channel

1. [Create a Telegram bot](https://core.telegram.org/bots#how-do-i-create-a-bot) and copy its access token.
2. Add the bot to your channel or chat as an admin with permission to post messages.
3. Get the chat id. For a public channel you can use its name (`@channel_name`). For a private channel, forward any message from it to [@JsonDumpBot](https://t.me/jsondumpbot) to get the id.

## Configure in code

```csharp
var options = new TelegramLoggerOptions(LogLevel.Information)
{
    AccessToken = "1234567890:AAAaaAAaa_AaAAaa-AAaAAAaAAaAaAaAAAA",
    ChatId = "-0000000000000",
    FormatterConfiguration = new FormatterConfiguration
    {
        ReadableApplicationName = "Human Readable Project Name",
        UseEmoji = true,
        IncludeException = true
    }
};

builder.Logging
    .ClearProviders()
    .AddTelegram(options)
    .AddConsole();
```

Or with a delegate:

```csharp…
