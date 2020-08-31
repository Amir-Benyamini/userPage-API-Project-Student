
class Renderer {



	renderQuote(quote) {
		const header = "<h4>Favorite quote:</h4>"
		const headerElm = $(header)
		$(".quote-container").append(headerElm)

		const quoteP = `<p>${quote}</p>`
		const quoteElm = $(quoteP)

		$(".quote-container").append(quoteElm)
	}

	renderAbout(about) {
		const header = "<h3>About:</h3>"
		const headerElm = $(header)
		$(".meat-container").append(headerElm)


		for (let t of about) {

			const aboutP = `<p>${t}</p>`
			const aboutElm = $(aboutP)
			aboutElm.attr("class", "meat-text")
			$(".meat-container").append(aboutElm)
		}

	}

	renderUsers(users) {

		let mainUser = users.splice(0, 1)
		let mainUserName = mainUser[0].name
		let mainUserLoc = mainUser[0].location
		let mainUserImg = mainUser[0].picture.medium

		let imgElm = $(`<img src="${mainUserImg}" alt="profile-picture">`)
		imgElm.attr("id", "profile-pic")

		let nameElm = $(`<p>${mainUserName.first} ${mainUserName.last}</p>`)
		nameElm.attr("class", "user-info")

		let locationElm = $(`<p>${mainUserLoc.city}, ${mainUserLoc.last}</p>`)
		locationElm.attr("class", "user-info")


		$(".user-container").append(imgElm)
		$(".user-container").append(nameElm)
		$(".user-container").append(locationElm)

		for (let user of users) {

			let p = `<p>${user.name.first} ${user.name.last}</p>`
			let pElm = $(p)
			pElm.attr("class", "friends")
			$(".friends-container").append(pElm)
		}

	}
	renderPoke(pokeData) {
		let pokeName = pokeData.name
		let pokeImg = pokeData.sprites.front_shiny
		console.log(pokeName)
		console.log(pokeImg)
		let imgElm = $(`<img src="${pokeImg}" alt="pokemon-image">`)
		$(".pokemon-container").append(imgElm)

		let pElm = $(`<p>Favorit Pokemon: ${pokeName}</p>`)
		$(".pokemon-container").append(pElm)

	}
}

const mainRender = new Renderer



