/**
 * Tracks which anchored section is currently in view and exposes a
 * smooth-scroll helper that respects reduced-motion preferences.
 */
export const useActiveSection = (ids: string[]) => {
    const active = ref(`#${ids[0]}`)
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const targets = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el))

        if (!targets.length) return

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        active.value = `#${entry.target.id}`
                    }
                })
            },
            { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
        )

        targets.forEach((target) => observer?.observe(target))
    })

    onBeforeUnmount(() => observer?.disconnect())

    const go = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
        active.value = `#${id}`
    }

    return { active, go }
}
