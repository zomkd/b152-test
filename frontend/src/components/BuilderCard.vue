<template>
  <section
    class="builder-card-main main w-full bg-white rounded-lg shadow-lg lg:full"
  >
    <h2 class="text-2xl ml-8 mb-3">
      Застройщик: <span class="font-semibold">{{ this.name }}</span>
    </h2>
    <div class="builder-description mb-3 ml-8">
      {{ getBuilderDescription }}
    </div>
    <h2 class="text-2xl ml-8 mb-1">Готовые дома</h2>
    <ol
      class="
        list-decimal
        houses-list
        lg:w-1/4
        divide-y-2 divide-gray-100
        mb-3
        ml-4
      "
    >
      <li
        class="houses-item ml-8 py-3 hover:bg-blue-600 hover:text-blue-200"
        v-for="house in houses"
        :key="house.address"
      >
        <router-link
          :to="{ name: 'houseCard', params: { address: house.address } }"
        >
          {{ house.city }}
          {{ house.address }}
        </router-link>
      </li>
    </ol>
    <div class="comments">
      <ul class="builders-comments-list rounded ml-8">
        <h2 class="text-2xl mb-3">Список комментариев</h2>
        <li
          class="builders-comments-item"
          v-for="comment in comments"
          :key="comment.id"
        >
          <div class="mb-4">
            <div class="flex justify-between mb-1">
              <p class="text-grey-darkest leading-normal text-lg">
                {{ comment.text }}
              </p>
            </div>
            <div class="text-gray-500 leading-normal text-sm">
              <p>
                {{ comment.name }}<span class="mx-1 text-xs">&bull;</span>
                {{ comment.created_on.slice(0, 10) }}
              </p>
            </div>
          </div>
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
      return comments.filter(
        (e) => e.builder != null && e.house_or_builder_name === this.name
      );
    },
    getBuilderDescription() {
      const builders = this.$store.getters.BUILDERS;
      return builders.find((e) => e.name === this.name).description;
    },
    getID() {
      const builders = this.$store.getters.BUILDERS;
      return builders.find((e) => e.name === this.name).id;
    },
  },
};
</script>

<style>
</style>