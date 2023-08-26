function displayValue2() {
    var theSrc = document.getElementById("textareaID").value;
	const myArray = theSrc.split(/\r?\n/);
	const PetTestArray = [];
	const PetIDArray = [];
	const PetCodeTestArray = [];
	const PetCodeArray = [];
	const PenNameTestArray = [];
	const PenNameArray = [];
	const PenFinalArray = [];
	const PetFinalCodeArray = [];
	var WardrobeID = 0;
	var UserID = 0;
	var Username = "";
	var incr = 0;
	var incrCode = 0;
	var incrPen = 0;
	var ColCount = document.getElementById("numcol").value;
	
	
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i].search("text-center pet-li") > 0)
		{
			PetTestArray.push(myArray[i]);
			incr += 1;
		}
		else
		{
			PetTestArray.push("");
		}
		if (myArray[i].search("img/pet") > 0 || myArray[i].search("img/custom") > 0 )
		{
			PetCodeTestArray.push([myArray[i],i]);
			incrCode += 1;
		}
		else
		{
			PetCodeTestArray.push(["",""]);
		}
		if (myArray[i].search("data-name") > 0)
		{
			PenNameTestArray.push([myArray[i],i]);
			//location of pen in code
			incrPen += 1;
		}
		else
		{
			PenNameTestArray.push(["",""]);
		}
		
		//Search user ids
		if (myArray[i].search("display-avatar") > 0)
		{
			WardrobeID = myArray[i].replace(/\s/g, '').substring(40, myArray[i].replace(/\s/g, '').length-28);
		}
		if (myArray[i].search("s Menagerie") > 0)
		{
			UserID = myArray[i].replace(/\s/g, '').substring(myArray[i].replace(/\s/g, '').indexOf("#")+1, myArray[i].replace(/\s/g, '').indexOf(")"));
		}	
		if (myArray[i].search("s Menagerie") > 0)
		{
			Username = myArray[i].replace(/\s/g, '').substring(80+UserID.length, myArray[i].replace(/\s/g, '').length-23-UserID.length);
		}
		
	}



	for (let i = 0; i < PetTestArray.length; i++) {
			if (PetTestArray[i] != "")
			{
				PetIDArray.push(PetTestArray[i].replace(/\s/g, '').substring(41, PetTestArray[i].replace(/\s/g, '').length-2));
			}
			else
			{
				PetIDArray.push("");
			}
	}
	
	for (let i = 0; i < PetCodeTestArray.length; i++) {
		if (PetCodeTestArray[i][0] == "")
		{
			PetCodeArray.push([""]);
		}
		else if (PetCodeTestArray[i][0].search("img/custom") > 0)
		{
			PetCodeArray.push([PetCodeTestArray[i][0].replace(/\s/g, '').substring(62, PetCodeTestArray[i][0].replace(/\s/g, '').length-12)+"-thumb.png"]);
		}
		else {
			PetCodeArray.push([PetCodeTestArray[i][0].replace(/\s/g, '').substring(62, PetCodeTestArray[i][0].replace(/\s/g, '').replace("-pet.png", ".png").length-12)+"-thumb.png"]);
		}
	}
	
	for (let i = 0; i < PenNameTestArray.length; i++) {
		var PenName = PenNameTestArray[i][0].substring(
		PenNameTestArray[i][0].indexOf("data-name") + 11, 
		PenNameTestArray[i][0].lastIndexOf("data-img")-2);
		
		
		if (PenNameTestArray[i][0].indexOf("verdant-fields") >= 0)
		{
			PenBG = "b1";
		}
		else if (PenNameTestArray[i][0].indexOf("mystic-swamp") >= 0)
		{
			PenBG = "b2";
		}
		else if (PenNameTestArray[i][0].indexOf("crystal-caves") >= 0)
		{
			PenBG = "b3";
		}
		else if (PenNameTestArray[i][0].indexOf("starry-seaside") >= 0)
		{
			PenBG = "b4";
		}
		else if (PenNameTestArray[i][0].indexOf("coral-depths") >= 0)
		{
			PenBG = "b5";
		}
		else if (PenNameTestArray[i][0].indexOf("jeweled-sky") >= 0)
		{
			PenBG = "b6";
		}
		else if (PenNameTestArray[i][0].indexOf("obsidian-night") >= 0)
		{
			PenBG = "b7";
		}
		else if (PenNameTestArray[i][0].indexOf("golden-aquarium") >= 0)
		{
			PenBG = "b8";
		}
		else if (PenNameTestArray[i][0].indexOf("witchs-tower") >= 0)
		{
			PenBG = "b9";
		}
		else
		{
			PenBG = "";
		}
		
		PenNameArray.push([PenName,PenBG,PenNameTestArray[i][1]]);
	}
	

	
	for (let i = 0; i < PenNameArray.length; i++)
	{
		if (PenNameArray[i][0] != "")
		{
			PenFinalArray.push(PenNameArray[i]);
		}
	}
	//alert(PenFinalArray);
	//alert(PetCodeArray);
	//alert(PetIDArray);
	
	for (let i = 0; i < PenFinalArray.length; i++)
	{
		let AppendCode = "";
		let TempPetID = "";
		let HeaderID = PenFinalArray[i][1];;
		let PenID = HeaderID.replace(/b/g, "p");
		let PenCode = "<div class=\"" + HeaderID + "\">" + PenFinalArray[i][0].toUpperCase() + "</div><div class=\"" + PenID + "\">";
		let PenFinalArrayLast = 0;
		let CellIncr = 0;
		let CellBegin = "";
		let CellEnd = "";
			
		if (i == PenFinalArray.length - 1)
		{
			PenFinalArrayLast = PenFinalArray[i][2] + 305;
		}
		else
		{
			PenFinalArrayLast = PenFinalArray[i+1][2];
		}
		

		for (let j = PenFinalArray[i][2]; j < PenFinalArrayLast; j++)
		{
			
			
			if (PetIDArray[j] != "")
			{
				TempPetID = PetIDArray[j];
				
			}

			if (PetCodeArray[j] != "" && PetCodeArray[j] != undefined)
			{
				
				
				HeaderID = PenFinalArray[i][1];
				
				if (CellIncr == 0)
				{
					CellBegin = "<table><tr><td>";
					CellEnd = "</td>";
				}
				else if (CellIncr%ColCount == 0)
				{
					CellBegin = "</tr><tr><td>";
					CellEnd = "</td>";
				}
				else
				{
					CellBegin = "<td>";
					CellEnd = "</td>";
				}
				
				AppendCode = AppendCode + CellBegin + "<a href=\"/pet/" + TempPetID + "\"><img src=\"" + PetCodeArray[j] + "\" /></a><br><a href=\"/pet/pat/" 
					+ TempPetID + "\"><img src=\"https://i.imgur.com/bXoGjEg.png\"></a><a href=\"/pet/chat/"
					+ TempPetID + "\"><img src=\"https://i.imgur.com/27mVnGK.png\"></a>" + CellEnd;
				
				CellIncr++;
			}
			

		}
		
		AppendCode = PenCode + AppendCode + "</tr></table></div>";

		PetFinalCodeArray.push(AppendCode);
	}
	

		
	
	var str = PetFinalCodeArray.join('');
	
    document.getElementById("textareaID2").innerHTML = "<div class=\"bg\"><div class=\"content\"><center><p>Pat Page</p></center>" + str + "<br><div class=\"footer-body\"><a href=\"/forum/topic/38037-quick-pat-page-auto-generator\">Click here to generate your own patpage</a></div></div>";
	
	document.getElementById("HTMLButton").innerHTML = "Copy HTML to clipboard";
	document.getElementById("CSSButton").innerHTML = "Copy CSS to clipboard";
	
	var PenWidth = ColCount*80;
	var BodyWidth = ColCount*80+40;
	
	document.getElementById("textareaID3").innerHTML = `.bg {background: #eab490 url("/img/bg.jpg");}
.content {
margin: auto;
width:` + BodyWidth + `px;
position: relative;
padding-top: 10px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
background-color: #f8d0a1;
border: 4px solid #fff;
border-top-left-radius: 120px;
border-top-right-radius: 120px;
font-family: "Roboto Condensed", "Helvetica", "Arial", sans-serif;
color: #fff;
font-size: 15px;}

.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9 {
margin-left: 14px;
position: absolute;
width:325px;
height:34px;
padding-top: 14px;
text-align: center;
border: 3px solid #fff;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
font-size: 18px;
font-weight: bold;
background-size: cover;}

.p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9 {
margin-left: 14px;
margin-top: -3px;
margin-bottom: 20px;
position: relative;
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
width:` + PenWidth + `px;
text-align: center;
border: 3px solid #fff;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
font-size: 24px;}

.b1 {background: url("/img/items_environment/0/5-verdant-fields.png");}
.b2 {background: url("/img/items_environment/0/6-mystic-swamp.png");}
.b3 {background: url("/img/items_environment/0/198-crystal-caves.png");}
.b4 {background: url("/img/items_environment/0/199-starry-seaside.png");}
.b5 {background: url("/img/items_environment/1/1404-coral-depths.png");}
.b6 {background: url("/img/items_environment/0/256-jeweled-sky.png");}
.b7 {background: url("/img/items_environment/0/255-obsidian-night.png");}
.b8 {background: url("/img/items_environment/0/254-golden-aquarium.png");}
.b9 {background: url("/img/items_environment/2/2861-witchs-tower.png");}

.p1 {background-color: 94b641;}
.p2 {background-color: 438bb1;}
.p3 {background-color: 95544b;}
.p4 {background-color: 395f94;}
.p5 {background-color: 437ea6;}
.p6 {background-color: 94bad0;}
.p7 {background-color: 335784;}
.p8 {background-color: 4b9da2;}
.p9 {background-color: 46425d;}

.footer-body {
background: #e8b492;
color: #fff;
border: 4px solid white;
border-top: 0;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
margin: 0 -24px -23px;
padding: 10px 50px;
text-align:center;
}
.footer-body a { color:#ffffff; text-decoration:none;!important}

a:hover img { opacity:.6;}`
	
	
}



function copyHTML()
{
	// Get the text field
	var copyText = document.getElementById("textareaID2");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	document.getElementById("HTMLButton").innerHTML = "Copied!";
}

function copyCSS()
{
	// Get the text field
	var copyText = document.getElementById("textareaID3");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	document.getElementById("CSSButton").innerHTML = "Copied!";
}