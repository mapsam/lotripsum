//three buttons
//add paragraph button
$('#add').click(function(){
	generate();
	return false;
});
//remove single paragraph button
$('#removeSingle').click(function(){
	$('#text p').last().remove();
	return false;
});
//remove it all and add a funny line
$('#removeAll').click(function(){
	$('#text').empty();
	var comment = '<p>The salted pork is particularly good.</p>';
	$('#text').append(comment);
	return false;
});

//prepare the entire paragraph
function generate() {
	var lotrLength = lotr.length, 
		ipsumLength = ipsum.length,
		paragraph, sentence, lotrBrick, ipsumBrick = null,
		ipsumBrickLength = Math.round(Math.random()*(2-1)+1);
	//create paragraph
	paraLength = Math.round(Math.random()*(8-2)+2);
	for(p=0; p<paraLength; p++){
		//create sentence
		sentence = null;
		sentenceBricks = Math.round(Math.random()*(3-1)+1);
		//console.log("sentence bricks: ", sentenceBricks);
		for(s=0; s<sentenceBricks; s++){
			//create a single lotr brick
			lotrBrick = null;
			lotrBrickLength = Math.round(Math.random()*(4-1)+1);
			for(i=0; i<=lotrBrickLength; i++){
				lotrSingle = Math.round(Math.random()*lotrLength)
				if(lotrBrick == null) {
					lotrBrick = lotr[lotrSingle];
					
				} else {
					lotrBrick = lotrBrick + ' ' + lotr[lotrSingle];
				} 
				//console.log(lotrBrick);
			}
			//add single lotr brick to sentence
			if(sentence == null){
				sentence = lotrBrick;
			} else {
				sentence = sentence + ' ' + lotrBrick;
			}
			lotrBrick = null;
			
			//create a single ipsum brick
			for(i=0; i<=ipsumBrickLength; i++){
				ipsumSingle = Math.round(Math.random()*ipsumLength)
				
				if(ipsumBrick == null){
					ipsumBrick = ipsum[ipsumSingle];
				} else {
					ipsumBrick = ipsumBrick + ' ' + ipsum[ipsumSingle];
				}
				
			}
			//add single ipsum brick to the sentence
			
			sentence = sentence + ' ' + ipsumBrick;
			
			ipsumBrick = null;
		}
		sentence = sentence + '.'
		if(paragraph == null){
			paragraph = sentence;
		} else {
			paragraph = paragraph + ' ' + sentence;
		}
		sentence = null;
	}
	paragraph = "<p>"+paragraph+"</p>"; //attach the <p> tags for styling
	$('#text').append(paragraph); //append the paragraph to the specific id
	paragraph = null; //rever to null so the paragraph doesn't concatenate
}

window.onLoad = generate(); //do this right away so the page starts with a paragraph instead of empty






