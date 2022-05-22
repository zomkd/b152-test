<!-- Компонента отображения главной страницы -->
<template>
  <div class="flex flex-col justify-center items-center">
    <div v-if="builders.length() == 0"> Нет записей </div> 
    <section class="main w-full bg-white rounded-lg shadow-lg lg:w-1/3">
      <ul class="builders-list divide-y-2 divide-gray-100">
        <li
          class="p-3 hover:bg-blue-600 hover:text-blue-200"
          v-for="builder in builders"
          :key="builder.name"
        >
          <router-link
            class="flex justify-between"
            :to="{ name: 'builderCard', params: { name: builder.name } }"
          >
            {{ builder.name }}
            <div class="houses-count flex font-bold">
              Количество построенных домов:
              <div class="font-medium ml-5">{{ builder.houses }}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "BuildersList",
  mounted() {
    this.$store.dispatch("GET_BUILDERS");
  },
  computed: {
    builders() {
      return this.$store.getters.BUILDERS;
    },
  },
};
</script>

<!-- <style>
.builder-item {
  cursor: pointer;
}
</style> -->