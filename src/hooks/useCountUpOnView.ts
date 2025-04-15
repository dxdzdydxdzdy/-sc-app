'use client'

import { useEffect, useRef } from 'react'

export const useCountUpOnView = (duration = 1500) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && ref.current) {
					const digits = ref.current.querySelectorAll('[data-target]')

					digits.forEach(el => {
						const target = parseFloat(el.getAttribute('data-target') || '0')
						const suffix = el.getAttribute('data-suffix') || ''
						const prefix = el.getAttribute('data-prefix') || ''
						const start = performance.now()

						const animate = (now: number) => {
							const elapsed = now - start
							const progress = Math.min(elapsed / duration, 1)

							const easedProgress = 1 - Math.pow(1 - progress, 3)
							const current = Math.round(target * easedProgress)

							el.textContent = `${prefix}${current}${suffix}`

							if (progress < 1) {
								requestAnimationFrame(animate)
							} else {
								el.textContent = `${prefix}${Math.round(target)}${suffix}`
							}
						}

						requestAnimationFrame(animate)
					})
				}
			},
			{ threshold: 0.3 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [duration])

	return ref
}
