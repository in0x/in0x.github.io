$(document).ready(function(){
	var index = 0
	var tags = ['coding', 'tech', 'Javascript', 'beer', 'haskell', 'traveling', 'books']
	window.setInterval(function () {
		$('#variable').html(tags[index])
		index++
		if (index == tags.length) index = 0
	}, 1500)
})