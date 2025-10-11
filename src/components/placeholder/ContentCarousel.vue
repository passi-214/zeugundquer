<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

// Props for images and configuration
defineProps({
  images: {
    type: Array,
    required: true,
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
    <Slide v-for="image in images" :key="image.id">
      <img :src="image.url" :alt="image.alt || 'image'" />
    </Slide>

    <template #addons>
      <Navigation v-if="config.showNavigation" />
    </template>
  </Carousel>
</template>


<style>
:root {
  --carousel-transition: 300ms;
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.9;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}


img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Style the buttons */
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
  z-index: 10;                  /* make sure it’s above slides */
}

/* Move the left arrow much closer to the center */
.carousel__prev {
  left: 4%;   /* 25% from the left of carousel */
}

/* Move the right arrow much closer to the center */
.carousel__next {
  right: 4%;  /* 25% from the right of carousel */
}



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
