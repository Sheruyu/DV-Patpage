function displayValue() {
    var theSrc = document.getElementById("textareaID").value;
	const myArray = theSrc.split(/\r?\n/);
	const PetTestArray = [];
	const PetIDArray = [];
	const PetCodeTestArray = [];
	const PetCodeArray = [];
	const PetFinalCodeArray = [];
	var incr = 0;
	var incrCode = 0;
	
	//Change to i = 200 when not testing
	for (let i = 200; i < myArray.length; i++) {
		if (myArray[i].search("text-center pet-li") > 0)
		{
			PetTestArray.push(myArray[i]);
			incr += 1;
		}
		if (myArray[i].search("img/pet") > 0 || myArray[i].search("img/custom") > 0 )
		{
			PetCodeTestArray.push(myArray[i]);
			incrCode += 1;
		}
	}
	//alert(PetCodeTestArray);
	//alert(PetTestArray);

	for (let i = 0; i < PetTestArray.length; i++) {
			PetIDArray.push(PetTestArray[i].replace(/\s/g, '').substring(41, PetTestArray[i].replace(/\s/g, '').length-2));
	}
	
	for (let i = 0; i < PetCodeTestArray.length; i++) {
		if (PetCodeTestArray[i].search("img/custom") > 0){
			PetCodeArray.push(PetCodeTestArray[i].replace(/\s/g, '').substring(62, PetCodeTestArray[i].replace(/\s/g, '').length-12)+"-thumb.png");
		}
		else {
			PetCodeArray.push(PetCodeTestArray[i].replace(/\s/g, '').substring(62, PetCodeTestArray[i].replace(/\s/g, '').replace("-pet.png", ".png").length-12)+"-thumb.png");
		}
	}
	//alert(PetIDArray);
	//alert(PetCodeArray);
	
	var e = document.getElementById("linkback");
	var value = e.value;
	var linkbackval = e.options[e.selectedIndex].text;

	
	for (let i = 0; i < PetIDArray.length; i++) {
		let AppendCode = "";
		if (linkbackval == "Yes") {
			AppendCode = "<div class=\"x\"><a href=\"/pet/" + PetIDArray[i] + "\"><img src=\"" + PetCodeArray[i] + "\" /></a><br><a href=\"/pet/pat/"  + PetIDArray[i] + "\"><img src=\"https://i.imgur.com/bXoGjEg.png\"></a><a href=\"/pet/chat/" + PetIDArray[i] + "\"><img src=\"https://i.imgur.com/27mVnGK.png\"></a></div>";
		}
		else {
			AppendCode = "<div class=\"x\"><img src=\"" + PetCodeArray[i] + "\" /><br><a href=\"/pet/pat/"  + PetIDArray[i] + "\"><img src=\"https://i.imgur.com/bXoGjEg.png\"></a><a href=\"/pet/chat/" + PetIDArray[i] + "\"><img src=\"https://i.imgur.com/27mVnGK.png\"></a></div>";
		}
		PetFinalCodeArray.push(AppendCode);
	}
	var str = PetFinalCodeArray.join('')
	
    document.getElementById("textareaID2").innerHTML = "<div class=\"bg\"><div class=\"content\"><center><p>Pat Page</p>" + str + "<br><br><div class=\"footer-body\"><a href=\"/forum/topic/38037-quick-pat-page-auto-generator\">Click here to generate your own patpage</a></div></div></div>";
}