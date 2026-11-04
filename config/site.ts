/**
 * Site feature flags.
 *
 * cv.visible
 *   false → the "Download CV" buttons are hidden AND private/cv.pdf is not
 *           published (so the file cannot be fetched directly either).
 *   true  → the buttons return and private/cv.pdf is published as /cv.pdf.
 *
 * Toggle this one value, then rebuild / redeploy.
 */
export const siteConfig = {
    cv: {
        visible: false,
    },
} as const
