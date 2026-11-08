---
repo: "XoifaiI/Ledger"
name: "Ledger"
description: "Lock free event sourced datastore for Roblox. State is a fold over validated ops, no session locks."
readmeQualityOk: true
url: "https://github.com/XoifaiI/Ledger"
homepage: "https://xoifaii.github.io/LedgerDocs/"
language: "Luau"
languages: ["Luau", "TLA"]
languagePcts: [78, 21]
topics: ["database", "distributed-systems", "luau", "luau-lang", "luau-language", "luau-module", "luau-strict", "roblox", "roblox-datastore", "roblox-development"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-07-27T16:54:18Z"
lastCommitAt: "2026-11-08T10:41:40Z"
lastReleaseAt: "2026-10-12T12:47:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 58
maintainers: ["XoifaiI"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc5572c13510f1b832c7bf593e4d7cb982403c47e5df87e8d732462190003d1/XoifaiI/Ledger"
---

# Ledger

## What is this?

A datastore library for Roblox with no session locks. You never write state. You write down
the change you want, a function you own decides whether it is valid, and Ledger saves each
change exactly once.

```luau
type PlayerData = {
	Gold: number,
	Items: { [string]: number },
}

type PlayerOps = {
	SpendGold: { Amount: number },
}

local PlayerStore = Ledger.New<<PlayerData, PlayerOps>>({
	Name = "PlayerData",
	Keys = "Player",
	Default = { Gold = 100, Items = {} },
	MustExist = false,
	Erasable = true,
	Reducer = function(Data, Op)
		if Op.Kind == "SpendGold" then
			if Op.Amount > Data.Gold then
				return nil -- refused, on every server
			end
			local New = table.clone(Data)
			New.Gold -= Op.Amount
			return New
		end
		return nil
	end,
})

local Session = PlayerStore:Load(Player)
if Session then
	local Ok, Why = Session:Commit({ Kind = "SpendGold", Amount = 25 })
	if not Ok then
		warn("Couldn't spend gold:", Why)
	end
end
```

Two servers spend the same 100 gold at once: the reducer accepts one and refuses the other.
Every server agrees, every time, and every call says what happened.

A session lock serializes writers. A validating fold makes…
