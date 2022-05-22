<!-- Компонента отображения формы комментриев -->
<template>
  <div
    class="
      flex
      items-center
      justify-center
      max-w-lg
    "
  >
    <form
      class="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
      method="post"
      @submit.prevent="submit"
    >
      <h2 class="text-2xl px-3 pt-3 pb-2">Напишите комментарий</h2>
      <div class="flex flex-wrap px-3 -mx-3 mb-6">
        <input
          v-model="name"
          class="mx-3"
          placeholder="Введите Ваше имя"
          required
        />
        <div class="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            v-model="text"
            class="
              bg-gray-100
              rounded
              border border-gray-400
              leading-normal
              resize-none
              w-full
              h-20
              py-2
              px-3
              font-medium
              placeholder-gray-700
              focus:outline-none focus:bg-white
            "
            name="body"
            placeholder="Оставьте комментарий..."
            required
          ></textarea>
        </div>
        <div class="px-3 -mr-1">
          <input
            type="submit"
            class="
              bg-white
              text-gray-700
              font-medium
              py-1
              px-4
              border border-gray-400
              rounded-lg
              tracking-wide
              mr-1
              hover:bg-gray-100
            "
            value="Отправить"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  props: ["isBuilder", "id"],
  data() {
    return {
      name: "",
      text: "",
    };
  },
  methods: {
    submit() {
      
      let payload = { name: this.name, text: this.text };
      if (this.isBuilder) { ///проверка на то, кто оставил комментарий: застройщик или нет
        payload["builder"] = this.id;
        payload["house"] = null;
      } else {
        payload["builder"] = null;
        payload["house"] = this.id;
      }
      this.$store.dispatch("SAVE_COMMENT", payload);
    },
  },
};
</script>

<style>
</style>
