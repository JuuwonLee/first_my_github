//--------------------apply() 메서드 이용


function person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// foo 빈 객체 생성
var foo = {};

// apply() 메서드 호출
person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);    

//--------------------call() 메서드 이용


// 생성자 함수
function person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// foo 빈 객체 생성
var foo = {};

// apply() 메서드 호출
person.call(foo, 'foo', 30, 'man');
console.dir(foo);    

//--------------------객체의 메소드를 호출시


//myObject 객체 생성
var myObject = {
    name : 'foo',
    sayMyname : function (){
        console.log(this.name);
    }
};

var otherObject = {
    name : 'bar'
};

//otherObjec sayName() 메서드
otherObject.sayMyname = myObject.sayMyname;

myObject.sayMyname();
otherObject.sayMyname();


//--------------------생성자 함수 호출시


// Person() 생성자 함수
var Person = function(name){
    // 함수 코드 실행 전
    this.name = name;
    // 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);


//--------------------함수 호출시 (1)


var test = 'This is test';
console.log(window.test);

//sayFoo() 함수
var sayFoo = function (){
    console.log(this.test); // sayFoo() 함수 호출 시 this는 전역 객체에 바인딩된다.
  
sayFoo(); // 자바스크립트에서는 함수를 호출할 때 this는 전역객체에 바인딩 된다.
}


//--------------------함수 호출시 (2)

//전역 변수 value 정의
var value = 100;

//myObject 객체 생성
var myObject = {
    value: 1,
    func1: function (){
        this.value += 1,
        console.log('func() called. this.value : ' + this.value);

        //func2() 내부 함수
        func2 = function (){
            this.value += 1;
            console.log('func2() called. this.value : ' + this.value);

            func3 = function (){
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            }

            func3(); //func1 내부 함수 호출
        }

        func2(); // func2() 내부 함수 호출
    }
};
myObject.func1(); //func1() 메서드 호출


//--------------------함수 호출시 (3)


var value = 100;

//myObject 객체 생성
var myObject = {
    value: 1,
    func1: function (){
        var that = this;

        this.value += 1,
        console.log('func1() called. this.value : ' + this.value);

        //func2() 내부 함수
        func2 = function (){
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);

            //func3() 내부 함수
            func3 = function (){
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }

            func3(); //func1 내부 함수 호출
        }

        func2(); // func2() 내부 함수 호출
    }
};
myObject.func1(); //func1() 메서드 호출
