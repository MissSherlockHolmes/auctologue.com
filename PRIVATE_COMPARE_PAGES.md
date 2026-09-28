# Private comparison pages (link-only, no codes)

This folder holds per-auction comparison pages that are emailed to auction
houses. They are **unlisted** (not in nav, not in sitemap, blocked for robots
via `robots.txt`) but open to anyone who has the link. No access codes.

## How to publish a new page

1. Drop the comparison HTML file here as `<slug>.html`
   (lowercase, hyphens only, e.g. `ayr-home-furnishing.html`).
2. Full standalone HTML documents work as-is; relative image paths should
   point at `assets/<slug>/`.
3. Put any images under `assets/<slug>/`.
4. Build (`npx @11ty/eleventy`) and deploy.

After deploy the link is:

> `https://auctologue.com/private/compare/<slug>/`

That is exactly what goes in the outreach email. The `pipeline.py publish`
command in the Auction_Review_Prep project automates steps 1-4.

## Notes

- Files here are excluded from collections and the sitemap; `robots.txt`
  disallows `/private/`, so they never appear in search results.
- "Private" means *unguessable URL*, not passworded. Do not put anything in
  these pages that must stay secret from anyone who obtains the link.
- To take a page down: delete the file and redeploy.
