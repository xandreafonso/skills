---
source_skill: component-dialog
source_description: Creates a new Shadcn UI Dialog component following strict architecture for state management and structure. Use this skill whenever the user asks to "create a dialog", "create a modal", "create a new dialog component", or "build a dialog".
---

# Dialog Component Creation Guide

This skill generates custom React Modal/Dialog components using `shadcn/ui`. The generated Dialogs must strictly adhere to the following 3 core architectural patterns, separating the structural layout and state management from the internal content (like forms or mutations).

## 1. Signature and Properties (Props)

The component must accept specific context properties if necessary (e.g., IDs for the entity they act upon), but MUST always include the following standard control properties:

```typescript
type EntityNameDialogProps = {
    // Context properties (e.g., entityId: string)
    
    children?: React.ReactNode // The trigger element injected from the parent
    
    open?: boolean
    onOpenChange?: (open: boolean) => void
}
```

## 2. Internal State Control (Dual Synchronization)

The Dialog manages its own internal visibility state to remain self-contained, but it must report changes to the parent and listen to external changes from the parent. 
You MUST implement this exact `useState` and dual `useEffect` pattern:

```typescript
export function EntityNameDialog({ children: EntityNameDialogTrigger, open, onOpenChange }: EntityNameDialogProps) {
    const [dialogOpen, setDialogOpen] = useState(!!open)

    // Sync Inbound: Update local state when parent prop changes
    useEffect(() => {
        setDialogOpen(!!open)
    }, [open])

    // Sync Outbound: Alert parent when local state changes
    useEffect(() => {
        onOpenChange?.(dialogOpen)
    }, [dialogOpen])
    
    // ...
}
```

## 3. Shadcn UI Component Structure

The JSX return must wrap the content using purely `shadcn/ui` components (`Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`).

- **IMPORTANT 1:** The injected `children` prop MUST be aliased to `[EntityName]DialogTrigger` (e.g., `children: EntityNameDialogTrigger`) in the component signature to make it explicitly clear it functions as the trigger.
- **IMPORTANT 2:** Do NOT include a `<DialogTrigger>` wrapper inside the Dialog component itself! The injected children *will already be wrapped* in a `<DialogTrigger>` by the parent component that consumes this Dialog. The Dialog component simply renders `{EntityNameDialogTrigger}` directly inside the root `<Dialog>`.
- **IMPORTANT 3:** Secondary actions like "Back" (`Voltar`) and "Close" (`Fechar`) must be placed in the dialog footer (`DialogFooter`), not in the dialog body/header content flow.
- Do NOT include form schemas, `zod` validations, `tanstack/react-form`, or query mutations as strict rules of this skill. Focus only on the Dialog shell.

**Required Structural Template for the Dialog Component:**

```tsx
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "<components-alias>/ui/dialog"

// ... inside the component ...

return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {EntityNameDialogTrigger}
        
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    {/* Optional Icon */} 
                    Title of the Dialog
                </DialogTitle>
                <DialogDescription>
                    Description of what this dialog does.
                </DialogDescription>
            </DialogHeader>

            {/* ---> The actual content/form of the dialog goes here <--- */}
            
            <DialogFooter>
                {/* ---> Action buttons (Save, Cancel) go here <--- */}
            </DialogFooter>
        </DialogContent>
    </Dialog>
)
```

**Required Usage Pattern (How a Parent Component Should Use This Dialog):**

```tsx
import { DialogTrigger } from "<components-alias>/ui/dialog"

// ... in the parent component ...

<EntityNameDialog
    // Provide other props such as IDs
>
    <DialogTrigger asChild>
        <Button>Open Dialog</Button>
    </DialogTrigger>
</EntityNameDialog>
```
