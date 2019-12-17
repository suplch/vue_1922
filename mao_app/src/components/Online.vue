<template>
    <div class="movielist">
        <div v-bind:key="movie.id" v-for="movie of movie_list">
            <div class="avatar">
            <img v-bind:src="movie.img | imgSize('64.90')" />
            </div>
            <div class="info">
            <div class="title">{{ movie.nm }}</div>
            <div class="desc">
                <div>观众评分 <span class="score">{{ movie.sc }}</span></div>
                <div>{{ movie.star}}</div>
                <div>{{ movie.showInfo }}</div>
            </div>
            </div>
            <div class="btn">
                <button @click="gotoMovie(movie)">购票</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {

    created() {
        this.movieOnInfoList();
    },
    computed: {
        ...mapState('movie', [
            'movie_list'
        ])
    },
    methods: {
        ...mapActions('movie', {
            movieOnInfoList(dispatch) {
                dispatch('movieOnInfoList');
            }
        }),
        gotoMovie(movie){
          this.$router.push('/movie/' + movie.id);
        }
    }
}
</script>
<style scope>
  .movielist {
    position: absolute;
    top: 95px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow: auto;
  }

  .movielist > div {
    height: 114px;
    box-shadow: 0px 0px 5px red;
  }

  .avatar {
    position: absolute;
    top: 12px;
    left: 15px;
    width: 64px;
    height: 90px;
  }

  .avatar img {
    width: 64px;
    height: 90px;
  }

  .movielist .btn {
    float: right;
    width: 47px;
    height: 100%;
    line-height: 114px;
  }
  .movielist .btn button {
    background: red;
    color: white;
    padding: 5px;
    border-radius: 5px
  }
  .movielist .info {
    position: absolute;
    top: 12px;
    left: 90px;
    height: 90px;
    width: 220px;
  }

  .movielist .info .desc {
    color: grey;
  }

  .movielist .info .score {
    color: orange;
  }
</style>