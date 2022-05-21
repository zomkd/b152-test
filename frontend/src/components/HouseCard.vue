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
          v-for="comment in сomments"
          :key="comment.text"
        >
          {{ comment.name }}
          {{ comment.text }}
        </li>
      </ul>
    </div>
    <div class="leave-comments-form">
      <CommentFormVue :isBuilder="false" :id="this.getID"></CommentFormVue>
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
    сomments() {
      const comments = this.$store.getters.COMMENTS;
      return comments.filter((e) => e.house != null && e.house_or_builder_name === this.address);
    },
    builders() {
      return this.$store.getters.BUILDERS;
    },
    getHouseDescription() {
      const houses = this.houses; 
      return houses.find((e) => e.address === this.address).description;
    },
    getBuilderDescription() {
      const houseBuilder = this.houses.find(
        (e) => e.address === this.address
      ).builder_name;
      const builders = this.builders;
      return builders.find((e) => e.name === houseBuilder).description;
    },
    getID() {
      const houses = this.$store.getters.HOUSES;
      return houses.find((e) => e.address === this.address).id;
    }
  },
};
</script>

<style>
</style>