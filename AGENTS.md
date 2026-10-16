<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Resolve legacy catalog image references through the project's asset-pointer registry, preserving custom uploads; old database asset IDs may no longer exist.
- Administrative writes require the encrypted server-verified admin session; public catalog access remains read-only.
- Declare public browser configuration types in an app-owned declaration file instead of editing generated integration modules.
- Mark fallback catalog data explicitly and preserve saved cart selections during fallback reads, because temporary outages must not erase customer choices.
- Keep existing procedure page addresses read-only in the admin editor, because cart selections and shared links depend on their stability.
- Keep upload validation shared between browser and server and send original images directly to private storage with admin-issued signed URLs, so size/type rules agree without routing large files through server functions.
- Use progressive scroll-reveal wrappers that leave content visible without JavaScript and honor reduced-motion preferences, so animations never block access to booking content.
- Keep hero photo scroll transforms isolated in HeroPhoto using Motion values and desktop-only CSS; this preserves mobile composition and avoids React renders or layout shifts on scroll.
