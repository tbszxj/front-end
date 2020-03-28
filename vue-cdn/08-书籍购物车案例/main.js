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
      for(let i=0;i<this.books.length;i++){
        totalPrice = totalPrice + this.books[i].price * this.books[i].count;
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