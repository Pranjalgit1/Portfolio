import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <a href={profile.links.github} className="hover:text-neutral-700 transition-colors">
            GitHub
          </a>
          <a href={profile.links.linkedin} className="hover:text-neutral-700 transition-colors">
            LinkedIn
          </a>
          <a href={profile.links.leetcode} className="hover:text-neutral-700 transition-colors">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  )
}
