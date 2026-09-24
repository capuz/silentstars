---
repo: "ecosoft-frappe/erpnext_thailand"
name: "erpnext_thailand"
description: "ERPNext Thailand"
readmeQualityOk: true
url: "https://github.com/ecosoft-frappe/erpnext_thailand"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 23]
stars: 25
forks: 24
openIssues: 10
closedIssues: 23
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-12-22T03:35:12Z"
lastCommitAt: "2026-09-24T08:41:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 58
maintainers: ["newtratip", "Saralrat"]
openGraphImageUrl: "https://opengraph.githubassets.com/61f0fcbe8a42bcbebbb071a6d723e883dfab98770f037418cd987b31ef1060db/ecosoft-frappe/erpnext_thailand"
---

## ERPNext Thailand

Additional tax functionality to comply with Thailand Tax regulation.

1. **Tax (VAT)**:
   - **Item Tax**: Tax point occur when deliver product and invoice document is issued
   - **Service VAT**: Tax point occur on payment or whenever the tax invoice/receipt is issued  (on sales/purchase invioce, record GL as "Undued Tax" and move to "Tax" on payment / receipt of tax invoice)

2. **Withholding Tax and Withholding Tax Certificate**:
   - **Withholding Tax on Payment**: I.e., Withhold 3% for services and etc.
   - **Issue Withholding Tax Certificate**: Printout Withholding Tax Cert for the supplier being tax withheld

3. **Tax Reports for Revenue Department**:
   - **Purchase and Sales Tax Report**: Printout PDF or Excel for RD submission
   - **Support Tax 0%**: I.e., for export case 
   - **PND Report**: Printout PDF or Excel for RD submission

4. **Sales and Purchase Billing**:
   - As optional process, in case the customer require Billing process (ขั้นตอนการวางบิล)

5. **Deposit Invoicing**:
   - **Deposit Invoice Creation**: Allow creation of 1st invoice as Deposit Invoice
   - **Deposit Allocation**: Allow auto/manual deposit allocation on following…
