let task2 = document.getElementById('task2')
/*
let Task2 = function(h1Content, div1Content, img) {
    this.h1 = document.createElement('h1')
    h1.innerHTML = h1Content;
    h1.setAttribute('style', 'color: red')
    task2.appendChild(this.h1)
    
    this.div1 = document.createElement('div')
    div1.innerHTML = div1Content;
    task2.appendChild(this.div1)
    console.log(div1.html)
    
    this.img = document.createElement('img')
    this.img.setAttribute('href', 'https://i.pinimg.com/originals/b5/ef/c6/b5efc64fbda57a0c0a3a30d944edef41.png?q=60')
    task2.appendChild(this.img)

}

let Doc = {
    h1: 'Lorem ipsum dolor sit',
    div1: 'Amet consectetur adipisicing elit. Ullam doloribus provident rerum omnis reiciendis corrupti impedit aperiam ducimus, minus at eum dicta?',
    img: '',
    
}
Task2(Doc.h1, Doc.div1, Doc.img)

*/

let Task2 = function(h1, img) {
    this.h1 = h1;
    this.img = img;
}
let Doc = new Task2();

Doc.h1 = document.createElement('h1');
Doc.h1.innerHTML = 'Lorem ipsum dolor sit';
task2.appendChild(Doc.h1);

//картинка на отображается, хотя видна в консоли
Doc.img = document.createElement('img');
Doc.img.setAttribute('href', 'https://i.pinimg.com/originals/b5/ef/c6/b5efc64fbda57a0c0a3a30d944edef41.png?q=60');
task2.appendChild(Doc.img);

//не добавился
let div2 = Doc.create('div')
Doc.html(div2, ['Ullam doloribus provident rerum omnis reiciendis corrupti impedit aperiam ducimus'])
