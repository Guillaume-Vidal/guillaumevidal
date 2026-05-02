<script setup>
import useLocale from '../composables/useLocale'
import useScrollAnimation from '../composables/useScrollAnimation'

const { t } = useLocale()
const { observe } = useScrollAnimation()

const resume = '/documents/cv-guillaume-vidal.pdf'
const picture = '/images/profilepicture.webp'
</script>

<template>
  <section class="hero" id="hero">
    <ul class="socials">
      <li class="fade-up" :ref="observe" style="--i: 2">
        <a href="https://www.linkedin.com/in/guillaumevidal-dev/" target="_blank">
          <i class="uil-linkedin-alt fs-lg"></i>
        </a>
      </li>
      <li class="fade-up" :ref="observe" style="--i: 3">
        <a href="https://github.com/guillaume-vidal?tab=repositories" target="_blank">
          <i class="uil-github-alt fs-lg"></i>
        </a>
      </li>
    </ul>

    <div class="introduction">
      <h1 class="fs-3xl fade-up" :ref="observe" style="--i: 0">Guillaume</h1>
      <h2 class="fs-lg fw-500 text-secondary fade-up" :ref="observe" style="--i: 1">{{ t('hero.role') }}</h2>
      <p class="fs-md fw-500 text-secondary fade-up" :ref="observe" style="--i: 2">{{ t('hero.description') }}</p>

      <ul class="stats fade-up" :ref="observe" style="--i: 3">
        <li>
          <h3 class="fs-xl">06+</h3>
          <small class="fs-xs text-secondary">{{ t('hero.experience.line1') }}<br>{{ t('hero.experience.line2') }}</small>
        </li>
        <li>
          <h3 class="fs-xl">11+</h3>
          <small class="fs-xs text-secondary">{{ t('hero.projects.line1') }}<br>{{ t('hero.projects.line2') }}</small>
        </li>
        <li>
          <h3 class="fs-xl">03+</h3>
          <small class="fs-xs text-secondary">{{ t('hero.companies.line1') }}<br>{{ t('hero.companies.line2') }}</small>
        </li>
      </ul>

      <div class="fade-up" :ref="observe" style="--i: 4">
        <a class="btn-primary" :href="resume" download>
          {{ t('hero.resume') }}
          <i class="uil-import fs-lg"></i>
        </a>
      </div>
    </div>
    <svg class="blob fade-up" :ref="observe" style="--i: 1" viewBox="0 0 200 200">
      <mask id="mask" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226
            186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871
            10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
      </mask>
      <g mask="url(#mask)">
        <image class="photo" x="-15" y="-45" :href="picture" alt="profile picture" />
      </g>
    </svg>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  grid-template-areas:
    "socials introduction blob ."
  ;
  gap: 2rem;

  width: var(--container-md);
  height: 100vh;
  align-content: center;
  margin-inline: auto;
}

.socials {
  grid-area: socials;
  display: flex;
  flex-direction: column;
  margin-block: auto;
  gap: 2rem;

  a {
    color: var(--color-primary);
    transition: .2s;

    &:hover {
      color: var(--color-secondary);
    }
  }
}

.introduction {
  grid-area: introduction;

  .stats {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-block: 2rem;
  }
}

.blob {
  grid-area: blob;
  width: 12rem;
  margin-left: auto;
  margin-top: 2rem;

  .photo {
    width: 14.5rem;
  }
}

@media (width <= 48rem) {
  .hero {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "socials blob ."
      "introduction introduction introduction"
    ;
    gap: 0;

    .introduction {
      margin-top: 4rem;
    }

    .blob {
      margin-inline: auto;
      margin-top: 0;
    }
  }
}
</style>
