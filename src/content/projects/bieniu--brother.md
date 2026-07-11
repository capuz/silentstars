---
repo: "bieniu/brother"
name: "brother"
description: "Python wrapper for getting data from Brother laser and inkjet printers via snmp"
readmeQualityOk: true
url: "https://github.com/bieniu/brother"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["brother", "snmp", "python", "laser-printer", "inkjet-printer", "printer", "hacktoberfest"]
stars: 25
forks: 10
openIssues: 0
closedIssues: 18
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2019-11-14T18:55:29Z"
lastCommitAt: "2026-07-11T05:56:41Z"
lastReleaseAt: "2020-02-28T16:17:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 64
maintainers: ["dependabot[bot]", "bieniu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e8945d17f6fe0f55c41a7ef5e5842561bc31b2e939bde9006460b38114d4ffc/bieniu/brother"
fundingLinks: ["CUSTOM:https://www.paypal.me/bieniu79", "CUSTOM:https://www.buymeacoffee.com/QnLdxeaqO", "CUSTOM:https://revolut.me/maciejbieniek"]
---

# brother

Python wrapper for getting data from Brother laser and inkjet printers via snmp

## How to use package

```py
import asyncio
import logging
from sys import argv

import pysnmp.hlapi.asyncio as hlapi

from brother import Brother, SnmpError, UnsupportedModelError

# printer IP address/hostname
HOST = "brother"
logging.basicConfig(level=logging.DEBUG)

async def main():
    host = argv[1] if len(argv) > 1 else HOST
    printer_type = argv[2] if len(argv) > 2 else "laser"
    # argument printer_type: laser - for laser printer
    #                        ink   - for inkjet printer

    external_snmp = False
    if len(argv) > 3 and argv[3] == "use_external_snmp":
        external_snmp = True

    if external_snmp:
        print("Using external SNMP engine")
        snmp_engine = hlapi.SnmpEngine()
    else:
        snmp_engine = None
    try:
        brother = await Brother.create(
            host, printer_type=printer_type, snmp_engine=snmp_engine
        )
        data = await brother.async_update()
    except (ConnectionError, SnmpError, UnsupportedModelError) as error:
        print(f"{error}")
        return

    brother.shutdown()

    print(f"Model:…
