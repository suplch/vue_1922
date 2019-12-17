<template>
    <div>
        电影详情
        {{ detailMovie }}
    </div>
</template>

<script>
export default {
    created() {
        this.getMovieDetail();
    },
    computed: {
        detailMovie() {
            return this.$store.state.movie.detailMovie;
        }
    },
    methods: {
        getMovieDetail() {
            this.$store.dispatch('movie/getMovieDetail', this.$route.params.id);
        }
    }
}
</script>