import { defineCollection, z } from 'astro:content';

const VitalStatus = z.enum(['thriving', 'quiet', 'at_risk', 'newborn', 'revived', 'archived']);
const Tag = z.enum(['solo_builder', 'needs_contributors', 'hidden_gem', 'legacy_hero']);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    repo: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    homepage: z.string().url().optional(),
    language: z.string().optional(),

    // GitHub metrics
    stars: z.number().int().nonnegative(),
    forks: z.number().int().nonnegative(),
    openIssues: z.number().int().nonnegative(),

    // Dates (ISO strings)
    createdAt: z.string(),
    lastCommitAt: z.string(),
    lastReleaseAt: z.string().optional(),

    // Vital state — exactly one, computed by priority
    status: VitalStatus,

    // Accumulative tags — a project can have several
    tags: z.array(Tag).default([]),

    // Scores
    vitalityScore: z.number().min(0).max(100),
    attentionGap: z.number().nonnegative(),

    // People
    maintainers: z.array(z.string()).default([]),

    // Revived metadata
    revivedAfterMonths: z.number().optional(),
    revivedDaysAgo: z.number().optional(),
  }),
});

export const collections = { projects };
