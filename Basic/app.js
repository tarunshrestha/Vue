const app = Vue.createApp({
    // data, function
    // template:"<h2>I am templates</h2>"
    data(){
        return {
            title:"The Final",
            author:"Tarun",
            age:23,
            showBooks: true,
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')