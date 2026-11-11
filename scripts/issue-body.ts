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
