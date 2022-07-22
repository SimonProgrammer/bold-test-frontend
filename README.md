# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Local deployment instructions

1. Install nvm in your SO. Instructions [here](https://github.com/nvm-sh/nvm) 
2. Create ``.env`` file in this directory with this content: ``VITE_API_URL=https://expressjs-mongoose-production-279b.up.railway.app``
3. Execute this command in this directory ``nvm use``
4. Execute this command for install dependencies ``npm i``
5. For development environment execute ``npm run dev``
6. For production environment execute ``npm run build``

## Missing unit tests 

The unit test can create with cypress for evaluate flows of this app web:

1. Change period filter
2. Change payment type
3. Display for mobile
4. Display for desktop
