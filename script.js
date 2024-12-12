// function sayHello() {
//     alert("Hello World"); 
// }
// document.write('This is my first JavaScript page.<br>'); 
// document.write('<h1>It is my first program in JavaScript.</h1>');
// var pi = 3.14;
// var person = "Are you God?";
// var answer = "Yes, I am.";
// document.write(pi + "<br>"); 
// document.write(person + "<br>"); 
// document.write(answer + "<br>");
// function myFunction() {
//     var carName = "Welcome"; 
//     document.getElementById("demo").innerHTML = carName; 
// }
// var person = {
//     firstname : "jatin",
//     lastname : "Singh",

//     id : "5566",

//     getinfo :function(){
//         return this.firstname + " "+ this.lastname;
//     }
// }

// document.getElementById("demo").innerHTML = person.getinfo();
{/* <script type="text/javascript">
    var person = {
        name:"Jitendra Chauhan",
        age: 50,
        isMarried: true,
        child: "cheeku",
        getInfo: function () {
        },
        address: {
            street: "Vinay Nagar",
            flatNo: 201
        }
    };
    console.log(person["name"]);
    document.write(person["name"]);
    document.write("<br>");
    console.log(person.name);
    document.write(person.name);
</script> */}
//         <scrip>
//         var carName = "volvo"; // Declare `carName` globally if needed outside the function

//         function myFunction() {
//             document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
//         }
//         myFunction();

//         document.getElementById("demo2").innerHTML = typeof carName;
//     </script>
// </body>
// </html>
// var locates={
//     europe:function(){
//         var myFriend="harshit";
//         var france=function(){
//             var paris=function(){
//                 console.log(myFriend);
//             };
//             paris();
//         };
//         france();
//     }
// };
// locates.europe();
// function show(){
//     var a="hii hello byee";
//     document.write(a+"<br>");
//     function disk(){
//         var b="namaste jai shrree ram";
//         document.write(b+"<br>");
//     }
//     disk();
// }
// show();
// var myVar="global";
// function check(){
//     var myVar="local";
//     document.write(myVar);
// }
var name='dhan';
function first(){
    var a ='hello';
    Second();
    var x = a + name ; 
    console.log() 
}
function Second(){
    var b = 'hi';
    third();
    var z=b+name;
    console.log()

}
function third(){
    var c = 'hye';
    third();
    var z=c+name;
    console.log()
}
    first();
