'use client'

import { useEffect, useRef } from 'react'

export const useCountUpOnView = (duration = 1000) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && ref.current) {
					const digits = ref.current.querySelectorAll('[data-target]')

					digits.forEach(el => {
						const target = parseInt(el.getAttribute('data-target') || '0')
						const suffix = el.getAttribute('data-suffix') || ''
						let current = 0

						const totalFrames = Math.round(duration / 16) // при 60fps
						const increment = target / totalFrames

						let frame = 0

						const counter = setInterval(() => {
							frame++
							current += increment
							if (frame >= totalFrames) {
								el.textContent = target + suffix
								clearInterval(counter)
							} else {
								el.textContent = Math.round(current) + suffix
							}
						}, 16)
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
