const a  = {val : 1}
const b = {val : 2}
const c = {val : 3}
const d  = {val : 4}
const e = {val : 5}
const f = {val : 6}


a.next  = b
b.next  = c
c.next  = d
d.next  = e
e.next  = f

//traverse
function tQ(){
  let pointer = a 
  while(pointer){
    console.log(pointer.val)
    pointer = pointer.next
  }
}
// tQ()
//1
// 2
// 3
// 4
// 5
// 6


//insert g into a and b 
const g = {val : 'g'}

a.next = g 
g.next = b 
// tQ()
// 1
// g
// 2
// 3
// 4
// 5
// 6


//delete g 
a.next = b 
tQ()
// 1
// 2
// 3
// 4
// 5
// 6

