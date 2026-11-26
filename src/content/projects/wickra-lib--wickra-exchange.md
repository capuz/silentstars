---
repo: "wickra-lib/wickra-exchange"
name: "wickra-exchange"
description: "Streaming-native crypto-exchange connectivity built on the Wickra core: one typed, unified API over the ten largest exchanges, across 8 languages."
readmeQualityOk: true
url: "https://github.com/wickra-lib/wickra-exchange"
homepage: "https://wickra.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["algorithmic-trading", "binance", "bybit", "crypto-exchange", "cryptocurrency", "derivatives", "exchange-api", "fintech", "futures", "kraken"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-30T23:14:21Z"
lastCommitAt: "2026-11-26T15:23:47Z"
lastReleaseAt: "2026-10-28T05:45:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 58
maintainers: ["kingchenc", "dependabot[bot]", "wickra-lib-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3ee663eebb9d119f53b293e8d17ae14c3e405d21597682f10806ada6bdb7243/wickra-lib/wickra-exchange"
discussionCount: 0
---

---

**One typed API. Ten exchanges. Eight languages.** Streaming-native crypto-exchange
connectivity — market data *and* signed order execution — built on the
[Wickra](https://github.com/wickra-lib/wickra) core.

```rust
use wickra_exchange::{Exchange, ExchangeOptions, MarketData, OrderRequest, PaperExchange};

// Offline: fills are simulated, deterministically.
let mut ex = PaperExchange::new().with_balance("USDT", dec!(100_000));
ex.set_price(&market, dec!(20_000));

// Live: same trait, same calls, same order type — only the constructor differs.
let mut ex = Exchange::new("binance", creds, ExchangeOptions::testnet(MarketType::Spot))?;

let order = ex.place_order(&OrderRequest::market_buy(market, dec!(1)))?;
println!("{} filled at {:?}", order.filled_quantity, order.average_price);
```
