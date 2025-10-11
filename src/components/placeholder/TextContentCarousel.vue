<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

// Props for slides and configuration
defineProps({
  slides: {
    type: Array,
    required: true,
    // Each slide: { id, title, description }
  },
  config: {
    type: Object,
    default: () => ({
      height: 400,
      itemsToShow: 1.5,
      wrapAround: true,
    }),
  },
})
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="(slide, index) in slides" :key="slide.id">
      <div class="slide-content">
        <!-- Slide number in hollow circle -->
        <div class="slide-number">{{ index + 1 }}</div>

        <!-- Title centered -->
        <h2 class="slide-title preline">{{ slide.title }}</h2>

        <!-- Description aligned left -->
        <p class="slide-description">{{ slide.description }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation v-if="config.showNavigation" />
    </template>
  </Carousel>
</template>

<style>

.preline { white-space: pre-line; }

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
  background: #f0f0f0;
  border-radius: 8px;
  position: relative;
}

/* Slide number in a hollow circle at top-left */
.slide-number {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Title centered at the top */
.slide-title {
  text-align: center;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
}

/* Description aligned left below the title */
.slide-description {
  text-align: left;
  margin-top: 15px;
  font-size: 1rem;
  line-height: 1.4;
  color: #555;
}

/* Navigation arrows */
.carousel__next,
.carousel__prev {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 10;
}

.carousel__prev {
  left: 4%;
}

.carousel__next {
  right: 4%;
}

/* 3D and transition styles kept from original */
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
      opacity var(--carousel-transition),
      transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
      opacity var(--carousel-transition),
      transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.85);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}
</style>
