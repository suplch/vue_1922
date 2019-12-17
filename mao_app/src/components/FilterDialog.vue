<template>
    <div class="filter-dialog">
        <div class="area">
            <div 
                v-on:click="selectAreaItem(item)" 
                v-bind:key="item.id" 
                v-for="item of filter_cinemas.district.subItems"
                v-bind:class="{selected: area_selected === item}">
                    {{item.name}}({{ item.count }})
            </div>
        </div>
        <div class="region">
            <div v-on:click="selectRegionItem(item)"
                 v-bind:key="item.id"
                 v-bind:class="{selected: region_selected === item}"
                 v-for="item of area_selected.subItems">
                <span class="region-name">{{item.name}}</span> <span class="region-count">{{item.count}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('cinema', [
            'filter_cinemas',
            'area_selected',
            'region_selected'
        ])
    },
    methods: {
        ...mapActions('cinema', {
            selectAreaItem(dispatch, item) {
                dispatch('selectAreaItem', item);
            },
            selectRegionItem(dispatch, item) {
                dispatch('selectRegionItem', item);
                this.$emit('region', item)
            }
        })
    }
}
</script>

<style scope>
    .filter-dialog {
        width: 100%;
        height: 400px;
    }
    .area {
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        width: 100px;
        overflow: auto;
    }
    .area > div {
        height: 50px;
        line-height: 50px;
    }
    .area > div.selected {
        color: red;
        background: lightgrey;
    }
    .region {
        position: absolute;
        background: lightgrey;
        top: 0px;
        right: 0px;
        left: 100px;
        bottom: 0px;
        overflow: auto;
    }

    .region > div {
        height: 50px;
        line-height: 50px;
    }

    .region > div.selected {
        color: red;
    }

    .region > div.selected:before {
        content: "";
        display: block;
        position: absolute;
        left: 8px;
        top: 19px;
        width: 11.5px;
        height: 8px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBT…/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .region > div .region-name {
        float: left;
        margin-left: 10px;
    }

    .region > div .region-count {
        float: right;
        margin-right: 10px;
    }
</style>