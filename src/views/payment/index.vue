<template>
  <div class="TableDrag">
    <el-table
        ref="table"
      :data="tableDatas"
      border
      @sort-change="sortMethods"
      :header-cell-style="{color: '#333333', fontSize: '16px', backgroundColor: '#F5F7FA'}"
    >
      <el-table-column
        prop="ruzhiriqi"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="names"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      
    </el-table>
        
        
    </div>
</template>

<script>
import Sortable from 'sortablejs';
    export default {
        data() {
            return {
                sortAble : false,
                tableDatas:[
                    {
                        id:0,
                        names:"范德萨发大水",
                        telphone:"1245488",
                        zhanghao:"法大师傅",
                        status:true,
                        email:"223232",
                        ruzhiriqi:"2020-06-05"
                    },
                    {
                        id:1,
                        names:"范德萨发大水3333",
                        telphone:"1245488",
                        zhanghao:"法大师傅",
                        status:false,
                        email:"223232",
                        ruzhiriqi:"2020-06-05"
                    },
                    {
                        id:2,
                        names:"范德萨发大水111",
                        telphone:"1245488",
                        zhanghao:"法大师傅",
                        status:true,
                        email:"223232",
                        ruzhiriqi:"2020-06-05"
                    }
                ],
                tempData:[],
            }
        },
        mounted(){
            this.dragSort();
            this.tempData = JSON.parse(JSON.stringify(this.tableDatas))
        },
        methods:{
            dragSort() {
                // 首先获取需要拖拽的dom节点
                const el = document.querySelectorAll('.el-table__body-wrapper')[0].querySelectorAll('table > tbody')[0];
                Sortable.create(el, {
                    disabled: this.sortAble, // 是否开启拖拽
                    ghostClass: 'sortable-ghost', //拖拽样式
                    animation: 150, // 拖拽延时，效果更好看
                    onEnd: ({ newIndex , oldIndex}) => { // 这里主要进行数据的处理，拖拽实际并不会改变绑定数据的顺序，这里需要自己做数据的顺序更改
                        const currentRow = this.tempData.splice(oldIndex , 1)[0]
                        this.tempData.splice(newIndex , 0 , currentRow)
                        console.log(this.tempData)
                        // console.log(newIndex + ',' + oldIndex)
                    }
                });
            },
            // 排序的方法
            sortMethods(type) {
                console.log(type);

            },
        }
    }
</script>

<style lang="scss" scoped>
.el-table:hover{
    cursor: pointer;
}
</style>