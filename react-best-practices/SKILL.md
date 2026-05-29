---
name: react-best-practices
description: Comprehensive React/Next component creation guidance for reusable frontend work across projects. Use this skill whenever creating, refactoring, or reviewing React components, Next.js components, Shadcn dialogs/modals, TanStack Query useQuery hooks, query-driven UI, component composition, prop contracts, or when the user says "create a component", "create a dialog", "create a modal", "create a hook", "create a use query", "fetch data for", or "create a ruc". This skill intentionally consolidates component composition best practices, dialog component patterns, and useQuery hook patterns, so prefer it for frontend component work that touches any of those areas.
---

# React Component Best Practices

Use this skill as the entry point for React, Next.js, Shadcn UI, and TanStack Query component work across projects.

This skill consolidates three existing skills without dropping their content:

- `references/component-best-practices.md` preserves the original component composition, prop contract, server component, dialog composition, and file ordering rules.
- `references/component-dialog.md` preserves the original Shadcn dialog shell rules and templates.
- `references/use-query-hook.md` preserves the original TanStack `useQuery` hook rules and templates.

## How To Use This Skill

Always start with `references/component-best-practices.md` for any React/Next component task. It defines the baseline conventions for prop boundaries, TanStack Query-first composition, Server Component dynamic behavior, dialog composition, class names, spacing, and same-file component ordering.

Then load the focused reference when the task includes one of these areas:

- Dialogs, sheets or modals: read `references/component-dialog.md`.
- New data-fetching hooks, `useQuery`, route-backed fetches, cache helpers, or "ruc": read `references/use-query-hook.md`.
- Query-driven components that consume fetched data: read both `references/component-best-practices.md` and `references/use-query-hook.md`.
- Dialogs that fetch data or use query cache: read all three references.

## Decision Guide

When creating or refactoring a component, choose the smallest set of references that covers the task, but do not skip the baseline component best practices.

- If the work crosses file boundaries, pay special attention to prop contracts: prefer IDs, small values, flags, and callbacks over passing full query-derived objects.
- If a child component needs data that is already in TanStack Query cache, prefer calling the same query hook with identifiers and recomputing the selected/current entity locally.
- If the component is a Server Component that calls server-side libraries, SDKs, or database clients directly, add `export const dynamic = "force-dynamic"`.
- If a dialog is involved, keep distinct flows in distinct dialog components, prefer `DialogTrigger`, and keep footer actions in `DialogFooter`.
- If a new hook is needed, mirror the App Router route structure, use explicit query param typing, rename exported flags by entity, and expose cache helpers using the established `handle...` internal / `on...` exported naming.

## Working Pattern

1. Read the relevant existing code before creating new files. Match the target application's naming, folder placement, UI primitives, query keys, and API route conventions.
2. Decide whether the task is mostly component composition, dialog shell work, hook creation, or a combination.
3. Load the matching reference files and apply their rules directly.
4. Keep edits scoped. Do not introduce new abstractions unless they remove real duplication or match an existing local pattern.
5. After editing, check lints for the files you touched.

## Quick Checklist

- [ ] Did I read `references/component-best-practices.md`?
- [ ] If this creates or changes a dialog/modal, did I read `references/component-dialog.md`?
- [ ] If this creates or changes a `useQuery` hook, did I read `references/use-query-hook.md`?
- [ ] Are cross-file props small and stable instead of full query-derived objects?
- [ ] Can a child read the same TanStack Query cache by ID instead of receiving rich data?
- [ ] Does any Server Component with direct server-side data access declare `export const dynamic = "force-dynamic"`?
- [ ] Are distinct dialog flows split into distinct dialog components?
- [ ] Are dialog triggers and footer actions following the Shadcn structure?
- [ ] Are hook file paths, query params, `enabled`, cache helpers, and returned flag names following the app conventions?
