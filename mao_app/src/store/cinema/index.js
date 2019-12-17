export default {
    namespaced: true,
    state: {
        cinema_list: [],
        region_selected: {},
        area_selected: {},  // 选择一个区域
        filter_cinemas: undefined,
    },
    mutations: {
        set_cinema_list(state, cinemas) {
            state.cinema_list = cinemas;
        },
        set_filter_cinemas(state, filter_cinemas) {
            state.filter_cinemas = filter_cinemas;
            localStorage.setItem('filter_cinemas', JSON.stringify(filter_cinemas));
        },
        selectAreaItem(state, item) {
            state.area_selected =  item;
        },
        selectRegionItem(state, item) {
            state.region_selected = item;
        }
    },
    actions: {
        async cinemaList(context) {
            const result = await this.$http.get('/ajax/cinemaList', {
                params: {
                    day: '2019-12-16',
                    offset: 0,
                    limit: 20,
                    districtId: -1,
                    lineId: -1,
                    hallType: -1,
                    brandId: -1,
                    serviceId: -1,
                    areaId: -1,
                    stationId: -1,
                    item: '',
                    updateShowDay: true,
                    reqId: 1576486423873,
                    cityId: 1,
                    optimus_uuid: 'C12C22401FB811EAAF3D03F044E4F76B5362421BDA264C07AD53655E3B541E2C',
                    optimus_risk_level: 71,
                    optimus_code: 10
                }
            });
            context.commit('set_cinema_list', result.data.cinemas);
        },
        async filterCinemas(context) {
            const result = await this.$http.get('/ajax/filterCinemas', {
                params: {
                    ci: 1,
                    optimus_uuid: '844E1B501FE311EA961CD36275BB4F817590FE81DB08466697EE7AE1D57CC0D7',
                    optimus_risk_level: 71,
                    optimus_code: 10
                }
            });
            context.commit('set_filter_cinemas', result.data);
        },
        selectAreaItem(context, item) {
            context.commit('selectAreaItem', item);
        },
        selectRegionItem(context, item) {
            context.commit('selectRegionItem', item)
        },
        async selectRegion(context) {
            let districtId = context.state.area_selected.id;
            let areaId = context.state.region_selected.id;
            const result = await this.$http.get('/ajax/cinemaList', {
                params: {
                    day: '2019-12-16',
                    offset: 0,
                    limit: 20,
                    districtId: districtId,
                    lineId: -1,
                    hallType: -1,
                    brandId: -1,
                    serviceId: -1,
                    areaId: areaId,
                    stationId: -1,
                    item: '',
                    updateShowDay: false,
                    reqId: 1576497422675,
                    cityId: 1,
                    optimus_uuid: '844E1B501FE311EA961CD36275BB4F817590FE81DB08466697EE7AE1D57CC0D7',
                    optimus_risk_level: 71,
                    optimus_code: 10
                }
            });
            context.commit('set_cinema_list', result.data.cinemas);
        }
    }
}