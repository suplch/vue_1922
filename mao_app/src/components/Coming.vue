<template>
    <div class="coming">
        <p>近期最受期待</p>
        <div class="expected">
            <div v-for="movie of expected_movie">
                <div>
                    <img v-bind:src="movie.img | imgSize('85.115')"/>
                </div>
                <div class="nm">{{ movie.nm }}</div>
                <div class="title">{{ movie.comingTitle }}</div>
            </div>
        </div>
        <div class="coming_list">
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            
        </div>
    </div>
</template>
<script>
// comingTitle: "2020年1月25日 周六"
// id: 1217023
// img: "http://p0.meituan.net/w.h/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
// nm: "唐人街探案3"
// wish: 839937
// wishst: 0
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState('movie', {
            'expected_movie': 'movie_expected_list',
            'coming_list': 'coming_list'
        })
    },
    created() {
        this.mostExpected();
    },
    methods: {
        ...mapActions('movie', {
            mostExpected(dispatch) {
                dispatch('mostExpected');
            },
            comingList(dispatch) {
                dispatch('comingList')
            }
        })
        
    }
}
</script>
<style scope>
    .coming {
        position: absolute;
        top: 95px;
        left: 0px;
        right: 0px;
        bottom: 50px;
    }

    .expected {
        width: 344px;
        height: 164px;
        overflow: auto;
        white-space: nowrap;
    }

    .expected > div {
        display: inline-block;
        width: 85px;
        height: 159px;
        box-shadow: 0px 0px 5px green;
        margin: 0px 7px 0px 7px;
    }
    .expected img {
        width: 85px;
        height: 115px;
    }

    .expected .nm {
        font-size: 14px;
        font-weight: bold;
    }
    .expected .title {
        font-size: 8px;
        color: grey;
    }
</style>