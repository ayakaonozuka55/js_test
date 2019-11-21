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

	var app = new Vue({
		//マウントする要素
		el: '#page',

		//アプリケーションで使用するデータ
		data: {
			todo: [],
			taskName: '',
			taskOwner: '',
			taskCount: 0
		},

		// 算出プロパティ
		computed: {},

		// ライフサイクルフック
		beforeMount() {
			// firebaseの受信処理
			firebase.database().ref('task/incomplete/').on('child_added', (snapshot) => {
				this.todo.push(snapshot.val())
			})

			firebase.database().ref('taskCount/').on('child_added', (snapshot) => {
				this.taskCount = snapshot.val()
				console.log(this)
			})
		},


		// アプリケーションで使用するメソッド
		methods: {
			doAdd() {
				this.send()
				this.clearInput()
			},

			send() {
				firebase.database().ref('task/incomplete/').push({
					taskName: this.taskName,
					taskOwner: this.taskOwner,
					taskCount: this.taskCount
				})
				firebase.database().ref('taskCount/').set({
					count: this.taskCount + 1
				})
			},
			clearInput() {
				this.taskName = ''
				this.taskOwner = ''
			}

		}

	})