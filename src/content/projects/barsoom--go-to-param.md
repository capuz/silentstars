---
repo: "barsoom/go_to_param"
name: "go_to_param"
description: "Rails \"go_to\" redirection param utilities."
url: "https://github.com/barsoom/go_to_param"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2013-03-24T18:36:13Z"
lastCommitAt: "2026-06-23T06:37:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 65
undervaluedScore: 32
maintainers: ["henrik", "p-wall", "olleolleolle"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc421947fceccde8735253f5c7af43f9a5b70b52ad408bdedf4641db37bdc32/barsoom/go_to_param"
---

# GoToParam

Small set of Rails "go_to" redirection parameter utilities.

E.g. to catch a requested path and redirect to it after logging in or signing up.

## Usage

Include in some suitable base controller:

``` ruby
class ApplicationController < ActionController::Base
  include GoToParam
end
```

Now your controllers and views get some methods.

### go_to_here_params

Put the current/requested path in a `{ go_to: "/the_path" }` parameter hash.

Perhaps from a controller:

``` ruby
class ApplicationController < ActionController::Base
  include GoToParam

  before_filter :ensure_authenticated

  private

  def ensure_authenticated
    unless authenticated?
      redirect_to login_path(go_to_here_params)
    end
  end
end
```

Or a view:

``` erb
<h1>Show item</h1>
<%= link_to("Edit item", edit_item_path(@item, go_to_here_params)) %>
```

This only picks up the requested path if it's a GET, since we can't redirect back to a non-GET later. Otherwise an empty hash is returned.

You can pass additional query parameters to include, which could be suitable if you want to trigger some action after redirecting:

``` erb
<%= link_to("Add item after logging in", login_path(@item,…
