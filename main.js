var lotr = ['Frodo Baggins','Bilbo Baggins','Tom Bombadil','Círdan','Durin','Déagol','Elrond','Galadriel','Samwise Gamgee','Gandalf','Gil-galad','Gollum','Isildur','Khamûl','Morgomir','Nazgûl','Sauron','Thráin II','Thrór','Witch-king of Angmar','Tolkien','Mordor','Middle-earth','Vala','Annatar','gifts','elves','Bagend','Shire','Gondor','Pippin','Merry','Bree','Mount Doom','Boromir','Rivendell','Minas Tirith','Black Gate','Shelob','Rohan','Ent','Huorns','Grey Havens','Lindon','Buckland','Minhiriath','Eregion','Rhudaur','Arnor','Forodwaith','Moria','Ilúvatar','Ñoldor','War of Wrath','Finrod','Silmaril','Beornings ','Easterlings','HaradrimE','Variags','Númenóreans','Black Númenóreans','Rohirrim','eagles','hobbit','Tom Bombadil','orcs','goblin','troll','olog-hai','balrog','uruk-hai','warg','dragon','vampire','werewolf','giant spiders','nazgul','breakfast','second breakfast','elevensies','dinner','supper','afternoon tea','salted pork'];

var ipsum = ['donec','justo','turpis','imperdiet','am','i','vel','placerat','dignissim','libero','suspendisse','imperdiet','tellus','urna','pellentesque','vitae','bibendum','turpis','feugiat','Morbi','quis','est','a','urna','condimentum','rhoncus','cras','tincidunt','eros','quis','lectus','tempor','quis','sollicitudin','mi','iaculis','Sed','venenatis','nisi','a','tristique','adipiscing','nulla','auctor','orci','est','nec','congue','lorem','malesuada','fermentum','aliquam','leo','enim','tincidunt','et','felis','a','pharetra','sodales','metus','viverra','tincidunt','et','nec','sapien','Integer','luctus','interdum','tellus','a','tempus','velit','ultricies','ac','anteger','interdum','nisi','vitae','sem','lacinia','id','rhoncus','tortor','scelerisque','aliquam','semper','elit','ac','congue','semper','tellus','metus','porttitor','ligula','vitae','tincidunt','dolor','augue','vel','lectus']; 


var lotrLength = lotr.length,
	ipsumLength = ipsum.length,
	lotripsum, paragraph, sentence, lotrBrick, ipsumBrick = null,
	ipsumBrickLength = Math.round(Math.random()*(3-1)+1);
	
$('#button').click(function () {
	$('#text').nextAll('p').remove();
	console.log("emptied");
});

$('#form').submit(function(){
	generate();
	return false;
});

function generate() {
	numParas = document.getElementById("frodo").value; //get value entered by user
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
}








