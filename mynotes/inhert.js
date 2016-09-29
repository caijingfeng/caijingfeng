///对象的赋值

//定义一个父类（基类），在构造函数内，不仅可以包含属性，还可以包含方法（函数）
function Parent(name,age){
    this.name = name
    this.age = age
    this.eat = function(){
        console.log('够着函数内的方法')
    }
}
//对象的方法和属性，不仅可以包含在构造函数内部，还可以放到对象的原形链上

Parent.prototype.sex = "男"
//
Parent.prototype.sleep = function(){
    console.log('原形链上的方法')
}
//类方法只能通过
Parent.height = "175cm"
Parent.run = function(){
    console.log('类（静态方法）方法')
}

//对象在访问的时候，要实例化（把共性的）
var person = new Parent("cjf",34)

Parent.run()
// console.log(person.name)
// console.log(person.sex)
// person.eat()
// person.sleep()

///访问对象的属性时有两种方法:1.打点调用，2属性索引,所以传属性名称
// console.log(person['name'])
// person['eat']()



//对象的赋值，把两个对象指向同一个地址（指针）,一个人有两个名字，改变一个人的值，等于改变另一个人的值

// var person2 = person

//对象的复制 相当于两个人具有同一个名字

// var person3 = {
//     city:'厦门'
// }
// //浅复制
// function copyObject(copy,coptTo){
//     var coptTo = {}
//     if(copy instanceof Object){
//           for(var attr in copy){
         
//           //hasOwnProperty()判断属性是否在构造函数内    
//           coptTo[attr] = copy[attr]
//        }
//     }
  
//     return coptTo
// }

// var person4 = copyObject(person,person3)

// // console.log(result ==person3)

// console.dir(person4)

// console.dir(person)


//1对象冒充

 function Child(name,age,weight){

    
      this.parent = Parent
      this.parent(name,age)
      delete parent

      this.weight = weight

 }

 var child = new Child('lili',18,50)
 console.dir(child)

//  //2.构造函数继承

//  function Child2(name,age,weight){
//      Parent.call(this,name,age)
//      this.weight = weight
//  }

//  var child2 = new Child2('lili',18,50)
//   console.dir(child2)

  

  //总结构造函数继承只能继承构造函数内的属性和方法

//  function Child3(name,age,weight){
//      this.weight = weight
//  }

//  Child3.prototype = Object.create(Parent.prototype)
//  Child3.prototype.constructor = Child3

//  var child3 = new Child3('王五',18,50)
//   console.dir(child3)

//Child
//混合模式
 //构造函数继承加原型链继承

