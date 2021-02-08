Date.prototype.addHours = function(h) {
  this.setHours(this.getHours()+h);
  return this;
}
let week = new Array(7);
week[0] = 'Sunday';
week[1] = 'Monday';
week[2] = 'Tuesday';
week[3] = 'Wednesday';
week[4] = 'Thursday';
week[5] = 'Friday';
week[6] = 'Saturday';

const dateNow = () => {
  let d = new Date(Date.now()).addHours(-7);
  return `${week[d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}


export default dateNow;