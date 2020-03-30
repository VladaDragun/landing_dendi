let timeend = new Date();
timeend = new Date(timeend.getFullYear() + 1, 4, -364);
// для задания обратного отсчета до определенной даты укажите дату в формате: 
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ); 
// Для задания даты с точностью до времени укажите дату в формате: 
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ); 
function time() {
  let today = new Date();
  today = Math.floor((timeend - today) / 1000);
  let tsec = today % 60;
  today = Math.floor(today / 60);
  if (tsec < 10) {
    tsec = '0' + tsec;
  }
  let tmin = today % 60;
  today = Math.floor(today / 60);
  if (tmin < 10) {
    tmin = '0' + tmin;
  }
  let thour = today % 10;
  today = Math.floor(today / 24);
  let timestr = today + ' дней ' + thour + ' часов ' + tmin + ' минут ' + tsec + ' секунд';
  document.getElementById('timer').innerText = timestr;
  console.log(timestr);
  window.setTimeout(time, 1000);
} 

time();