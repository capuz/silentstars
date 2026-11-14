---
repo: "dimitriBouteille/wp-module-rest-api"
name: "wp-module-rest-api"
description: " 🚀 Declare WordPress REST API routes with PHP 8 attributes, in plain classes, instead of piling up register_rest_route() calls."
readmeQualityOk: true
url: "https://github.com/dimitriBouteille/wp-module-rest-api"
homepage: "https://packagist.org/packages/dbout/wp-module-rest-api"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["api", "rest-api", "wordpress", "php", "wp", "wordpress-development", "wordpress-api", "php-attributes"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2024-02-19T20:45:57Z"
lastCommitAt: "2026-11-14T10:49:44Z"
lastReleaseAt: "2026-11-05T22:32:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["dimitriBouteille"]
openGraphImageUrl: "https://opengraph.githubassets.com/651b10b16f7c7be8eaecd8be5cab2434483ee1503dc86dea5b7a948b35e29f46/dimitriBouteille/wp-module-rest-api"
---

# WordPress Rest API

Declare your [WordPress REST API](https://developer.wordpress.org/rest-api/) routes with **PHP 8 attributes**, in plain classes, instead of piling up `register_rest_route()` calls.

```php
#[Route('app/v1', '/documents/{id:\d+}')]
class DocumentController
{
    #[Action(Method::GET)]
    public function get(int $id): \WP_REST_Response
    {
        // $id comes straight from the URL, already cast to int
    }
}
```

## Why?

With native WordPress, every endpoint means a `register_rest_route()` call, a callback that reads `$request->get_param()` by hand, and error handling to write yourself. Once you have more than a few routes, it gets hard to keep organized.

**Before**, with native WordPress:

```php
add_action('rest_api_init', function () {
    register_rest_route('app/v1', '/documents/(?P<id>\d+)', [
        [
            'methods' => 'GET',
            'callback' => function (\WP_REST_Request $request) {
                $document = get_post((int) $request->get_param('id'));
                if (!$document instanceof \WP_Post) {
                    return new \WP_Error('not-found', 'Document not found.', ['status' => 404]);
                }…
