<template>
  <section class="main">
    <ul class="builders-list">
      <li class="builder-item" v-for="builder in builders" :key="builder.name">
        <router-link :to="{name: 'builderCard', params: { name: builder.name }}"> 
        {{builder.name}}
        {{builder.houses}}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BuildersList",

  computed: {
    builders() {
      return this.$store.getters.BUILDERS;
    },
  },
};
</script>

<style>
.builder-item {
  cursor: pointer;
}
</style>