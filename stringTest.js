let word= "madam"

let rev=""

for(let i=word.length-1;i>=0;i--){
    rev= rev + word.charAt(i)
    
}
console.log(rev)
if(rev===word){
    console.log("yes the word is a palindrome")
}

let statement='level'

let temp = statement.split("")
let newk=""

console.log(temp)

for(let i=temp.length-1; i>=0; i--){
    newk= newk + temp[i]
}
console.log(newk)
if(newk==statement){
    console.log(" yes palindrome it is")

}else{
    console.log("not a palindrome")
}
