const tabs = [
    {name: 'zzry', text: '正在热映', comp: 'Online'},
    {name: 'jjsy', text: '即将上映', comp: 'Coming'},
];

export default {
    namespaced: true,
    state: {
        selectedTab: tabs[0],
        tabs: tabs,
        movie_list: [],
        movie_expected_list: [],   // 我们所期待的电影列表
        coming_list: []
    },
    mutations: {
        selectTab(state, tab) {
            state.selectedTab = tab;
        },
        set_movie_list(state, movies) {
            state.movie_list = movies
        },
        set_movie_expected_list(state, movies) {
            state.movie_expected_list = movies
        },
        set_coming_list(state, coming) {
            state.coming_list = coming;
        }
    },
    actions: {
        selectTab({commit}, tab) {
            commit('selectTab', tab);
            
        },
        async movieOnInfoList(context) {
            const result = await this.$http.get('/ajax/movieOnInfoList', {
                params: {
                    token: '',
                    optimus_uuid: '87AE87E0FEC711E9A8387B62E59AB01D61D2C48C5BFF4EACA9F2480960AA0BD6',
                    optimus_risk_level: 71,
                    optimus_code: 10
                }
            });
            context.commit('set_movie_list', result.data.movieList);
        },
        async mostExpected(context) {
            const result = await this.$http.get('/ajax/mostExpected', {
                params: {
                    ci: 1,
                    limit: 10,
                    offset: 0,
                    token: '',
                    optimus_uuid: 'C12C22401FB811EAAF3D03F044E4F76B5362421BDA264C07AD53655E3B541E2C',
                    optimus_risk_level: 71,
                    optimus_code: 10,
                }
            });
            context.commit('set_movie_expected_list', result.data.coming);
        },
        async comingList(context) {
            const result = await this.$http.get('/ajax/comingList', {
                params: {
                    ci: 1,
                    token: '',
                    limit: 10,
                    optimus_uuid: 'C12C22401FB811EAAF3D03F044E4F76B5362421BDA264C07AD53655E3B541E2C',
                    optimus_risk_level: 71,
                    optimus_code: 10
                }
            });
            context.commit('set_coming_list', result.data.coming);
        }
    }
}