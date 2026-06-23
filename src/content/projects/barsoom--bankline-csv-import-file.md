---
repo: "barsoom/bankline_csv_import_file"
name: "bankline_csv_import_file"
description: "Generate Bankline CSV import files."
url: "https://github.com/barsoom/bankline_csv_import_file"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2018-07-05T12:30:16Z"
lastCommitAt: "2026-06-23T06:37:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 32
maintainers: ["p-wall", "olleolleolle"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc421947fceccde8735253f5c7af43f9a5b70b52ad408bdedf4641db37bdc32/barsoom/bankline_csv_import_file"
---

# Bankline CSV import file

Generate Bankline CSV import files per <https://www.business.rbs.co.uk/content/dam/rbs_co_uk/Business_and_Content/PDFs/Bankline/Bankline-import-file-guide-CSV-RBS.pdf>, used e.g. by NatWest.

Not intended to be a complete implementation. We have implemented what we need; feel free to make PRs for further behaviour.

## Usage

Add any number of payments as described below, then generate the CSV content:

``` ruby
file = BanklineCsvImportFile.new

file.add_domestic_payment(…)
file.add_domestic_payment(…)
file.add_international_payment(…)

file.generate  # => "foo,bar,…"
```

At least with NatWest, it seems that the uploaded file must have a `.txt` extension, despite containing CSV.

### Domestic payment

All these arguments are required unless stated otherwise.

``` ruby
file = BanklineCsvImportFile.new

file.add_domestic_payment(
  payer_sort_code: "151000",
  payer_account_number: "31806542",
  amount: "123.45",                        # Strings and BigDecimal are allowed. (Floats are not advisable for money.) Rounded to 2 decimals.
  payment_date: Date.new(2018, 1, 1),      # See note below.
  beneficiary_sort_code: "151000",…
