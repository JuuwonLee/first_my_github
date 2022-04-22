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
