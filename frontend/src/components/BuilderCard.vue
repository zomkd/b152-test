<template>
  <section class="builder-card-main">
    <div class="builder-description">{{ this.name }} - testtest</div>
    <ul class="houses-list">
      <li class="houses-item" v-for="house in houses" :key="house.address">
        <router-link
          :to="{ name: 'houseCard', params: { address: house.address } }"
        >
          {{ house.city }}
          {{ house.address }}
        </router-link>
      </li>
    </ul>
    <div class="comments">
      <ul class="builders-comments-list">
        <li
          class="builders-comments-item"
          v-for="comments in buildersComments"
          :key="comments.text"
        >
          {{ comments.name }}
          {{ comments.text }}
        </li>
      </ul>
    </div>
    <div class="leave-comments-form"></div>
  </section>
</template>

<script>
export default {
  props: ["name"],
  name: "BuilderCard",

  computed: {
    houses() {
      return this.$store.getters.HOUSES;
    },
    buildersComments() {
      return this.$store.getters.BUILDERS_COMMENTS;
    },
  },
};
</script>

<style>
</style>