---
repo: "yegor256/glogin"
name: "glogin"
description: "Login/logout via GitHub OAuth for your Ruby web app"
readmeQualityOk: true
url: "https://github.com/yegor256/glogin"
homepage: "https://www.yegor256.com/2018/06/19/glogin.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["github", "ruby", "oauth2", "ruby-gem"]
stars: 13
forks: 2
openIssues: 4
closedIssues: 42
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2017-08-29T15:23:31Z"
lastCommitAt: "2026-09-15T05:57:47Z"
lastReleaseAt: "2018-06-22T10:42:14Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 70
maintainers: ["renovate[bot]", "rultor", "yegor256"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/101776289/c7793100-95ad-11e9-8283-025ccadf1f34"
---

# OAuth Login via GitHub Made Simple

This simple gem helps you enable login/logout through
[GitHub OAuth][doc]
for your web application. This is how it works with
[Sinatra](http://www.sinatrarb.com/),
but you can do something similar in any framework.

Read this blog post to get the idea:
[_Simplified GitHub Login for a Ruby Web App_][blog]

First, somewhere in the global space, before the app starts:

```ruby
require 'glogin'
configure do
  set :glogin, GLogin::Auth.new(
    # Make sure these values are coming from a secure
    # place and are not visible in the source code:
    client_id, client_secret,
    # This is what you will register in GitHub as an
    # authorization callback URL:
    'http://www.example.com/github-callback'
  )
end
```

Next, for all web pages we need to parse a cookie, if it exists,
and convert it into a user:

```ruby
require 'sinatra/cookies'
before '/*' do
  if cookies[:glogin]
    begin
      @user = GLogin::Cookie::Closed.new(
        cookies[:glogin],
        # This must be some long text to be used to
        # encrypt the value in the cookie.
        secret
      ).to_user
    rescue GLogin::Codec::DecodingError => _
      # Nothing happens…
