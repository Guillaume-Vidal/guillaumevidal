<script setup>
import { ref, onMounted } from 'vue'
import useLocale from '../composables/useLocale'
import useTheme from '../composables/useTheme'

const { t, toggleLocale } = useLocale()
const { theme, toggleTheme } = useTheme()

const resume = '/documents/cv-guillaume-vidal.pdf'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="wrapper" :class="{ 'wrapper-scrolled': isScrolled }">
    <nav class="navbar">
      <button class="fs-sm fw-500 btn-secondary" @click="toggleLocale">
        <i class="uil-language fs-lg sm-hide"></i>{{ t('navbar.language') }}
      </button>
      <ul class="navbar-list">
        <li class="md-hide">
          <a class="fs-sm fw-500 btn-secondary" href="#projects">{{ t('navbar.projects') }}</a>
        </li>
        <li class="md-hide">
          <a class="fs-sm fw-500 btn-secondary" href="#career">{{ t('navbar.career') }}</a>
        </li>
        <li class="md-hide">
          <a class="fs-sm fw-500 btn-secondary" href="#skills">{{ t('navbar.skills') }}</a>
        </li>
        <li class="md-hide">
          <a class="fs-sm fw-500 btn-secondary" href="#work-process">{{ t('navbar.workProcess') }}</a>
        </li>
        <li>
          <a class="fs-sm fw-500 btn-secondary" :href="resume" download>
            <i class="uil-import fs-lg sm-hide"></i>{{ t('navbar.resume') }}
          </a>
        </li>
        <li>
          <a class="fs-sm fw-500 btn-secondary" href="mailto:guillaumevidal.97@gmail.com">
            <i class="uil-message fs-lg sm-hide"></i>{{ t('navbar.contact') }}
          </a>
        </li>
        <li>
          <button class="fs-sm fw-500 btn-secondary" id="theme" @click="toggleTheme">
            <i class="fs-lg" :class="theme === 'dark' ? 'uil-sun' : 'uil-moon'"></i>
            <p class="sm-hide">{{ t('navbar.theme') }}</p>
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(1rem);
  border-bottom: 1px solid transparent;
  transition: .4s;
  z-index: 100;
}

.wrapper-scrolled {
  background: var(--bg-header);
  border-bottom-color: var(--border);
}

.navbar {
  width: var(--container-md);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
}

@media (width <= 48rem) {
  .wrapper {
    top: auto;
    bottom: 0;
    border-top: 1px solid var(--border);
    border-bottom: none;
    background: var(--bg-header);
  }

  .navbar {
    justify-content: center;
    padding-block: .4rem;

    .navbar-list {
      text-align: center;
      gap: 2rem;

      i {
        display: block;
      }
    }
  }
}
</style>
