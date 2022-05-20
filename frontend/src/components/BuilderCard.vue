<template>
  <section class="builder-card-main">
    <div class="builder-description">
      {{ this.name }} - {{ getBuilderDescription }}
    </div>
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
    <div class="leave-comments-form">
      <CommentFormVue></CommentFormVue>
    </div>
  </section>
</template>

<script>
import CommentFormVue from "./CommentForm.vue";
export default {
  props: ["name"],
  name: "BuilderCard",
  components: {
    CommentFormVue,
  },
  mounted() {
    this.$store.dispatch("GET_HOUSES");
  },
  computed: {
    houses() {
      return this.$store.getters.HOUSES;
    },
    builders() {
      return this.$store.getters.BUILDERS;
    },
    buildersComments() {
      return this.$store.getters.BUILDERS_COMMENTS;
    },
    getBuilderDescription() {
      return this.builders.find((e) => e.name === this.name).description;
    },
  },
};
</script>

<style>
</style>