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
            <div v-for="coming of coming_list">
                <div v-if="isFirst(coming)"> {{ coming.comingTitle }}</div>
                <div class="avador">
                    <img :src="coming.img | imgSize('64.90')"/>
                </div>
                <div class="info">
                    <div>{{ coming.nm }}</div>
                    <div>{{ coming.wish }} 人想看</div>
                    <div>{{ coming.star}}</div>
                    <div> {{ coming.showInfo }}</div>
                </div>
                <div class="btn"></div>
            </div>
        </div>
    </div>
</template>
<script>
// comingTitle: "12月20日 周五"
// globalReleased: false
// haspromotionTag: false
// id: 443387
// img: "http://p0.meituan.net/w.h/moviemachine/a16716ff2873be37857add59f882e44d5071965.jpg"
// nm: "星球大战：天行者崛起"
// preShow: true
// rt: "2019-12-20"
// sc: 0
// showInfo: "2019-12-20 本周五上映"
// showst: 4
// star: "马克·哈米尔,约翰·博耶加,黛西·雷德利"
// version: "v3d imax"
// wish: 52651
// wishst: 0

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
        this.comingList();
    },
    methods: {
        ...mapActions('movie', {
            mostExpected(dispatch) {
                dispatch('mostExpected');
            },
            comingList(dispatch) {
                dispatch('comingList')
            }
        }),
        isFirst(coming) {
            let position = this.coming_list.indexOf(coming);
            if (position > 0) {
                let previous = position - 1;
                if (this.coming_list[position].comingTitle !== this.coming_list[previous].comingTitle) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
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

    .coming_list > div {
        width: 359px;
        height: 146px;
        box-shadow: 0px 0px 5px blue;
    }

    .coming_list .avador {
        position: absolute;
        top: 20px;
        left: 15px;
    }
    .coming_list .avador img {
        width: 64px;
        height: 90px;
    }

    .coming_list .info {
        position: absolute;
        top: 20px;
        left: 80px;
    }

</style>