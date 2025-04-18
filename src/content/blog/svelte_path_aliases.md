---
title: Creating path aliases in SvelteKit
tags: [svelte, js]
published: 2025-02-07
---

Path aliases are used as a shorthand when importing files within Svelte components. Typically, files are imported either
using absolute (`/src/components/welcome.svelte`) or relateive (`../components/welcome.svelte`) paths. Relative paths
can be hard to interpret in deeply nested directory hierachies or when moving files from one location to another.
Absolute paths are more robust but can be verbose, especially for referencing deeply nested files.

Aliases can be used to conveniently reference any location within the project tree. For example, an alias
`$controls` could be used as a shorthand for `/src/components/forms/controls` such that a custom input component could
be referenced as `$controls/CustomInput.svelte` rather than `/src/components/forms/controls/CustomInput.svelte`.

### /src/routs/+page.svelte
```svelte
<script>
import CustomInput from "/src/components/forms/controls/CustomInput.svelte"  // [!code --]
import CustomInput from "$controls/CustomInput.svelte"                       // [!code ++]
</script>

<form>
  <CustomInput />
</form>
```

Aliases are defined in `vite.config.js`:

### /vite.config.js
```js
import { defineConfig } from "vite"
import { sveltekit } from '@sveltejs/kit/vite'

import path from "path"

export default defineConfig({
    plugins: [sveltekit()],
    resolve: {                                                                     // [!code ++]
        alias: {                                                                   // [!code ++]
            "$": path.resolve("src"),                                              // [!code ++]
            "$controls": path.resolve("src", "components", "forms", "controls")    // [!code ++]
        }                                                                          // [!code ++]
    }                                                                              // [!code ++]
})
```

Multiple aliases can be specified as needed. My preference is to just use a `$` alias to refer to the `src` directory as
I usually have a fairly shallow directory structure, but you can use whichever aliases work best for you. Once defined
the aliases can be used anywhere files are imported such as js `import` statements, css `@import`
directives or scss `@use` directives.

Path aliases can act as nice syntactic sugar to make code more concise and readable. They are easy to set up and use in
Svelte with just a few configuration lines.
