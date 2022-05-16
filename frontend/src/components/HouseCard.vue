<template>
  <section class="house-card-main">
    <div class="house-description">
      {{ this.address }} - {{ getHouseDescription }}
    </div>
    <div class="builder-description">
        {{getBuilderDescription}}
    </div>
    <div class="comments">
      <ul class="houses-comments-list">
        <li
          class="houses-comments-item"
          v-for="comments in housesComments"
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
  props: ["address"],
  name: "HouseCard",
  components: {
    CommentFormVue,
  },
  computed: {
    houses() {
      return this.$store.getters.HOUSES;
    },
    buildersComments() {
      return this.$store.getters.BUILDERS_COMMENTS;
    },
    builders() {
      return this.$store.getters.BUILDERS;
    },
    housesComments() {
      return this.$store.getters.HOUSES_COMMENTS;
    },
    getHouseDescription() {
      return this.houses.find((e) => e.address === this.address).description;
    },
    getBuilderDescription() {
      const houseBuilder = this.houses.find(
        (e) => e.address === this.address
      ).builder;
      return this.builders.find((e) => e.name === houseBuilder).description;
    },
  },
};
</script>

<style>
</style>