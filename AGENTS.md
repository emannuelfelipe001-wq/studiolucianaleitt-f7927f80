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
