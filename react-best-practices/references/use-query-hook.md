---
source_skill: use-query-hook
source_description: Creates a new robust TanStack useQuery hook for fetching data. Follows established patterns for data fetching, including URL parameter handling, cache fallbacks, flag renaming, and strict directory structure mirroring Next.js routes. Use this whenever the user asks to "create a hook", "create a use query", "fetch data for [entity]", or "create a ruc" (user jargon for hook).
---

# `useQuery` Hook Creation Guide

This skill generates custom React Hooks using `@tanstack/react-query` and `axios` for fetching application data. The generated hooks must strictly adhere to the following 5 core architectural patterns.

## 1. Directory Structure and Naming

Hooks MUST be saved in a specific directory structure that mimics the Next.js App Router parameters they consume.
- The directory is the entity name, followed by any parameter directories in brackets, and finally an `_hooks` directory.
- The file name is `use-query-{entity-name-kebab-case}.ts`.

**Examples:**
- A hook returning a list of `Products` without route parameters:
  `src/app/products/_hooks/use-query-products.ts`
- A hook returning a single `Product` by ID:
  `src/app/products/[id]/_hooks/use-query-product.ts`
- A hook returning a list of `Comments` inside a specific parent `Post`:
  `src/app/posts/[postId]/comments/_hooks/use-query-comments.ts`

## 2. Advanced URL Parameter Handling

Whenever the hook needs to send query string parameters to the API — regardless of whether it fetches a **list** or a **single record** — you MUST use the `options.query` object and the `queryParams()` helper described in this section.

This applies to:
- List hooks accepting filters, search terms, parent identifiers, etc.
- Singular hooks that identify the resource through query string (e.g. `/api/path?param=...`) instead of a path segment.

When creating a hook that accepts query parameters through the `options.query` object, you MUST adhere to the following strict rules:

1. **Explicit Typing:** NEVER use index signatures like `[key: string]: any` in the query object. All supported parameters MUST be explicitly defined in the hook's signature to ensure type safety.
2. **Kebab-Case Naming:** Query parameter keys MUST use kebab-case (e.g., `"parent-folder"`) to match URL search parameter standards in the project.
3. **Identifier Suffix Omission:** Omit the "id" suffix for identifier parameters. For example, use `category` instead of `"category-id"`.

Handle array types explicitly by appending multiple identical keys to the URL search params.

**Implementation:**
```typescript
const queryParams = () => {
    const searchParams = new URLSearchParams()
    if (options?.query) {
        Object.entries(options.query).forEach(([key, value]) => {
            if (value) {
                if (Array.isArray(value)) {
                    value.forEach(v => searchParams.append(key, v))
                } else {
                    searchParams.append(key, `${value}`)
                }
            }
        })
    }
    // ... handle pagination similarly
    return searchParams.toString()
}
```

## 3. Refined Execution Control (`enabled`)

List and singular hooks follow the **same** rule: always honor `options?.enabled !== false` and combine it with any required identifier guards (path ID or required query parameter). Accept `enabled?: boolean` in the `options` argument so consumers can defer execution.

Examples:
- **No required identifier:**
  `enabled: options?.enabled !== false`

- **Required path ID:**
  `enabled: !!id && options?.enabled !== false`

- **Required query identifier:**
  `enabled: !!options?.query?.[identifier] && options?.enabled !== false`

## 4. Cache Manipulation Functions

When exposing manual cache update functions using `queryClient.setQueryData`, always validate if `oldData` exists before merging. There are two types of cache functions, and their names MUST follow the patterns below using the PascalCase entity name.

**Naming convention:** Define the function internally with the `handle` prefix and expose it in the return object with the `on` prefix:
- Internal: `handleChangeQueryData[EntityName]` / `handleChangeQueryItem[EntityName]`
- Exported (in return): `onChangeQueryData[EntityName]` / `onChangeQueryItem[EntityName]`

### `onChangeQueryData[EntityName]` — Replaces the entire cached data

Available for **both singular records and lists**. Replaces the full cached value.

- **Singular Records:**
```typescript
const handleChangeQueryDataProduct = (updatedProduct: Partial<Product>) => {
    queryClient.setQueryData<Product>(queryProductKey(id ?? ""), (oldData) => {
        if (!oldData) return updatedProduct as Product
        return { ...oldData, ...updatedProduct }
    })
}

return {
    // ...
    onChangeQueryDataProduct: handleChangeQueryDataProduct,
}
```

- **Lists:**
```typescript
const handleChangeQueryDataProducts = (updatedProducts: Product[]) => {
    queryClient.setQueryData<ProductList>(queryProductsKey(queryParams()), (oldData) => {
        if (!oldData) return oldData
        return { ...oldData, items: updatedProducts }
    })
}

return {
    // ...
    onChangeQueryDataProducts: handleChangeQueryDataProducts,
}
```

### `onChangeQueryItem[EntityName]` — Updates a single item within a list

Available **only for lists**. Updates one specific item inside the cached array by matching its `id`.

```typescript
const handleChangeQueryItemProduct = (updatedProduct: Partial<Product>) => {
    queryClient.setQueryData<ProductList>(queryProductsKey(queryParams()), (oldData) => {
        if (!oldData) return oldData
        return {
            ...oldData,
            items: oldData.items.map(item =>
                item.id === updatedProduct.id ? { ...item, ...updatedProduct } : item
            )
        }
    })
}

return {
    // ...
    onChangeQueryItemProduct: handleChangeQueryItemProduct,
}
```

## 5. Renaming Exported Flags

Deconstruct the return of `useQuery` and explicitly rename its flags to include the entity name. Do NOT return raw generic names like `data` or `isLoading`.

**Required mapping:**
- `data` -> `[entityName]`
- `isPending` -> `is[EntityName]Pending`
- `isLoading` -> `is[EntityName]Loading`
- `error` -> `[entityName]Error`
- `refetch` -> `refetch[EntityName]` (if exported)
- `isFetched` -> `is[EntityName]Fetched` (if exported)
- Cache: `onChangeQueryData[EntityName]` (singular and lists)
- Cache: `onChangeQueryItem[EntityName]` (lists only)

---

## Output Template Structure

Always structure the final hook file like this:

```typescript
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

// 1. Define or import types (Type, List)

// 2. Export the Query Key factory function
export const query[Entity]Key = (queryParams?: string) => queryParams ? ["entity", queryParams] : ["entity"]

// 3. Export the Hook signature
export const useQuery[Entity] = (...) => {
    const queryClient = useQueryClient()

    // Whenever the hook uses query string parameters (list or singular), define queryParams here
    const queryParams = () => {
        const searchParams = new URLSearchParams()
        
        if (options?.query) {
            Object.entries(options.query).forEach(([key, value]) => {
                if (value) {
                    if (Array.isArray(value)) {
                        value.forEach(v => searchParams.append(key, v))
                    } else {
                        searchParams.append(key, `${value}`)
                    }
                }
            })
        }

        if (options?.pagination) {
            // ...
        }
        return searchParams.toString()
    }

    const {
        data: [entity],
        isPending: is[Entity]Pending,
        // ... rename other flags
    } = useQuery({
        queryKey: query[Entity]Key(queryParams()),
        queryFn: async () => {
            // direct axios.get call returning response.data
            // response = await axios.get<List>(`/api/entities${searchParams.size > 0 ? "?" + searchParams.toString() : ""}`)
        },
        enabled: ... // strict boolean protections
    })

    // 4. Cache manipulation functions (onChangeQueryData / onChangeQueryItem)

    // 5. Return renamed flags and functions
    return {
        // ...
    }
}
```
