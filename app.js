//function sum (a,b){
    //return a+b;

//}
//let array=[1,2];
//const mul= array[0]+array[1];
//console.log(mul); 
//const people=[
  //  {Name:"alice",age:25},
    //{Name:"x",age:30},
    //{Name:"y",age:35},
//];
//const oldestPerson=people.reduce((oldest,person)=>person.age>oldest.age?person:oldest);
//console.log(oldestPerson);
//let mydate=new Date(2024,11,3);
//mydate.getFullYear=function(){
  //  console.log("new date function is added");
//}
//const parent={
  //  a:10,
    //b:20,
    //sum:function(){
      //  console.log(this.a+this.b);
    //}
//}
//const child={
  //  c:20,
    //d:30,
    //multiply:function(){
      //  console.log(this.c*this.d);
    //}
//}
//child.__proto__ = parent;

//let arr=[1,2,3,4,5]
//const a = arr.toSpliced(2,3,4,6);
//console.log(a);
//console.log(arr);
const  textArea=document.querySelector(".textarea");
const button=document.querySelector(".buttoninput");
const todoList=document.querySelector(".todolist");
button.addEventListener("click",addToDoListItem);
function addToDoListItem()
{
console.log("button clicked");
const toDoDiv=document.createElement("div");
toDoDiv.classList.add("itemall");
//here new para created
const item=document.createElement("P");
item.innerHTML=textArea.value;
//new class is added here
item.classList.add("item");
//new item is added inside tododiv
toDoDiv.appendChild(item);
//empty text block will not add even if we click empty 
if (textArea.value=='')return;
//here the new dodolist gets aadded inside to do div
todoList.appendChild(toDoDiv);
textArea.value='';
//to add abutton
const deleteButton=document.createElement("button");
toDoDiv.appendChild(deleteButton);
deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
//new class of trash button added for styling
deleteButton.classList.add("trash-button");

}
todoList.addEventListener("click",deleteItem);
function deleteItem(e){
 const item=e.target;
 console.log(item);
 if(item.classList[0]==="trash-button"){
  const parent=item.parentElement;
  parent.remove();
 }
}