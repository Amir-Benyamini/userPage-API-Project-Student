$("#load").on("click", function(){
	apiManager.fetchQuote()
	apiManager.fetchAbout()
	apiManager.fetchUsers()
	apiManager.fetchPoke()

})


$("#display").on("click", function(){

	mainRender.renderQuote(apiManager.dataQ.quote)
	mainRender.renderAbout(apiManager.dataA)
	mainRender.renderUsers(apiManager.dataU.results)
	mainRender.renderPoke(apiManager.dataP)
	
})