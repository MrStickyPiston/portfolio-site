# MrStickyPiston portfolio
A modern portfolio site written in angular 17 with the use of angular material.
Before running `npx wrangler pages dev .` please create a .dev.vars file with the required secrets:
- CONTACT_WEBHOOK: a discord webhook
To build, run:
`npm run build && cp dist/portfolio/browser/404/index.html dist/portfolio/browser/404.html`