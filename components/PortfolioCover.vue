<template lang="pug">
article.cover(:class="'cover--p' + project.pattern")
  .cover__frame
    span.cover__monogram(class="font-serif" aria-hidden="true") {{ project.monogram }}
    svg.cover__art(
      viewBox="0 0 480 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    )
      //- ink field: every pattern sits inside the same margin, stroke weight and opacity budget
      g.cover__field
        //- 1 — fine dot matrix fading toward the top-right corner
        g(v-if="project.pattern === 1" fill="currentColor")
          circle(
            v-for="(dot, i) in dotMatrix"
            :key="'dot-' + i"
            :cx="dot.cx"
            :cy="dot.cy"
            :opacity="dot.o"
            r="1.5"
          )
        //- 2 — concentric hairline arcs from the bottom-right corner
        g(v-if="project.pattern === 2" fill="none" stroke="currentColor" stroke-width="1")
          circle(
            v-for="(radius, i) in arcRadii"
            :key="'arc-' + i"
            cx="480"
            cy="300"
            :r="radius"
          )
        //- 3 — diagonal hairline field
        g(v-if="project.pattern === 3" fill="none" stroke="currentColor" stroke-width="1")
          line(
            v-for="(diagonal, i) in diagonalLines"
            :key="'diag-' + i"
            :x1="diagonal.x1"
            :y1="diagonal.y1"
            :x2="diagonal.x2"
            :y2="diagonal.y2"
          )
        //- 4 — modular grid, one cell carrying the pine accent
        g(v-if="project.pattern === 4" fill="none" stroke="currentColor" stroke-width="1")
          line(
            v-for="(x, i) in gridXs"
            :key="'gx-' + i"
            :x1="x"
            y1="28"
            :x2="x"
            y2="272"
          )
          line(
            v-for="(y, i) in gridYs"
            :key="'gy-' + i"
            x1="28"
            :y1="y"
            x2="452"
            :y2="y"
          )
        //- 5 — nested outlined rectangles, scaled about the centre
        g(v-if="project.pattern === 5" fill="none" stroke="currentColor" stroke-width="1")
          rect(
            v-for="(nested, i) in nestedRects"
            :key="'nest-' + i"
            :x="nested.x"
            :y="nested.y"
            :width="nested.w"
            :height="nested.h"
          )
        //- 6 — vertical hairlines of varying weight
        g(v-if="project.pattern === 6" fill="none" stroke="currentColor")
          line(
            v-for="(vertical, i) in verticalLines"
            :key="'vert-' + i"
            :x1="vertical.x"
            y1="28"
            :x2="vertical.x"
            y2="272"
            :stroke-width="vertical.w"
          )
      //- one quiet pine mark per cover, held outside the ink field so it keeps the pine token
      rect.cover__accent(
        :x="accent.x"
        :y="accent.y"
        :width="accent.w"
        :height="accent.h"
        stroke="none"
      )
    .cover__content
      .cover__meta
        span.cover__category(class="uppercase tracking-label text-muted") {{ categoryLabel }}
        span.cover__index(class="font-serif tabular-nums text-muted") {{ indexLabel }}
      .cover__foot
        h3.cover__title(class="font-serif") {{ project.name }}
        span.cover__rule(aria-hidden="true")
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
  /** 1-based display number, supplied by the parent. */
  index: number
}>()

/** Shared art margin inside the 480 × 300 (16:10) viewBox. */
const VB_W = 480
const VB_H = 300
const MARGIN = 28

const round = (value: number) => Math.round(value * 10) / 10

const categoryLabel = computed(() => props.project.category.toUpperCase())
const indexLabel = computed(() => String(props.index).padStart(2, '0'))

/** Pattern 1 — dot matrix that thins out toward the bottom-left (text) corner. */
const dotMatrix = (() => {
  const cols = 14
  const rows = 9
  const dots: Array<{ cx: number; cy: number; o: number }> = []
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const dx = (cols - 1 - col) / (cols - 1)
      const dy = row / (rows - 1)
      const distance = Math.min(1, Math.hypot(dx, dy) / Math.SQRT2)
      dots.push({
        cx: round(MARGIN + (col * (VB_W - MARGIN * 2)) / (cols - 1)),
        cy: round(MARGIN + (row * (VB_H - MARGIN * 2)) / (rows - 1)),
        o: Math.round((0.12 + 0.88 * (1 - distance) ** 1.7) * 100) / 100,
      })
    }
  }
  return dots
})()

/** Pattern 2 — concentric hairline arcs from the bottom-right corner. */
const arcRadii = Array.from({ length: 12 }, (_, i) => 38 + i * 34)

/** Pattern 3 — diagonal hairlines, clipped exactly to the shared art margin. */
const diagonalLines = (() => {
  const lines: Array<{ x1: number; y1: number; x2: number; y2: number }> = []
  for (let step = -232; step <= 416; step += 24) {
    const x1 = Math.max(MARGIN, MARGIN + step)
    const x2 = Math.min(VB_W - MARGIN, VB_H - MARGIN + step)
    if (x2 - x1 < 1) continue
    lines.push({
      x1: round(x1),
      y1: round(x1 - step),
      x2: round(x2),
      y2: round(x2 - step),
    })
  }
  return lines
})()

/** Pattern 4 — modular grid. */
const GRID_COLS = 7
const GRID_ROWS = 4
const gridXs = Array.from({ length: GRID_COLS + 1 }, (_, i) =>
  round(MARGIN + (i * (VB_W - MARGIN * 2)) / GRID_COLS),
)
const gridYs = Array.from({ length: GRID_ROWS + 1 }, (_, i) =>
  round(MARGIN + (i * (VB_H - MARGIN * 2)) / GRID_ROWS),
)

