<template>
  <div class="comment-form-main">
    <form method="post" @submit.prevent="submit">
      <input
        v-model="name"
        class="input-name"
        placeholder="Введите Ваше имя"
        required
      />
      <textarea
        v-model="text"
        class="input-text"
        placeholder="Оставьте комментарий..."
        required
      ></textarea>
      <input type="submit" value="Отправить" />
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
        let payload = {name: this.name, text: this.text};
        if (this.isBuilder) {
            payload['builder'] = this.id;
            payload['house'] = null;
        }
        else {
           payload['builder'] = null;
            payload['house'] = this.id;
        }
        console.log(payload)
      this.$store.dispatch("SAVE_COMMENT", payload);
      console.log("triggers");
    },
  },
};
</script>

<style>
</style>
