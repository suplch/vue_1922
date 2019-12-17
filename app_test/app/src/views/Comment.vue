<template>
  <div>
    <ul>
        <li v-for="comment of comment_list">
            {{ comment.text }}
        </li>
    </ul>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: {
    ...mapState([
      'comment_list'
    ])
  },
  created() {
    this.get_comment_by_pid(this.$route.params.pid);
  },
  methods: {
    ...mapActions([
        'get_comment_by_pid'
    ])
  }
}
</script>
