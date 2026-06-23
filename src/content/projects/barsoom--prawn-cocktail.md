---
repo: "barsoom/prawn_cocktail"
name: "prawn_cocktail"
description: "Simple documents, templates and helpers on top of Prawn."
url: "https://github.com/barsoom/prawn_cocktail"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 16
forks: 3
openIssues: 0
closedIssues: 2
watchers: 13
contributors: 7
recentReleases: 0
createdAt: "2013-02-17T21:15:46Z"
lastCommitAt: "2026-06-23T06:38:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 34
maintainers: ["p-wall"]
openGraphImageUrl: "https://opengraph.githubassets.com/f73021284373151ceffa4989ad6d0b530c48ad9e065ee43d1024db5cc7240c40/barsoom/prawn_cocktail"
---

# PrawnCocktail

Simple documents, templates and helpers on top of Prawn.

Because writing Prawn documents PHP 4 style is no fun.

If you're using this with Ruby on Rails, get [`PrawnCocktailRails`](http://github.com/barsoom/prawn_cocktail_rails).

![](http://upload.wikimedia.org/wikipedia/commons/f/f8/Cocktail_1_bg_060702.jpg)

## Usage

### Configuration

You can change where PrawnCocktail looks for its templates. This is the default (suitable for Ruby on Rails):

``` ruby
PrawnCocktail.template_root = "app/views/documents"
```

### Document

The document class provides a data hash for the template, and optionally a filename:

``` ruby
class InvoiceDocument < PrawnCocktail::Document
  def initialize(invoice)
    @invoice = invoice
  end

  def filename
    "invoice_#{@invoice.id}.pdf"
  end

  private

  def data
    {
      number: @invoice.id,
      amount: @invoice.amount,
      customer: { name: @invoice.customer_name }
    }
  end
end
```

In Ruby on Rails, we suggest putting this in `app/documents/invoice_document.rb`. But anywhere is fine as long as the file is loaded, automatically or otherwise.

The document has `render` and `render_file(name)` methods, just like…
