/**
 * issue-body.ts — fields of a submission issue (.github/ISSUE_TEMPLATE/submit-project.yml).
 * Used by process-submission.ts and, later, by bsky-queue-drain.ts to find the
 * submitter's email without storing it in the public repo.
 */

export function parseIssueBody(body: string): { repo: string; email: string; subscribe: boolean } {
  const extract = (label: string): string => {
    // GitHub YAML template renders as:  ### Label\n\nvalue\n\n### Next...
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const m = body.match(new RegExp(`###\\s+${escaped}\\s*\\n+([\\s\\S]*?)(?=\\n###|$)`));
    const value = m ? m[1].trim() : '';
    // Empty optional field: \n+ eats the blank lines, so the lazy group starts
    // right on the next "###" heading and the (?=\n###) lookahead can no longer
    // stop it — it swallows that whole section (issue #8: TO_EMAIL became the
    // "### Newsletter" block). A capture starting with ### means "field empty".
    return value.startsWith('###') ? '' : value;
  };
  return {
    repo:      extract('GitHub repo (owner/repo)'),
    email:     extract('Contact email (optional)'),
    subscribe: /- \[x\] Subscribe me to the SilentStars/i.test(body),
  };
}

// Headings of the issue templates. A body with one of them came through a form:
// the submit form goes through the normal flow, the others aren't submissions.
const TEMPLATE_HEADINGS = [
  '### GitHub repo (owner/repo)',     // submit-project.yml
  '### Repo to remove (owner/repo)',  // remove-project.yml
  '### What do you need?',            // other.yml
];

// owner/repo paths on github.com that aren't repositories.
const NON_REPO_OWNERS = new Set(['orgs', 'settings', 'sponsors', 'topics', 'features', 'marketplace', 'apps']);

/**
 * True for an issue that reads like a project submission but skipped the form
 * (issue #36): no template heading, and a link to a GitHub repo other than
 * SilentStars itself. process-submission.ts points those to the form.
 */
export function looksLikeOffFormSubmission(body: string): boolean {
  if (TEMPLATE_HEADINGS.some(h => body.includes(h))) return false;
  for (const m of body.matchAll(/(?<![\w.-])github\.com\/([\w.-]+)\/([\w.-]+)/gi)) {
    const owner = m[1]!.toLowerCase();
    const repo = m[2]!.toLowerCase();
    if (NON_REPO_OWNERS.has(owner)) continue;
    if (owner === 'capuz' && repo === 'silentstars') continue;
    return true;
  }
  return false;
}
