---
repo: "ComplyEaze/bridge"
name: "bridge"
description: "ComplyEaze Bridge is an open-source (Apache-2.0) TallyPrime MCP server for Claude Desktop, for CA firms and accountants. Reads the books on your own computer; prepares vouchers from bank statements as an import file. Posting is off by default; when on, you approve each voucher."
readmeQualityOk: true
url: "https://github.com/ComplyEaze/bridge"
homepage: "https://bridge.complyeaze.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["gst", "open-source", "react", "rust", "tally", "tauri", "typescript", "accounting", "claude", "india"]
stars: 35
forks: 3
openIssues: 129
closedIssues: 533
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-07-12T14:24:31Z"
lastCommitAt: "2026-11-02T16:52:37Z"
lastReleaseAt: "2026-10-27T12:10:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 47
maintainers: ["lamemustafa", "akshit-khandelwal47"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1298346634/8f5c643c-1479-413c-9e89-d4bdb24a61c2"
discussionCount: 2
---

# ComplyEaze Bridge: TallyPrime MCP server for Claude Desktop

ComplyEaze Bridge is an open-source (Apache-2.0) MCP server that connects
Claude Desktop to the TallyPrime (also written Tally Prime) running on your own
computer. It is built for chartered accountants, CA firms and accountants. It
reads your books; from a password-protected SBI, HDFC, Union Bank of India or
Bank of Baroda statement PDF it proposes Payment, Receipt and Contra vouchers, and once every
ledger name is exact and every question is answered it writes them to a file
that you import in TallyPrime yourself. What Claude reads from your books goes to your AI provider as part of
the chat. You can ask about the trial balance, outstanding receivables and
payables with ageing, ledger movement and vouchers, the purchase and sales
registers, the stock summary, and the Profit and Loss and Balance Sheet (a book
with stock items is read only when Tally's own closing stock closes every gap). It checks ledger
names before you post, and prepares Journal, Payment, Receipt and Contra
vouchers as an import file that you review and import into TallyPrime yourself.
Posting is off by default in a new install, so as installed it…
