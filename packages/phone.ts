/*
 * @Author: shijianzhong
 * @Date: 2021-12-22 08:17:56
 * @LastEditors: shijianzhong
 * @LastEditTime: 2021-12-22 08:36:33
 * @Description: file content
 */

/**
 * 因此手机号的部分号码
 * @param phone 手机号
 * @param startIndex 替换的开始位置
 * @param len 替换的长度
 * @param replacestr 替换的代串，缺省为*
 * @returns 返回被代串替换隐藏部分的手机号
 */
export const hidePhoneMidNumber=(phone:string,startIndex:number, len:number,replacestr='*'):string=>{
  let result = Array.from(phone);
  let replaceStr = ''.padStart(len,replacestr)
  result.splice(startIndex,len,replaceStr);
  return result.join("");
}
export const helloWorld = ()=>{
  return 'helloWorld'
}