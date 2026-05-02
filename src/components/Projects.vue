<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import useLocale from '../composables/useLocale'
import useScrollAnimation from '../composables/useScrollAnimation'

const slides = [
  {
    image: "/images/project1.png",
    imageMobile: "/images/project1-sm.png",
    alt: "image project one",
    text: "projects.slide1",
  },
  {
    image: "/images/project2.png",
    imageMobile: "/images/project2-sm.png",
    alt: "image project two",
    text: "projects.slide2",
  },
  {
    image: "/images/project3.png",
    imageMobile: "/images/project3-sm.png",
    alt: "image project three",
    text: "projects.slide3",
  },
];

const onProgress = (swiper) => {
  swiper.slides.forEach((slide) => {
    const content = slide.querySelector("p");

    if (content) {
      content.style.opacity = 1 - Math.min(Math.abs(slide.progress), 1);
    }
  });
};

const { t } = useLocale()
const { observe } = useScrollAnimation()

const glowRef = ref(null)

onMounted(() => {
  observe(glowRef.value)
})
</script>

<template>
  <section class="projects" id="projects">
    <h1 class="title">{{ t('projects.title') }}</h1>

    <Swiper
      :modules="[Pagination, Parallax]"
      :slides-per-view="'auto'"
      :space-between="30"
      :speed="800"
      :centered-slides="true"
      :parallax="true"
      :grabCursor="true"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      @progress="onProgress">

      <SwiperSlide v-for="(slide) in slides">
        <picture>
          <source media="(max-width: 768px)" :srcset="slide.imageMobile" />
          <img :src="slide.image" :alt="slide.alt" />
        </picture>
        <p class="text" data-swiper-parallax="-400">{{ t(slide.text) }}</p>
      </SwiperSlide>

      <div class="swiper-pagination"></div>
    </Swiper>

    <div class="glow-line" ref="glowRef"></div>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  scroll-margin-top: 8rem;
  background: var(--bg-secondary);
  transition: .4s;

  .title {
    font-size: var(--fs-2xl);
    width: var(--container-md);
    margin-inline: auto;
    padding-block: 4rem;
  }

  .text {
    color: oklch(98.5% 0 0);
  }
}

.glow-line {
  position: absolute;
  inset: auto 50% 0;
  translate: -50%;
  width: 0;
  height: 8rem;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  filter: blur(4rem);
  transition: 2s;
  z-index: -1;

  &.active {
    width: 100%;
  }
}

.swiper {
  padding-bottom: 10rem;
  background: var(--bg-secondary);
}

.swiper-slide {
  position: relative;
  max-width: 1280px;
  height: 720px;
  border-radius: 2rem;
  overflow: hidden;

  img {
    position: absolute;
  }

  p {
    max-width: 30rem;
    margin: 2rem;
    font-size: var(--fs-lg);
  }
}

.swiper-pagination {
  bottom: 6rem;
}

:deep(.swiper-pagination-bullet) {
  width: .75rem;
  height: .75rem;
  background: var(--text-primary);
  opacity: 1;
  transition: .8s;
}

:deep(.swiper-pagination-bullet-active) {
  width: 4rem;
  border-radius: 100vmax;
}
</style>
