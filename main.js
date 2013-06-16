var lotrLength = lotr.length,
	ipsumLength = ipsum.length,
	lotripsum, paragraph, sentence, lotrBrick, ipsumBrick = null,
	ipsumBrickLength = Math.round(Math.random()*(3-1)+1),
	numParas;


$('#form').submit(function(){
	getValue();
	generate();
	return false;
});

function getValue() {
	numParas = document.getElementById("frodo").value; //get value entered by user
	return numParas;
}

function generate() {
	for(t=0; t<numParas; t++){
		//create paragraph
		paragraph = null;
		paraLength = Math.round(Math.random()*(10-4)+4);
		for(p=0; p<paraLength; p++){
			//create sentence
			sentence = null;
			sentenceBricks = Math.round(Math.random()*(3-1)+1);
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
		paragraph = "<p>"+paragraph+"</p>";
		if(lotripsum == null){
			lotripsum = paragraph;
		} else {
			lotripsum = lotripsum + paragraph;
		}
		paragraph = null;
	}
	document.getElementById('text').innerHTML=lotripsum;
	numParas = null;
}








