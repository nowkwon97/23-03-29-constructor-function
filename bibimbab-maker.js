const sevenSourceBibimbab = {
  rice: "쌀밥",
  sauce: "비빔장",
  source1: "시금치",
  source2: "콩나물",
  source3: "김",
  source4: "김치",
  source5: "참기름",
  source6: "계란",
  source7: "고사리"
};

function personalSevenSourceBibim(rice, sauce, source1, source2, source3, source4, source5, source6, source7) {
  this.rice = rice;
  this.sauce = sauce;
  this.source1 = source1;
  this.source2 = source2;
  this.source3 = source3;
  this.source4 = source4;
  this.source5 = source5;
  this.source6 = source6;
  this.source7 = source7;
};

const a = new personalSevenSourceBibim("쌀밥", "비빔장", "시금치", "콩나물", "김", "김치", "참기름", "계란", "고사리");
const b = new personalSevenSourceBibim("흑미밥", "고추장", "삼겹살", "막창", "곱창", "대창", "꼬들살", "뽈살", "계란");
console.log(a);
console.log(b);