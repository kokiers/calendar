<template>
  <div class="my-time"> 
   
    <a-date-picker 
    show-time 
    @change="onChange" 
    dropdownClassName="my-dates"
    :dateRender="renderDate"
    >
   </a-date-picker>
  </div> 
</template>
<script>

import FyCalendar from './FyCalendar.js'

export default {
  components: {
    
  },
  mounted(){
    this.Calendar = new FyCalendar()
  },
  destroyed(){
    this.Calendar = null
  },
  data() {
    return {
     time:[],
     Calendar:null,
     dateCon:{
     }
    }
  },
    methods: {
    onChange(value, mode) {
      this.time[value,mode]
      console.log(value, mode);
    },
    renderDate(current){
      let num = current.date()
      let year = current.year(), month = current.month();
      let week = current['_d'].getDay()

      let key = year + '-' + month
      if (!this.dateCon[key]){
        this.dateCon[key] = this.Calendar.calendar(year,month)
        console.log(this.dateCon[key])
      }
      let obj = this.dateCon[key][num-1] || {} 
      let {
        lunarFestival,
        solarTerms,
        solarFestival,
        zhDay,
      } = obj

      let title = lunarFestival ? lunarFestival : solarTerms ? solarTerms :  solarFestival || zhDay
      let clss = 'ant-calendar-date'
      clss = week > 5 || week == 0 ? clss + ' cal-hols' : clss
      return (<div class={clss} >
          <div class="day-num">{num}</div>
          <div class="day-zh">{title}</div>
        </div>
        );

    }

  },
}

</script>


<style lang='scss' >
// #fff0f0 holis #e02d2d
// #f5f5f5 work #000
.my-dates{
  .ant-calendar{
    width:420px !important;
  }
  .ant-calendar-cell{
    height:50px; 
  }
  .ant-calendar-date{
    width: 50px;
    height: 50px;
    height:auto;
    position: relative;
    &.cal-hols{
      color:#e02d2d;
      background: #fff0f0;
    }
    span{
      position: absolute;
      top:0;
      left:0;
      color:#fff;
      &.d-work{
        background:#f43;
      }
      &.d-hols{
        background:#969799;
      }
    }
    .day-zh{
      font-size:12px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>


