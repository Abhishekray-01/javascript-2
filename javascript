Day-1
*****
	JavaScript is the Scripting Language

	JavaScript Released by Netscape

	Current Version of JavaScript is ES13

	ES Stands for ECMA Script

	The extension for JavaScript files is ".js"

	we will include in webpages with <script></script> tag

	JavaScript, used to convert the static webpages to dynamic webpages

	JavaScript, used to build the Angular,React,Node and VueJS,.....

	we can execute JavaScript in two ways.

		1) intrepreter

		2) node


	intrepreter available in Browsers

	node tool present in NodeJS

	JavaScript Execution is Synchronous Execution 
		(Code will execute line by line)

	Vendor Released the so many predefined objects.

		Ex.
				window

				document

				console

				Date

				---
				---
				---

	so, we can call JavaScript is the Object Based Scripting Language

Software Installations
**********************
1) download and install NodeJS

	NodeJS containes node tool

	node tool helps to execute the JavaScripy

	website : https://nodejs.org/en/download/

	file    : node-v16.14.0-x64.msi



2) download and install IDE

	IDE Stands for Integrated Development Environment

	Visual Studio Code IDE is Suggestable IDE to build the JS Applications

	VSCode IDE Given by Microsoft and Open Source IDE

website : https://code.visualstudio.com/docs/?dv=win

file    : VSCodeUserSetup-x64-1.64.2.exe


Execution of JavaScript
***********************

> node demo.js

	where "demo.js" is the name of the javascript file

	where "node" is the tool

	where "node" tool, helps to execute the JavaScript.



Day-2
*****

	+   (plus)

	-   (minus)

	*  (multiplication)

	/ (division)

	== (double equal)

	===  (triplle equal)

	&   (And)

	|   (OR)

	^ (XOR)

	!  (Bang)

	> (greater than)

	< (less than)


Day-3
*****
Variables
+++++++++
	- Variables are used to "store" the data

	Ex.
			string
			number
			boolean
			Arrays
			Objects
			---
			---
			---
	- we can declare the Variables by using "var" / "let" / "const"

	- "let" and "const" keyword introduced in "ES6"

	- Variables declaration should contain 

			a-z

			A-Z

			0-9

			$

			and 

			_

	- Variables declaration should not start with digits



console.log( 10+10 );                           //20
console.log( 10+"10" );                         //1010
console.log( 10 + +"10")                        //20
console.log( 10 - "10" );                       //0
console.log( 10 * "10" );                       //100
console.log( 10 / "10" );                       //1
console.log( "10" / "10" );                     //1
console.log( 1 / "0" );                         //Infinity
console.log( "10" / "A" );                      //NaN
//true -- 1
//false -- 0
console.log( true + true );                     //2
console.log( true + false + true - false);      //2
console.log( true / true );                     //1
console.log( true / false );                    //Infinity
console.log( false / true );                    //0
console.log( 2>1 );                             //true
console.log( 3 > 2 > 1);                        //false
console.log( 1<2<3 );                           //true
// == (value)
// === (value with datatype)
console.log( 10 == "10" );                      //true
console.log( 10 === "10" );                     //false
console.log( 1 == "one" );                      //false
console.log( 1 === "one" );                     //false
console.log( 0.1+0.2 );                         //0.30000000000000004
console.log( 0.1+0.2 == 0.3 );                  //false
console.log( 0.1+0.2 === 0.3 );                 //false


//BODMAS
//B - BRACKET
//O - OF
//D - DIVISION
//M - MULTIPLICATION
//A - ADDITION
//S - SUBTRACTION
console.log( (10+5)/(10-5) );       //3
console.log( 10 + 5/10 - 5 );       //5.5

