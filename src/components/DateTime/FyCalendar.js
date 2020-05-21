export default class FyCalendar {
  constructor() {
    // this.el = el
    // 1900 -2100 农历换算。
    this.lunarInfo = new Array(
      0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
      0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
      0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
      0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
      0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
      0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
      0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
      0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
      0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
      0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
      0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
      0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
      0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
      0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
      0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
      0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
      0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
      0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
      0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
      0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
      0x0d520);

    // 平年的月份日期
    this.solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    // 干支
    this.Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
    this.Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
    // 生肖
    this.Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");

    // 农历标识
    this.nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
    this.nStr2 = new Array('初', '十', '廿', '卅', '　');

    // 24节气 绿色标识
    this.solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
    this.sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);

    // 中国传统节日 红色标识
    this.chinaFtv = new Array("0101*春节", "0115 元宵节", "0505*端午节", "0707 七夕情人节", "0715 中元节", "0815*中秋节", "0909 重阳节", "1208 腊八节", "1223 小年", "1230*除夕");

    // 国际节日 分月 蓝色标识
    this.interFtv = [
      ["0101*元旦"],
      ["0214 情人节"],
      ["0308 妇女节", "0312 植树节", "0315 消费者权益日", "0321 世界森林日、世界儿歌日", "0322 世界水日", "0323 世界气象日", "0324 世界防治结核病日"],
      ["0401 愚人节", "0407 世界卫生日", "0422 世界地球日"],
      ["0501*劳动节", "0504 青年节", "0505 碘缺乏病防治日", "0508 世界红十字日", "0512 国际护士节", "0515 国际家庭日", "0517 世界电信日", "0518 国际博物馆日", "0520 全国学生营养日", "0523 国际牛奶日", "0531 世界无烟日"],
      ["0601 儿童节", "0605 世界环境日", "0606 全国爱眼日", "0616 防治荒漠化和干旱日", "0623 国际奥林匹克日", "0625 全国土地日", "0626 国际反毒品日"],
      ["0701 建党节 香港回归纪念 国际建筑日", "0707 中国人民抗日战争纪念日", "0711 世界人口日"],
      ["0801 建军节", "0808 父亲节"],
      ["0908 国际扫盲日", "0909 毛泽东逝世纪念", "0910 教师节", "0916 国际臭氧层保护日", "0920 国际爱牙日", "0927 世界旅游日", "0928 孔子诞辰"],
      ["1001*国庆节 国际音乐日", "1004 世界动物日", "1006 老人节", "1008 全国高血压日 世界视觉日", "1009 世界邮政日", "1015 国际盲人节", "1016 世界粮食日", "1017 世界消除贫困日", "1024 联合国日"],
      ["1108 中国记者日", "1109 消防宣传日", "1112 孙中山诞辰纪念", "1114 世界糖尿病日", "1117 国际大学生节"],
      ["1201 世界艾滋病日", "1203 世界残疾人日", "1209 世界足球日", "1220 澳门回归纪念", "1225 圣诞节", "1226 毛泽东诞辰纪念", "1229 国际生物多样性日"]
    ]
  }

  lYearDays(y) {
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
    return (sum + this.leapDays(y));
  }

  leapDays(y) {
    if (this.leapMonth(y)) return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    else return (0);
  }

  leapMonth(y) {
    return (this.lunarInfo[y - 1900] & 0xf);
  }

  monthDays(y, m) {
    return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
  }

  solarDays(y, m) {
    if (m == 1)
      return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
    else
      return (this.solarMonth[m]);
  }

  cyclical(num) {
    return (this.Gan[num % 10] + this.Zhi[num % 12]);
  }

  sTerm(y, n) {
    var offDate = new Date((31556925974.7 * (y - 1900) + this.sTermInfo[n] * 60000) - 2208549300000);
    return (offDate.getUTCDate());
  }

  // 农历转中文 
  chanDay(d) {
    var s;
    switch (d) {
      case 10:
        s = '初十';
        break;
      case 20:
        s = '二十';
        break;
      case 30:
        s = '三十';
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return (s);
  }

  //  24节气 计算 年 月 月份-1  24节气 绿色 理论上一个月2个节气
  getSolarTerm(year, month, dateInfo) {

    let day1 = this.sTerm(year, month * 2) - 1
    let day2 = this.sTerm(year, month * 2 + 1) - 1
    dateInfo[day1].solarTerms = this.solarTerm[month * 2];
    dateInfo[day2].solarTerms = this.solarTerm[month * 2 + 1];
    dateInfo[day1].color = 'green'
    dateInfo[day2].color = 'green'

    return dateInfo
  }

  // 中国传统节日 节日少可以遍历 need check
  getChaneseDay(day, month, len,lDPOS,n,dateInfo) {
    for (let i in this.chinaFtv)
      if (this.chinaFtv[i].match(/^(\d{2})(.{2})([+*])(.+)$/)) {
        let tmp1 = Number(RegExp.$1) - month;
        if (tmp1 == -11) tmp1 = 1;
        if (tmp1 >= 0 && tmp1 < n) {
          let tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1;
          if (tmp2 >= 0 && tmp2 < len) {
            dateInfo[tmp2].lunarFestival += RegExp.$4 + ' ';
            dateInfo[tmp2].color = '#ff5f07';
          }
        }
      }
  }

  // 国际节日 need 优化
  getSolarDay(m,dateData) {

    let list = this.interFtv[m]
    for (let i in list)
      if (list[i].match(/^(\d{2})(\d{2})([+*])(.+)$/))
        if (Number(RegExp.$1) == (m + 1)) {
          let date = Number(RegExp.$2) - 1
          dateData[date].solarFestival += RegExp.$4 + ' ';
          dateData[date].color += 'blue'
        }
    return dateData
  }

  // 构建农历日子
  lunarDate(objDate) {

    var i,
      leap = 0,
      temp = 0,
      obj = {};

    var offset = Math.floor((objDate.getTime() + 2206425600000) / 86400000);

    obj.dayCyl = offset + 40;
    obj.monCyl = 14;

    for (i = 1900; i < 2100 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
      obj.monCyl += 12;
    }
    if (offset < 0) {
      offset += temp;
      i--;
      obj.monCyl -= 12;
    }
    obj.year = i;
    obj.yearCyl = i - 1864;
    leap = this.leapMonth(i);
    obj.isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == (leap + 1) && obj.isLeap == false) {
        --i;
        obj.isLeap = true;
        temp = this.leapDays(obj.year);
      } else {
        temp = this.monthDays(obj.year, i);
      }
      if (obj.isLeap == true && i == (leap + 1)) obj.isLeap = false;
      offset -= temp;
      if (obj.isLeap == false) obj.monCyl++;
    }
    if (offset == 0 && leap > 0 && i == leap + 1)
      if (obj.isLeap) {
        obj.isLeap = false;
      }
    else {
      obj.isLeap = true;
      --i;
      --obj.monCyl;
    }
    if (offset < 0) {
      offset += temp;
      --i;
      --obj.monCyl;
    }
    obj.month = i;
    obj.day = offset + 1;
    return obj
  }

  // 初始化一个日期
  calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {
    // S打头是公历、L打头是农历 C打头是干支表示 
    return {
      sYear: sYear,
      sMonth: sMonth,
      sDay: sDay,
      week: this.nStr1[week],
      isWeek: week,
      lYear: lYear,
      lMonth: lMonth,
      lDay: lDay,
      zhDay: this.chanDay(lDay),
      isLeap: isLeap,
      cYear: this.cyclical(cYear),
      cMonth: this.cyclical(cMonth),
      cDay: this.cyclical(cDay),
      color: '',
      lunarFestival: '',
      solarFestival: '',
      solarTerms: '',
    }
  }
  // 返回一个月内的 日期数据 包含节假日 农历
  // year month  month - 1  js month 
  calendar(y, m) {
    var sDObj,
      lDObj,
      lD = 1,
      lX = 0;
  
    var lDPOS = new Array(3);
    var n = 0;
    // var firstLM = 0;

    sDObj = new Date(y, m, 1);

    let length = this.solarDays(y, m); // 一个月多少天
    let firstWeek = sDObj.getDay();//本月1号是 周几

    let dateData = {}

    // 遍历 构建信息
    for (var i = 0; i < length; i++) {

      sDObj = new Date(y, m, i + 1);
      lDObj = this.lunarDate(sDObj);

      let {
        year,
        month,
        day,
        isLeap,
        yearCyl,
        monCyl,
        dayCyl
      } = lDObj

      lD = day;

      if (lD > lX) {
        lX = isLeap ? this.leapDays(year) : this.monthDays(year, month);
        // if (n == 0) firstLM = month;
        lDPOS[n++] = i - lD + 1;
      }

      let isWeek = (i + firstWeek) % 7
      dateData[i] = this.calElement(y, m + 1, i + 1, isWeek, year, month, day++, isLeap, yearCyl, monCyl, dayCyl++);
    }

    dateData = this.getSolarTerm(y, m ,dateData);
    dateData = this.getSolarDay(m,dateData)
    // dateData = this.getChaneseDay(dateData)
    // TODO 法定节假日 补休 节假日 的标识
    return dateData
  }
}