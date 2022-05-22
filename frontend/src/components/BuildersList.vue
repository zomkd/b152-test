<template>
  <section class="main">
    <h1 class="text-3xl font-bold underline">
    Привет мир!
  </h1>
    <ul class="builders-list">
      <li class="builder-item" v-for="builder in builders" :key="builder.name">
        <router-link
          :to="{ name: 'builderCard', params: { name: builder.name } }"
        >
          {{ builder.name }}
          {{ builder.houses }}
        </router-link>
      </li>
    </ul>
  </section>
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