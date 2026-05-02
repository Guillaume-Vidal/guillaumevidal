import { ref } from 'vue'

const saved = localStorage.getItem('theme')
const theme = ref(saved ?? 'dark')
document.documentElement.setAttribute('data-theme', theme.value)

export default function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  }

  return { theme, toggleTheme }
}