/** Pattern 5 — nested outlined rectangles, scaled proportionally about the centre. */
const nestedRects = (() => {
  const factors = [1, 0.78, 0.58, 0.4, 0.24]
  const halfW = (VB_W - MARGIN * 2) / 2
  const halfH = (VB_H - MARGIN * 2) / 2
  const centerX = VB_W / 2
  const centerY = VB_H / 2
  return factors.map((factor) => {
    const w = round(halfW * 2 * factor)
    const h = round(halfH * 2 * factor)
    return {
      x: round(centerX - w / 2),
      y: round(centerY - h / 2),
      w,
      h,
    }
  })
})()

/** Pattern 6 — vertical hairlines, weight rhythm fixed per line. */
const verticalLines = (() => {
  const weights = [0.75, 1, 1.5, 2, 1, 0.75, 1.25, 1, 2, 0.75, 1, 1.5, 0.75]
  const span = VB_W - MARGIN * 2
  return weights.map((w, i) => ({
    x: round(MARGIN + (i * span) / (weights.length - 1)),
    w,
  }))
})()

/**
 * Every cover carries exactly one small pine mark.
 * Pattern 4 lends the mark to one grid cell so the module reads as specified;
 * the other patterns place it in the same quiet spot of the art field.
 */
const accent = computed(() => {
  if (props.project.pattern === 4) {
    const cellW = (VB_W - MARGIN * 2) / GRID_COLS
    const cellH = (VB_H - MARGIN * 2) / GRID_ROWS
    const inset = 18
    return {
      x: round(MARGIN + 6 * cellW + inset),
      y: round(MARGIN + cellH + inset),
      w: round(cellW - inset * 2),
      h: round(cellH - inset * 2),
    }
  }
  return { x: 408, y: 122, w: 8, h: 8 }
})
</script>

<style scoped>
.cover {
  --art-o-base: 0.11;
  --art-o: var(--art-o-base);
  --frame-border: var(--line);
  --accent-opacity: 0;
  --accent-scale: 1;
  --accent-grow: 3.2;
  --lift: 0px;
  display: block;
  width: 100%;
  transform: translateY(var(--lift));
  transition: transform 0.3s var(--ease);
}

/* Per-pattern art weight: same family, tuned so each field reads at the same
   quiet density. Values stay inside the 6–14% ink budget, hover included. */
.cover--p1 {
  --art-o-base: 0.12;
}

.cover--p2 {
  --art-o-base: 0.1;
}

.cover--p3 {
  --art-o-base: 0.09;
}

.cover--p4 {
  --art-o-base: 0.11;
  --accent-opacity: 1;
  --accent-grow: 1.72;
}

.cover--p5 {
  --art-o-base: 0.105;
}

.cover--p6 {
  --art-o-base: 0.11;
}

.cover:hover,
:where(a:hover, a:focus-visible) .cover {
  --art-o: calc(var(--art-o-base) + 0.02);
  --frame-border: var(--ink);
  --accent-opacity: 1;
  --accent-scale: var(--accent-grow);
  --lift: -2px;
}

.cover__frame {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border: 1px solid var(--frame-border);
  background-color: var(--paper-2);
  container-type: inline-size;
  transition: border-color 0.3s var(--ease);
}

.cover__monogram {
  position: absolute;
  right: 0.04em;
  bottom: -0.05em;
  z-index: 0;
  font-size: 7rem;
  font-size: clamp(5.5rem, 26cqw, 9.5rem);
  line-height: 0.76;
  letter-spacing: -0.03em;
  color: var(--ink);
  opacity: 0.07;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

.cover__art {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  color: var(--ink);
  pointer-events: none;
}

.cover__art line,
.cover__art circle,
.cover__art rect {
  vector-effect: non-scaling-stroke;
}

/* The ink field keeps the 6–14% opacity budget; the pine mark is rendered
   outside it so the accent keeps the full pine token. */
.cover__field {
  opacity: var(--art-o);
  transition: opacity 0.3s var(--ease);
}

.cover__content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  gap: clamp(1.5rem, 7cqw, 2.75rem);
  padding: 1.25rem;
  padding: clamp(1rem, 5.8cqw, 1.75rem);
}

.cover__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.cover__category {
  font-size: 10.5px;
  font-size: clamp(10px, 2.5cqw, 11px);
  font-weight: 500;
  line-height: 1;
}

.cover__index {
  font-size: 12px;
  font-size: clamp(11px, 2.8cqw, 13px);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.cover__foot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cover__title {
  font-size: 1.65rem;
  font-size: clamp(1.35rem, 6.4cqw, 2.1rem);
  line-height: 1.12;
  letter-spacing: -0.015em;
  color: var(--ink);
  text-wrap: balance;
  max-width: 84%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-bottom: 0.1em;
}

.cover__rule {
  display: block;
  width: 72px;
  height: 1px;
  margin-top: 0.75rem;
  margin-top: clamp(0.6rem, 2.2cqw, 0.85rem);
  background-color: var(--ink);
  transform: scaleX(0.6667);
  transform-origin: left center;
  transition: transform 0.3s var(--ease);
}

.cover:hover .cover__rule,
:where(a:hover, a:focus-visible) .cover .cover__rule {
  transform: scaleX(1);
}

.cover__accent {
  fill: var(--pine);
  opacity: var(--accent-opacity);
  transform: scaleY(var(--accent-scale));
  transform-box: fill-box;
  transform-origin: center top;
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}

@media (prefers-reduced-motion: reduce) {
  .cover {
    transform: none;
    transition: none;
  }

  .cover__frame,
  .cover__field,
  .cover__rule,
  .cover__accent {
    transition: none;
  }

  .cover__accent {
    transform: none;
  }
}
</style>
