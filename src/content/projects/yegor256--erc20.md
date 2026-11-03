---
repo: "yegor256/erc20"
name: "erc20"
description: "Ruby gem for ERC20 manipulations on Etherium network: check balance, send payment, watch incoming payments"
readmeQualityOk: true
url: "https://github.com/yegor256/erc20"
homepage: "https://rubygems.org/gems/erc20"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [92]
topics: ["cryptocurrency", "erc20", "etherium", "ruby", "ruby-gem", "usdt"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 60
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-01-31T18:32:42Z"
lastCommitAt: "2026-11-03T05:31:44Z"
lastReleaseAt: "2025-02-14T07:15:13Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 87
maintainers: ["yegor256", "renovate[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df4f811cd55b310df378b44691297a2924fca8c601aa7f43edf0073fb13e703/yegor256/erc20"
---

# Ethereum ERC20 Manipulations in Ruby

This small Ruby [gem](https://rubygems.org/gems/erc20)
makes manipulations with [Ethereum] [ERC20] tokens
as simple as possible, when you have a provider of
[JSON-RPC] and [WebSockets] Ethereum APIs, such as
[Infura], [GetBlock], or [Alchemy].

Install it like this:

```bash
gem install erc20
```

Or simply add this to your Gemfile:

```ruby
gem 'erc20'
```

Then, make an instance of the main class and use it to read
balances, send and receive payments:

```ruby
# Create a wallet:
require 'erc20'
w = ERC20::Wallet.new(
  contract: ERC20::Wallet.USDT, # hex of it
  host: 'mainnet.infura.io',
  http_path: '/v3/<your-infura-key>',
  ws_path: '/ws/v3/<your-infura-key>',
  attempts: 3, # try every endpoint up to 3 times, with backoff
  fallbacks: ['https://eth.drpc.org'], # alternative RPC endpoints to try
  log: $stdout
)

# Check how many ERC20 tokens are on the given address:
usdt = w.balance(address)

# Send a few ERC20 tokens to someone and get transaction hash:
hex = w.pay(private_key, to_address, amount)

# Stay waiting, and trigger the block when new ERC20 payments show up:
addresses = ['0x...', '0x...'] # only wait for payments to these…
