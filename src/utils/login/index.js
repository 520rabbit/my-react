// 保存请求头
const myToken = 'admin-token'
export function setToken(themeStatus){
  return localStorage.setItem(myToken,themeStatus)
} 

export function getToken(){
  return localStorage.getItem(myToken)
} 

// 保存静态资源数据
const mySate = 'state-data'
export function setState(data){
  return localStorage.setItem(mySate,data)
} 

export function getState(){
  return localStorage.getItem(mySate)
} 

export const randomWord = () => {
  var str = "",
    pos = "",
    arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  for (var i = 0; i < 16; i++) {
    pos = Math.round(Math.random() * arr.length);
    str += arr[pos];
  }
  return str;
}