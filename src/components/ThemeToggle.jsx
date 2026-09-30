import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button className="icon-button" type="button" onClick={onToggle} aria-label={`Switch to ${nextTheme} theme`}>
      {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle

