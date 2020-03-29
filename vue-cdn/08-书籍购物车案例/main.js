const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2019-10',
        price: 58.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程》',
        date: '2019-03',
        price: 69.00,
        count: 1
      },
      {
        id: 3,
        name: '《java编程思想》',
        date: '2008-12',
        price: 88.00,
        count: 1
      },
      {
        id: 4,
        name: '《设计模式》',
        date: '2018-11',
        price: 76.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandler(index){
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // 1.普通for循环
      // for(let i=0;i<this.books.length;i++){
      //   totalPrice = totalPrice + this.books[i].price * this.books[i].count;
      // }
      // 2. 使用in的方式
      // for(let i in this.books){
      //   totalPrice = totalPrice + this.books[i].price * this.books[i].count;
      // }
      // 3.使用of的方式
      for(let item of this.books){
        totalPrice += item.price * item.count;
      }
      return totalPrice;
    }
  },
  filters: {
    //使用过滤器格式化价格
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
});


//jsvsscript高阶函数使用
//filter/map/reduce
const nums = [10,36,115,96,456,32,789];

//1.filter函数的使用(获取所有小于100的值)
let newNums = nums.filter(function (n) {
  return n < 100;
});
console.log(newNums);

//2.map函数的使用（将值乘以2）
let newNums2 = newNums.map(function (n) {
  return n * 2;
});
console.log(newNums2);

//3.reduce的使用（归并求和）
let sum = newNums2.reduce(function (preValue,n) {
  return preValue + n;
},0);
console.log(sum);

//4.合并写法
let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n *2;
}).reduce(function (preValue,n) {
  return preValue + n;
},0);
console.log(total);

//5. 简化写法
let total2 = nums.filter(n => n < 100).map( n => n*2).reduce((pre,n)=>pre+n);
console.log(total2);