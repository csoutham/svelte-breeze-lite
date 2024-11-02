import '../css/app.css'
import './bootstrap'

import type { ResolvedComponent } from '@inertiajs/svelte'
import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { hydrate, mount } from 'svelte'

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./Pages/**/*.svelte')),
    setup({ el, App }) {
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el })
        } else {
            mount(App, { target: el })
        }
    },
})