// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAfr7lgfp8GWa5Bi1unlzQTPikwlQa8WiA",
    authDomain: "todolist-2f5b1.firebaseapp.com",
    databaseURL: "https://todolist-2f5b1.firebaseio.com",
    projectId: "todolist-2f5b1",
    storageBucket: "todolist-2f5b1.appspot.com",
    messagingSenderId: "300305304667",
    appId: "1:300305304667:web:faddabbab4fcc9c99bc37e"
  };
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	var app = new Vue({
	  //マウントする要素
	  el:'#page',

	  //アプリケーションで使用するデータ
	  data: {
	    todo:[],
	    newItemName : '',
	    newItemPrice: '',
	    newItemMessage: ''
	  },

	  // 算出プロパティ
	  computed: {
	  },

	  // ライフサイクルフック
	  created: function(){
	  },

	  // アプリケーションで使用するメソッド
	  methods: {
	    doAdd: function(){
	      this.todo.push({
	        name:this.newItemName,
	        price:this.newItemPrice,
	        message:this.newItemMessage,
	      })
	      this.newItemName = '',
	      this.newItemPrice = '',
	      this.newItemMessage = ''
	    },

	  }

	})
