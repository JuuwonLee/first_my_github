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
