//three buttons
//add paragraph button
$('#add').click(function(){
	generate();
	return false;
});
$('#add-ul').click(function(){
	uList();
	return false;
});
$('#add-ol').click(function(){
	oList();
	return false;
});
//remove last element button
$('#removeSingle').click(function(){
	$('.lotripsum:last').remove();
	return false;
});
//remove it all and add a funny line
$('#removeAll').click(function(){
	$('#text').empty();
	return false;
});
$('#raw').click(function(){
	raw();
	return false;
});
//HTML tag button
var tags = false; //determins if 'add' or 'removal' is appropriate
$('#html-button').click(function(){
	if(tags == false){
		addHTML();
		tags = true;
		$('#html-button').text('Remove <html>');
	} else {
		removeHTML();
		tags = false;
		$('#html-button').text('Add <html>');
	}
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
		sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1); //uppercase first letter of sentence and add rest of sentence after first character
		sentence = sentence + '.' //put a period at the end of the sentence
		if(paragraph == null){
			paragraph = sentence;
		} else {
			paragraph = paragraph + ' ' + sentence;
		}
		sentence = null;
	}
	paragraph = "<p class='lotripsum'>"+paragraph+"</p>"; //attach the <p> tags for styling
	$('#text').append(paragraph); //append the paragraph to the specific id
	paragraph = null; //revert to null so the paragraph doesn't concatenate
	window.scrollTo(0,document.body.scrollHeight);
}

function uList() {
<<<<<<< HEAD
    var lotrLength = lotr.length, 
        listBrick = null,

    listBrickLength = Math.round(Math.random()*(7-1)+1);
    for(i=0; i<=listBrickLength; i++){
        var lotrSingle = Math.round(Math.random()*lotrLength)
        if(listBrick == null) {
            listBrick = '<li>' + lotr[lotrSingle] + '</li>';
                
        } else {
            listBrick = listBrick + '<li>' + lotr[lotrSingle] + '</li>';
        } 

    }

    listBrick = '<ul class="lotripsum">' + listBrick + '</ul>';
    $('#text').append(listBrick);
=======
	var lotrLength = lotr.length, 
		listBrick = null,

	listBrickLength = Math.round(Math.random()*(7-1)+1);
	for(i=0; i<=listBrickLength; i++){
		var lotrSingle = Math.round(Math.random()*lotrLength)
		if(listBrick == null) {
			listBrick = '<li>' + lotr[lotrSingle] + '</li>';
			
		} else {
			listBrick = listBrick + '<li>' + lotr[lotrSingle] + '</li>';
		} 

	}

	listBrick = '<ul class="lotripsum">' + listBrick + '</ul>';
	$('#text').append(listBrick);
	window.scrollTo(0,document.body.scrollHeight);
>>>>>>> master
}
function oList() {
	var lotrLength = lotr.length, 
		listBrick = null,

	listBrickLength = Math.round(Math.random()*(7-1)+1);
	for(i=0; i<=listBrickLength; i++){
		var lotrSingle = Math.round(Math.random()*lotrLength)
		if(listBrick == null) {
			listBrick = '<li>' + lotr[lotrSingle] + '</li>';
			
		} else {
			listBrick = listBrick + '<li>' + lotr[lotrSingle] + '</li>';
		} 
<<<<<<< HEAD

	}

	listBrick = '<ol class="lotripsum">' + listBrick + '</ol>';
	$('#text').append(listBrick);
	window.scrollTo(0,document.body.scrollHeight);
}

function addHTML() {
    $('#text h1').prepend('<span class="html">&lt;h1&gt;</span>').append('<span class="html">&lt;/h1&gt;</span>');
    $('#text p').prepend('<span class="html">&lt;p&gt;</span>').append('<span class="html">&lt;/p&gt;</span>');
    $('#text a, #content p a').prepend('<span class="html">&lt;a href=""&gt;</span>').append('<span class="html">&lt;/a&gt;</span>');
    $('#text ul').prepend('<span class="html">&lt;ul&gt;</span>').append('<span class="html">&lt;/ul&gt;</span>');
    $('#text ul li').prepend('<span class="html">&lt;li&gt;</span>').append('<span class="html">&lt;/li&gt;</span>');
    $('#text ol').prepend('<span class="html">&lt;ol&gt;</span>').append('<span class="html">&lt;/ol&gt;</span>');
    $('#text ol li').prepend('<span class="html">&lt;li&gt;</span>').append('<span class="html">&lt;/li&gt;</span>');
}

function removeHTML() {
    $('.html').remove();
}

<<<<<<< HEAD

window.onLoad = generate(); //do this right away so the page starts with a paragraph instead of empty
=======
// select text for highlight
function selectText(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
  }
}

function loadThree() {
	generate();
	generate();
	generate();
}

window.onLoad = loadThree(); //do this right away so the page starts with a paragraph instead of empty
>>>>>>> master






