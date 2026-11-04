/**
 * Build a public asset URL that respects the configured app baseURL.
 * The site is deployed under /jimov/ on GitHub Pages, so root-absolute
 * paths such as /avatar.webp resolve outside the deployment and 404.
 */
export const useAsset = (path: string) => {
    const config = useRuntimeConfig()
    const base = String(config.app.baseURL || "/").replace(/\/+$/, "")
    const clean = path.replace(/^\/+/, "")

    return `${base}/${clean}`
}
