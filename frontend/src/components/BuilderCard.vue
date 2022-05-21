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
          v-for="comment in comments"
          :key="comment.text"
        >
          {{ comment.name }}
          {{ comment.text }}
        </li>
      </ul>
    </div>
    <div class="leave-comments-form">
      <CommentFormVue :isBuilder="true" :id="this.getID"></CommentFormVue>
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
    this.$store.dispatch("GET_COMMENTS");
  },
  computed: {
    houses() {
      const houses = this.$store.getters.HOUSES;
      return houses.filter((e) => e.builder_name === this.name);
    },
    comments() {
      const comments = this.$store.getters.COMMENTS;
      return comments.filter((e) => e.builder != null && e.house_or_builder_name === this.name);
    },
    getBuilderDescription() {
      const builders = this.$store.getters.BUILDERS;
      return builders.find((e) => e.name === this.name).description;
    },
    getID() {
      const builders = this.$store.getters.BUILDERS;
      return builders.find((e) => e.name === this.name).id;
    }
  },
};
</script>

<style>
</style>