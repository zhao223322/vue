import {fillzero} from './fillzero.js'
export const date = time => {
  let d = new Date();
  d.setTime(time);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let hour = d.getHours();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`;
}