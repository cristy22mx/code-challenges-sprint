function findShortestOfThreeWords(word1,word2,word3){
	var Ingl = word1.length;
	var Ing2 = word2.length;
	var Ing3 = word3.length;
	if (Ingl <= Ing2 && Ingl <= Ing3){
		return word1;
	}
 else if ( Ing2<Ingl && Ing2 <=Ing3 ){
 	return word2;
 }
 else {
 	return word3;
 }
}

findShortestOfThreeWords('mubleria','pizarron',)
