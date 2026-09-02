---
repo: "pentiminax/ux-datatables"
name: "ux-datatables"
description: "UX DataTables is a Symfony bundle integrating the DataTables library in Symfony applications."
readmeQualityOk: true
url: "https://github.com/pentiminax/ux-datatables"
homepage: "https://pentiminax.github.io/ux-datatables/"
language: "PHP"
languages: ["PHP"]
languagePcts: [81]
topics: ["datatables", "symfony-bundle", "datatables-bundle", "php", "symfony-ux"]
stars: 77
forks: 13
openIssues: 12
closedIssues: 89
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2025-01-31T13:33:08Z"
lastCommitAt: "2026-09-02T08:03:07Z"
lastReleaseAt: "2025-04-22T21:49:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["auroraeosrose", "pentiminax", "tlemarie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cca7700a4360df59b57edf7df2165f86cf5360423d7f9670157fccf20afa029/pentiminax/ux-datatables"
---

# UX DataTables

UX DataTables is a Symfony bundle integrating the [DataTables][1]
library in Symfony applications.

[Video tutorial](https://youtu.be/qYHRXr_qdPY)

[1]: https://datatables.net

## Requirements
- PHP 8.3 or higher
- Symfony StimulusBundle (installed through Symfony UX)
- Composer

## Installation

Install the library via Composer:

```console
composer require pentiminax/ux-datatables
```

## Usage

### 1. Declare a DataTable

```php
use App\Entity\User;
use Pentiminax\UX\DataTables\Attribute\AsDataTable;
use Pentiminax\UX\DataTables\Column\BooleanColumn;
use Pentiminax\UX\DataTables\Column\DateColumn;
use Pentiminax\UX\DataTables\Column\MoneyColumn;
use Pentiminax\UX\DataTables\Column\NumberColumn;
use Pentiminax\UX\DataTables\Column\TextColumn;
use Pentiminax\UX\DataTables\Model\AbstractDataTable;

#[AsDataTable(User::class)]
final class UserDataTable extends AbstractDataTable
{
    public function configureColumns(): iterable
    {
        return [
            NumberColumn::new('id', 'ID'),
            TextColumn::new('firstName', 'First name'),
            TextColumn::new('email', 'Email'),
            DateColumn::new('createdAt', 'Created at'),
        ];
    }…
