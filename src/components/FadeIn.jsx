// FadeIn is a reusable wrapper that makes its children fade + slide up into
// view the moment they scroll into the browser viewport, instead of always
// being visible. It's used all over the site (Hero, About, Projects, etc.)
// so every section gets the same "gentle reveal" animation.
//
// How it works: the browser's IntersectionObserver API watches the wrapped
// <div>. When it becomes visible on screen, we flip `visible` to true, which
// swaps the Tailwind classes from "invisible + shifted down" to "visible + in
// place" — the `transition-all` class animates that change smoothly.
import { useEffect, useRef, useState } from 'react'

// delay lets nearby elements stagger in one after another (e.g. heading, then
// paragraph, then button) instead of all appearing at once.
export default function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null) // points at the actual DOM node so we can observe it
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // only need to trigger once, then stop watching
        }
      },
      { threshold: 0.15 }, // fires once 15% of the element is on screen
    )

    observer.observe(node)
    return () => observer.disconnect() // cleanup if the component unmounts early
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
