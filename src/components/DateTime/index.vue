<template>
  <div class="my-time"> 
    <a-date-picker 
    show-time 
    @change="onChange" 
    @panelChange="handlePanel"
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
    handlePanel(value, mode){
      if (mode === 'date') {
        let year = value._d.getFullYear(), month = value._d.getMonth();
        let key = year + '-' + month
        if (!this.dateCon[key]){
          this.dateCon[key] = this.Calendar.calendar(year,month)
        }
      }
    },
    renderDate(current){
      let num = current.date()
      let year = current.year(), month = current.month();

      let key = year + '-' + month
      if (!this.dateCon[key]){
        this.dateCon[key] = this.Calendar.calendar(year,month)
      }
     
      let obj = this.dateCon[key][num-1] || {} 
      let {
        lunarFestival,
        solarTerms,
        solarFestival,
        zhDay,
        color,
        isWeek,
        isRest,
        isWork,
      } = obj

      let title = lunarFestival ? lunarFestival : solarTerms ? solarTerms :  solarFestival || zhDay
      let csName = ['ant-calendar-date']
      if (isWeek) csName.push('cal-hols')
      if (isRest) csName.push('cal-rest')
      if (isWork) csName.push('cal-work')  

      return (<div class={csName.join(' ')}>
          {isRest ? <span>休</span> : ''}
          {isWork ? <span>班</span> : ''}
          <div class="day-num">{num}</div>
          <div class="day-zh" style={color ? {color:color} : ''}>{title}</div>
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
  .ant-calendar-selected-day{
    .ant-calendar-date{
      background:#bae7ff !important;
    }
  }
  .ant-calendar-date{
    width: 50px;
    height: 50px;
    height:auto;
    position: relative;
    &.cal-hols{
      color:#e02d2d;
      background-color:#fff0f0
    }
    &.cal-rest{
      color:#e02d2d;
      background-color:#fff0f0;
      span{
        background:#f43
      }
    }
    &.cal-work{
      background:#e8e6e6;
      color:#333;
      span{
        background:#666
      }
    }
    span{
      position: absolute;
      top:0;
      left:0;
      font-size:12px;
      height:14px;
      line-height:12px;
      color:#fff;
    }
    .day-zh{
      font-size:12px;
      white-space: nowrap;
    }
  }
}
</style>


