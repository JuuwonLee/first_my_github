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