/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if(s.length%2 !== 0) return false
  let map  = {
      "{":"}",
      "[":"]",
      "(":")"
  }
  let res = []
  
  for(let i=0; i<s.length; i++){
      if(map[s[i]]){//左括号入栈
          res.push(s[i])
      }else{//右括号
          //1res为空  pop 为undefined
          //2res不为空 pop 为左括号 map[左括号] 是否等于右括号
          //综合为
          if(s[i] !== map[res.pop()]){
              return false  
          }
      }
  }
  
  //判断栈是否为空
  return res.length == 0
};

//https://leetcode.com/problems/valid-parentheses/

//T F T T
['{}', '[' , '[{}]' ,"()[]{}"].forEach(i =>{
   console.log( isValid(i))
})