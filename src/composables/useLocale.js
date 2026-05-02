import { ref } from 'vue'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const messages = { en, fr }
const saved = localStorage.getItem('locale')
const locale = ref(saved ?? 'en')

export default function useLocale() {
  const t = (key) => {
    const keys = key.split('.')
    let result = messages[locale.value]
    for (const k of keys) {
      result = result[k]
    }
    return result
  }

  const toggleLocale = () => {
    document.body.classList.add('opacity-0')
    setTimeout(() => {
      locale.value = locale.value === 'en' ? 'fr' : 'en'
      localStorage.setItem('locale', locale.value)
      document.body.classList.remove('opacity-0')
    }, 200)
  }

  return { t, toggleLocale }
}
