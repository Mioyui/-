<template>
    <div id="manager" class="panel m-4" style="margin-right:300px">
      <h2>宾客赴宴情况</h2>
    <el-table
    :data="$store.state.GuestInfo"
    stripe
    show-summary
    :summary-method="getSummaries"
    style="width: 100%">

    <el-table-column
      property="name"
      label="宾客姓名"
      width="180">
    </el-table-column>

    <el-table-column
      property="phone"
      label="联系方式"
      width="180">
    </el-table-column>

    <el-table-column
      property="number"
      label="赴宴人数"
      width="180">
    </el-table-column>

    <el-table-column
      property="bless"
      label="祝福语"
      width="180">
    </el-table-column>
  </el-table>


  </div>
</template>

<script>
export default {
    name:'GuestTable',
    methods:{
        getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '赴宴总人数';
            return;
          }
          if (index === 1) {
            sums[index] = '';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += '人';
          } else {
            sums[index] = '';
          }
        });

        return sums;
      }
    
    }
}
</script>

<style>

</style>