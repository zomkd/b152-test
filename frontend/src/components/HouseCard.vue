<!-- Компонента отображения страницы домов -->
<template>
  <section class="main w-full bg-white rounded-lg shadow-lg lg:full">
    <h2 class="text-2xl ml-8 mb-3">
      Адрес: <span class="font-semibold">{{ this.address }}</span>
    </h2>
    <div class="mb-3 ml-8">
      {{ getHouseDescription }}
    </div>
    <h2 class="text-2xl ml-8 mb-3">Описание застройщика</h2>
    <div class="builder-description ml-8 mb-3">
      {{ getBuilderDescription }}
    </div>
    <div class="comments">
      <ul class="houses-comments-list ml-8">
        <h2 class="text-2xl mb-3">Список комментариев</h2>
        <li
          class="houses-comments-item"
          v-for="comment in сomments"
          :key="comment.text"
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
      <CommentForm :isBuilder="false" :id="this.getID"></CommentForm>
    </div>
  </section>
</template>

<script>
import CommentForm from "./CommentForm.vue";

export default {
  props: ["address"],
  name: "HouseCard",
  components: {
    CommentForm,
  },
  computed: {
    houses() {
      return this.$store.getters.HOUSES;
    },
    сomments() {
      const comments = this.$store.getters.COMMENTS;
      return comments.filter(
        (e) => e.house != null && e.house_or_builder_name === this.address /// выбор тех комментариев, которые оставили под этим домом
      );
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
    },
  },
};
</script>

<style>
</style>