# Public posts archive

A static, self-contained website recording public posts and replies attributed to the X account `@ShalnevaE`.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository.
2. Upload the **contents of this folder** to the repository root, not the containing folder or ZIP file.
3. In **Settings → Pages**, choose **Deploy from a branch**, set the branch to `main` and folder to `/ (root)`, then save.
4. Open the public Pages URL and confirm that all eight screenshot images load.

The site requires no build tools, API keys, domain name, external fonts or third-party scripts. It also works as a local HTML file, including text search and filtering.

## Contents

- `index.html` — public index with transcripts and screenshots
- `assets/site.css` — local styles
- `assets/site.js` — local search, filtering and sorting
- `assets/screenshots/` — eight re-encoded images, without embedded image metadata
- `posts.csv` — UTF-8 export of recorded entries
- `posts.json` — JSON export of the same entries
- `SHA256SUMS.txt` — SHA-256 hashes of site files for integrity checks

## Recording conventions

- The eight screenshot-backed entries reproduce the complete text visible in their screenshots, without spelling or case corrections.
- Three entries have only a public-copy excerpt. They are explicitly labeled **Text excerpt**.
- Original X URLs and public-copy/archived links are included where available.
- Dates are UTC, derived from the timestamp portion of the post's identifier; screenshots can show the viewer's local time.
- A third-party quotation without a direct capture was deliberately excluded from the published records.
- If adding an entry, preserve exact wording and distinguish excerpts from complete visible text. Update `index.html`, `posts.csv`, `posts.json`, and the checksums together.

## Privacy

The published files contain no author name, contact email, local file paths, analytics IDs, tracking scripts, or externally loaded resources. All screenshots have been re-encoded from pixel data, without PNG ancillary metadata. Source links and any usernames visible inside captured X posts refer to the *subject matter* of the archive, not to its publisher.

GitHub separately exposes the repository owner username and public commit author metadata, regardless of the contents of these files. Use a dedicated account and a pseudonymous GitHub `noreply` email for commits if publisher privacy is important.
