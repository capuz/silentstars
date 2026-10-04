---
repo: "pushery/polyslug-for-laravel"
name: "polyslug-for-laravel"
description: "Polyslug gives Laravel Eloquent models multilingual, polymorphic, SEO-friendly URLs by combining editable localized slugs with stable opaque IDs, so routes stay resolvable after renames and can self-heal through canonical redirects with hreflang support built in."
readmeQualityOk: true
url: "https://github.com/pushery/polyslug-for-laravel"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["canonical-urls", "eloquent", "hreflang", "i18n", "laravel", "laravel-package", "localization", "model-routing", "multilanguage", "polymorphic"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-07-04T19:16:38Z"
lastCommitAt: "2026-10-04T10:01:33Z"
lastReleaseAt: "2026-07-26T05:52:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 44
maintainers: ["pushery"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1289454834/1f592920-3109-4984-8e16-49ca7d8df209"
---

# Polyslug

**Polymorphic, multilingual routable identity for Eloquent.** Pretty URLs that are
safe to expose, safe to rename, and correct across languages — with leak-free IDs,
self-healing canonical redirects, and hreflang built in.

```
/blog/laravel-routing-explained_aB3xK
      └──────── slug ─────────┘ └id─┘
   changeable, localized, SEO-friendly   stable, opaque, resolves the model
```

A slug should be free to change. A URL should never break. Those two goals usually
fight each other. Polyslug settles the fight by splitting a URL into two independent
parts — a **human-readable slug** (pretty, per-locale, editable) and a **stable
opaque identity** (an encoded token that resolves the model). Rename the slug all you
like: the identity still resolves, and old URLs redirect themselves to the new
canonical one.

---

## Install

```bash
composer require pushery/polyslug-for-laravel
php artisan migrate
```

Mark a model as sluggable, point a route at it, and you are done:

```php
#[Polyslug(source: 'title')]
class Page extends Model implements Sluggable
{
    use HasPolyslug;
}

Route::polyslug('/pages/{page}', [PageController::class, 'show'])->name('pages.show');
```

Rename the…
