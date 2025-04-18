---
title: Creating path aliases in Astro
tags: [astro, js]
published: 2025-02-06
---

Path aliases are used as a shorthand when importing files within Astro components. Typically, files are imported either
using absolute (`/src/components/welcome.astro`) or relateive (`../components/welcome.astro`) paths. Relative paths can
be hard to interpret in deeply nested directory hierachies or when moving files from one location to another. Absolute
paths are more robust but can be verbose, especially for referencing deeply nested files.

Aliases can be used to conveniently reference any location within the project tree. For example, an alias
`$controls` could be used as a shorthand for `/src/components/forms/controls` such that a custom input component could
be referenced as `$controls/CustomInput.astro` rather than `/src/components/forms/controls/CustomInput.astro`.

### /src/pages/index.astro
```astro
---
import CustomInput from "/src/components/forms/controls/CustomInput.astro"  // [!code --]
import CustomInput from "$controls/CustomInput.astro"                       // [!code ++]
---

<form>
  <CustomInput />
</form>
```

Aliases are defined in `tsconfig.json` under `compilerOptions.paths`:

### /tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {                                      // [!code ++]
    "baseUrl": "/",                                         // [!code ++]
    "paths": {                                              // [!code ++]
      "$/*": ["src/*"],                                     // [!code ++]
      "$controls/*": ["src/components/forms/controls/*"]    // [!code ++]
    }                                                       // [!code ++]
  }                                                         // [!code ++]
}
```

Note the `/*` after the alias which is required for it to function correctly. Aliases are relative to a base path so
`compilerOptions.baseUrl` needs to be specified in order to use aliases. Multiple aliases can be specified as needed. My preference is to just use a `$` alias to refer to the `src` directory as I usually have a fairly shallow directory
structure, but you can use whichever aliases work best for you. Once defined the aliases can be used anywhere files are imported such as js `import` statements, css `@import` directives or scss `@use` directives.

Path aliases can act as nice syntactic sugar to make code more concise and readable. They are easy to set up and use in
Astro with just a few configuration lines.
