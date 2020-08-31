//This is the class that will manage all your APIs

class APIManager {
	constructor() {
		this.dataQ = {}
		this.dataA = {}
		this.dataU = {}
		this.dataP = []

	}

	fetchQuote() {
		$.get("https://api.kanye.rest", (response) => {
			this.dataQ = response
		})
	}

	fetchAbout() {
		$.get("https://baconipsum.com/api/?type=all-meat&paras=1", (response) => {
			this.dataA = response
		})
	}

	fetchUsers() {
		$.get("https://randomuser.me/api/1.3/?results=7", (response) => {
			this.dataU = response
		})
	}

	fetchPoke() {
		let num = Math.floor(Math.random() * 800)
		$.get(`https://pokeapi.co/api/v2/pokemon/${num}/`, (response) => {
			this.dataP = response


		})
	}

}

const apiManager = new APIManager()
