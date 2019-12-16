const tabs = [
    {name: 'zzry', text: '正在热映'},
    {name: 'jjsy', text: '即将上映'},
];

export default {
    namespaced: true,
    state: {
        selectedTab: tabs[0],
        tabs: tabs,
        movie_list: []
    },
    mutations: {
        selectTab(state, tab) {
            state.selectedTab = tab;
        },
        set_movie_list(state, movies) {
            state.movie_list = movies
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
        }
    }
}