/string
//collection of "chatacters" called as "string"
//we will declare the string by using ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as "template literal"
//``(backtick) operator used to define the paragraphs (multiline strings)
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one}.....${sub_two}....${sub_three}`;
console.log( mern_stack );
//ReactJS.....NodeJS....MongoDB




//numbers
//decimal
//double / float
//hexadecimal
//octal
//binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, double_num, hexadecimal_num, octal_num, binary_num );



//boolean
//true / false
//true - 1
//false - 0
var flag = true;
var flag1 = false;
console.log( flag );
console.log( flag1 );
console.log( true + true );             //2
console.log( true + false );            //1
console.log( 1 + true );                //2
console.log( 1 / true );                //1
console.log( true / true );             //1
console.log( true / false );            //Infinity
console.log( true / "A" );              //NaN


//undefined
var phone;
console.log( phone );               //undefined

phone = null;
console.log( phone );               //null



//bigint
//bigint is the "datatype"
//used to represent the "large" numbers
//bigint numbers suffix with "n"
// >2^53 - 1
var large_number = 28169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946n;
console.log( large_number );



var x = Symbol("hello");
console.log(x);



//string
//number
//boolean
//undefined
//null
//bigint
//Symbol
console.log( typeof "Hello" );                  //string
console.log( typeof 100 );                      //number
console.log( typeof true );                     //boolean
console.log( typeof undefined );                //undefined
console.log( typeof null );                     //object
console.log( typeof [] );                       //object
console.log( typeof function(){});              //function
console.log( typeof {} );                       //object
console.log( typeof 100n );                     //bigint
console.log( typeof Symbol("Hello") );          //symbol



//let keyword
//let keyword introduced in ES6
//let keyword used to declare the variables

//differences


/*
    for(let i=0;i<5;i++){
    }
    console.log(i);             //var : 5    //let : ReferenceError: i is not defined
    //var keyword breaks the "scope" rule
    //let keyword "obeys" the scope rule
*/


/*
    console.log( data );                //var:undefined     //let:ReferenceError: Cannot access 'data' before initialization
    let data = 100;
    //accessing the variable before its declaration and initilization with var keyword technically called as variable hoisting
    //variable hoisting raised because of var keyword
    //we can overcome variable hoisting with the help of let keyword
*/
/*
    //global variable
    let data = 100;
                        
    //block of code
    {
        //local variable
        let data = 200;
    }
    console.log( data );                //var:200           //let:100
    //var keyword raised the global polluting issue
    //let keyword overcomes the global polluting issue
    //effect of blocks of code on global members called as global polluting issue
*/

/*
    let data = 100;
    let data =  200;
    console.log( data );            //var:200       //let:SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword overcomes the duplicate variables
*/

/*
            var                                             let
    
    var keword introduced in "ES1"                let keyword introduced in "ES6"
    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables
    variable hoisting issue raised                we can overcome variable hoisting     
    with var keywors                              with let keyword
    scope rule break by var keyword               let keyword obeys the scope rule
    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword
*/

<!--
    functions
    *********
        - particular "business logic" called as "function"
        - functions are used to "reuse" the business logic
        - function with particular name called as "named" function
        - function without name called as "anonymous" function
    
    named functions
    ***************
    1) function definition
    2) function calling
    function definition
    +++++++++++++++++++
   function functionname(param1,param2,param3,.....paramn){
       business logic
   }
   function calling
   ++++++++++++++++
   functionname(arg1,arg2,arg3,......arg n);
-->

<!--
<script>
    function fun_one(){
        return "welcome to named functions";
    };
    console.log( fun_one() );                           //welcome to named functions
</script>
-->


<!--
<script>
    function fun_one(){
        return "welcome to nodejs";
    }
    console.log( fun_one );
</script>
-->
<!--
<script>
    function fun_one(){
        return fun_two;
    }
    function fun_two(){
        return "Hello";
    }
    console.log( fun_one()() );             //Hello
</script>
-->

<script>
    function fun_one(param1,param2,param3){
        console.log( param1, param2, param3 );
    }
    fun_one("Hello_1","Hello_2","Hello_3");                 //Hello_1 Hello_2 Hello_3
    fun_one();                                              //undefined undefined undefined
    fun_one(undefined,"Hello_2");                           //undefined 'Hello_2' undefined
    fun_one(null,null,null);                                //null null null
</script>


<!--
<script>
    function fun_one(param1,param2,param3){
        console.log( param1, param2, param3 );
@@ -67,6 +69,153 @@
    fun_one(undefined,"Hello_2");                           //undefined 'Hello_2' undefined
    fun_one(null,null,null);                                //null null null
</script>
-->

<!--
<script>
    function fun_one(...param1){
        console.log( param1 );
    };
    fun_one("Hello_1","Hello_2");                       // ['Hello_1', 'Hello_2']
    fun_one(100,200,300,400,500);                       //[100, 200, 300, 400, 500]
    fun_one();                                          //[]
    fun_one(undefined,undefined);                       //[undefined, undefined]
    fun_one(null,null);                                 //[null, null]
</script>
-->


<!--
    <script>
        function fun_one(...param1,...param2){}
        //we can supply only one spread operator per function
    </script>
-->

<!--
<script>
    function fun_one(...param2,param1){
    }
    //position of spread operator should be the last in occurances
</script>
-->


<!--
<script>
    function fun_one(param1,...param2 ){
        console.log( param1, param2 );
    }
    fun_one();                                  //undefined []
    fun_one("Hello_1","Hello_2");               //Hello_1 ['Hello_2']
    fun_one("Hello_1","Hello_2","Hello_3");     //Hello_1  ['Hello_2', 'Hello_3']
    fun_one(undefined,undefined);               //undefined [undefined]
    fun_one(null,null,null);                    //null  [null, null]
</script>
-->


<!--default parameters in functions
ES6-->

<!--
<script>
    function fun_one(param1="Hello_1",param2="Hello_2",param3="Hello_3"){
        console.log( param1, param2, param3 );              
    }
    fun_one();                                                      //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1","Welcome_2","Welcome_3");                   //Welcome_1 Welcome_2 Welcome_3
    fun_one(undefined,undefined,undefined);                         //Hello_1 Hello_2 Hello_3
    fun_one(null,null,null);                                        //null null null
</script>
-->


<!--
<script>
    function fun_one(param1,param2="Hello_2",...param3){
        console.log( param1, param2, param3 );
    }
    fun_one();                                                  //undefined 'Hello_2' []
    fun_one("Hello_1");                                         //Hello_1 Hello_2 []
    fun_one("Hello_1",undefined,"Hello_3");                     //Hello_1 Hello_2 ['Hello_3']
    fun_one(undefined,undefined,undefined);                     //undefined 'Hello_2' [undefined]
    fun_one(null,null,null);                                    //null null [null]
</script>
-->

//passing "one function definition" to "another function" as a "parameter" called as "callback" function


/*
    function fun_one(param1){
        console.log( param1() );
    };
    fun_one( function fun_two(){
        return "Hello";
    } );
    //Hello
*/


/*
    function fun_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    };
    fun_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    } );
    //Hello_1 Hello_2 Hello_3
*/

/*
    let fun_one = (param1,param2,param3)=>{
        console.log( param1(), param2(), param3() );
    };
    fun_one(()=>{
        return "hello_1";
    },()=>{
        return "hello_2";
    },()=>{
        return "hello_3";
    });
    //hello_1 hello_2 hello_3
*/


/*
    function fun_one( param1 ){
        return param1("Hello_1","Hello_2","Hello_3");
    }
    fun_one( (arg1,arg2,arg3)=>{
        console.log( arg1, arg2, arg3 );
    } );
    //Hello_1 Hello_2 Hello_3
*/


/*
    function fun_one(param1,param2,param3){
        return param1("Hello_1")+"...."+param2("Hello_2")+"...."+param3("Hello_3");
    }
    fun_one( (arg1)=>{
        console.log( arg1 );                //Hello_1
    }, (arg1)=>{
        console.log( arg1 );                //Hello_2
    }, (arg1)=>{
        console.log( arg1 );                //Hello_3
    } );
*/

function add(num,callback){
    return callback(num+5,false);
}

function sub(num,callback){
    return callback(num-3,false);
}

function mul(num,callback){
    return callback(num*2,false);
}

function div(num,callback){
    return callback((num/2)-2,false);
}


add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        });
    }
});
//5
//callback hell
//promises






<!--
    anonymous functions
    The function without name called as "anonymous" functions
    anonymous functions also called as "arrow" functions
    arrow functions introduced in "ES6"
    arrow functions we will represent with "=>"
    arrow functions behaves like callback functions
    Syntax
    ******
    1) function definition
    2) function calling
    function definition
    ********************
    let varname = (param1,param2,param3,.....param n)=>{
        business logic
    }
    function calling
    ****************
    varname(arg1,arg2,arg3,....arg n);
-->


<!--
<script>
    let fun_one = ()=>{
        return "welcome to arrow functions";
    }
    console.log( fun_one() );
    //welcome to arrow functions
</script>
-->

<!--
<script>
    let fun_one = ()=> "Hello";
    console.log( fun_one() );               
    //Hello
</script>
-->

<!--
<script>
    let fun_one = (param1,param2,param3)=>{
        console.log( param1, param2, param3 );
    }
    fun_one("Hello_1","Hello_2","Hello_3");
    //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1","Welcome_2","Welcome_3");
    //Welcome_1 Welcome_2 Welcome_3
    fun_one();
    //undefined undefined undefined
    fun_one(undefined,"Hello_2");
    //undefined 'Hello_2' undefined
    fun_one(null,null,null);
    //null null null
</script>
-->


<!--
<script>
    let fun_one = (param1,param2)=>{
        console.log( param1(), param2() );
    };
    fun_one( ()=>{ return "Hello_1" }, ()=>{ return "Hello_2" } );
    //Hello_1 Hello_2
</script>
-->






//Execution of tasks with "dependencies" between them called as "Promises"
//Promises are used to create the "Asynchromous" Calls
//1) Promise Creation
//2) Promise Consumption
//Producer will create the Promises
//Producer will create the Promises with the help of "Promise" class
//Consumer will consume the Promises in two ways
//1) then()
//2) async & await keywords

/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("welcome to promises");
    }); 
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("welcome to promises with timer");
        },5000);
    });
    async function my_fun(){
        let res = await promise1;
        console.log(res);
    }
    my_fun();
    //welcome to promises with timer
*/

function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
};
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
};
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
};
function div(num){
    return new Promise((resolve,reject)=>{
        resolve( (num/2)-2 );
    })
};
async function consume(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log( "AddRes...",addRes );
    console.log( "SubRes...",subRes );
    console.log( "MulRes...",mulRes );
    console.log( "DivRes...",divRes );
}
consume();
