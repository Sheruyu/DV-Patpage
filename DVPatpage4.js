function displayValue4() {
    var theSrc = document.getElementById("textareaID").value;
	const myArray = theSrc.split(/\r?\n/);
	const PetTestArray = [];
	const PetIDArray = [];
	const PetCodeTestArray = [];
	const PetCodeArray = [];
	const PetFinalCodeArray = [];
	const PetFinalCodeArray2 = [];
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
	
	
	for (let i = 0; i < PetIDArray.length; i++) {
		let AppendCode = "";
		let AppendCode2 = "";

		AppendCode = "<a href=\"/pet/pat/"  + PetIDArray[i] + "\"><img src=\"" + PetCodeArray[i] + "\" />";
		AppendCode2 = "<a href=\"/pet/chat/"  + PetIDArray[i] + "\"><img src=\"" + PetCodeArray[i] + "\" />";
		
		PetFinalCodeArray.push(AppendCode);
		PetFinalCodeArray2.push(AppendCode2);
	}
	var str = PetFinalCodeArray.join('');
	var str2 = PetFinalCodeArray2.join('');
	
    document.getElementById("textareaID2").innerHTML = "<p>Pats</p>" + str + "<p>Chat</p>" + str2;
}