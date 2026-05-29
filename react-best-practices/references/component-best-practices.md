---
source_skill: component-creation-best-practices
source_description: Defines component creation best practices, especially prop design and TanStack Query cache usage. Use when creating, refactoring, or reviewing React/Next components, component composition, prop contracts, or query-driven UI.
---

# Component Creation Best Practices

Use these rules whenever creating or refactoring frontend components in a React/Next project.

## 1) Prop Contracts: keep cross-file props simple

- Prefer passing primitive/small props (`id`, `type`, flags, callbacks) between components in different files.
- Avoid passing complex query-derived objects (`items`, `records`, full entity payloads) across file boundaries when the child can fetch from `useQuery...` with the same key.
- Rationale: reduces prop drilling, shrinks component coupling, and leverages TanStack Query cache.

## 2) Exception: local support components can receive rich objects

- When helper/support components are declared in the **same file** and are not meant for reuse, passing richer objects is acceptable.
- This is encouraged for readability when it simplifies local composition.
- Keep this scoped to that file; do not export this coupling by default.

## 3) TanStack Query-first composition

- If parent and child need the same entity data, child can call the same `useQuery...` hook using identifiers (`entityId`, `accountId`, etc.) and rely on cache.
- Prefer selecting one item by `id` + discriminator (`itemType`, `entityType`, etc.) instead of passing full selected objects.
- Recompute current/latest entity inside the consumer component from query data.

## 4) Practical boundary guideline

- Container components: orchestration, routing params, high-level loading/error states.
- Child components in separate files: focused UI concerns + local query read when data already exists in cache.
- Use callbacks for user intent (`onSelect`, `onBack`) and keep payloads minimal.

## 5) Server Components with data access must force dynamic

- For Server Components that call server-side libraries directly (database clients, backend SDKs, service clients, etc.), declare:

```typescript
export const dynamic = "force-dynamic"
```

- Exception: components that receive route/query params (`params`, `searchParams`) usually already imply dynamic behavior.
- Recommended default anyway: keep `export const dynamic = "force-dynamic"` even in param-based components to avoid regressions when params are removed during refactors.

## 6) Dialog and UI composition conventions

- Do not reuse a single dialog for different user flows/stages. Use separate dialog components for distinct interaction moments.
- Open dialogs via `DialogTrigger` whenever possible, instead of manually orchestrating opening behavior through click handlers and ad-hoc state transitions.
- Evaluate whether a dialog body should be extracted to a dedicated same-file component. This is especially important when the dialog content needs loading branches/states.
- Avoid using paddings unless truly necessary. Prefer default spacing values from existing components/layout primitives.
- For conditional classes, prefer `cn` object notation (e.g. `cn("block", { "hidden": isHidden })`) instead of string interpolation patterns.

## 7) Component declaration order in same file

- When a file declares multiple components, the first declared component should be the main/root component for that file.
- Helper/support components that are only used by this main component should be declared after the main component.
- Keep this ordering consistent to improve discoverability and make file navigation faster.

## Quick checklist

- [ ] Is this prop crossing a file boundary?
- [ ] Am I passing a complex object that could be replaced by `id`/small payload?
- [ ] Can the child safely read the same TanStack Query key from cache?
- [ ] Is this a same-file helper component where richer props improve clarity?
- [ ] Does this Server Component call a database client, backend SDK, or another server-side library directly?
- [ ] If yes, did I add `export const dynamic = "force-dynamic"`?
- [ ] If this includes dialogs, are distinct flows split into distinct dialog components?
- [ ] If a dialog opens from UI actions, is it using `DialogTrigger`?
- [ ] Does dialog content with loading logic live in a dedicated body component?
- [ ] Did I avoid non-essential paddings and use `cn` object notation for conditionals?
- [ ] If the file has multiple components, is the main/root component declared first?
