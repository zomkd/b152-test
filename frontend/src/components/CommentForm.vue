<template>
    <div class="comment-form-main">
        <form method="post" @submit.prevent="submit">
            <input v-model="name" class="input-name" placeholder="Введите Ваше имя" required>
            <textarea v-model="message" class="input-message" placeholder="Оставьте комментарий..." required></textarea>
            <input type="submit" value="Отправить">
        </form>
    </div>
</template>

<script>
export default {
 name: "CommentForm",
 data () {
     return {
         name: "",
         message: "",
     }
 },

}
</script>

<style>

</style>
