class Player{
    // 일반적인 생성자, this를 이용해 필드변수 초기화
    public name: string = '';
    public age: number = 0;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Player2{
    //타입스크립트에서는 아래와 같은 방법으로 지정 가능
    constructor(public name: string, public age: number) { }
}
const player = new Player2("SON", 7);
console.log(player);