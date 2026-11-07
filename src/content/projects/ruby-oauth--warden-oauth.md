---
repo: "ruby-oauth/warden_oauth"
name: "warden_oauth"
description: "OAuth Strategy generator for Warden Authentication Framework"
readmeQualityOk: true
url: "https://github.com/ruby-oauth/warden_oauth"
homepage: "https://github.com/ruby-oauth/warden_oauth"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [86]
stars: 59
forks: 13
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2009-09-03T02:04:13Z"
lastCommitAt: "2026-11-07T16:13:00Z"
lastReleaseAt: "2026-07-15T15:31:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 38
maintainers: ["pboling", "dependabot[bot]", "autobolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f2e991222cb8baffe04d031344050f8083fc8656dcff7bf6ad736c9b7915b3/ruby-oauth/warden_oauth"
fundingLinks: ["GITHUB:https://github.com/pboling", "BUY_ME_A_COFFEE:https://buymeacoffee.com/pboling", "ISSUEHUNT:https://issuehunt.io/r/pboling", "KO_FI:https://ko-fi.com/pboling", "LIBERAPAY:https://liberapay.com/pboling", "OPEN_COLLECTIVE:https://opencollective.com/ruby-oauth", "PATREON:https://patreon.com/galtzo", "POLAR:https://polar.sh/pboling", "THANKS_DEV:https://thanks.dev/u/gh/pboling", "TIDELIFT:https://tidelift.com/funding/github/rubygems/warden_oauth"]
---

# 🛡️ Warden::OAuth

`if ci_badges.map(&:color).detect { it != "green"}` ☝️ [let me know on Discord][✉️discord-invite] or [RubyForum][✉️ruby-forum], as I may have missed the notification.

---

`if ci_badges.map(&:color).all? { it == "green"}` 👇️ send money so I can do more of this. FLOSS maintenance is now my full-time job.

I've summarized my thoughts in [this blog post](https://dev.to/galtzo/hostile-takeover-of-rubygems-my-thoughts-5hlo).

## 🌻 Synopsis <a href="https://discord.gg/3qme4XHNKN"><img alt="Galtzo FLOSS Logo by Aboling0, CC BY-SA 4.0" src="https://logos.galtzo.com/assets/images/galtzo-floss/avatar-128px.svg" width="8%" align="right"/></a> <a href="https://ruby-toolbox.com"><img alt="ruby-lang Logo, Yukihiro Matsumoto, Ruby Visual Identity Team, CC BY-SA 2.5" src="https://logos.galtzo.com/assets/images/ruby-lang/avatar-128px.svg" width="8%" align="right"/></a>

`warden_oauth` adds OAuth authentication strategy helpers to the Warden authentication framework.
It lets a Rack application declare named OAuth services on `Warden::Manager`, then route requests through the generated Warden strategy for that service.

## 💡 Info you can shake a stick at

| Tokens to…
