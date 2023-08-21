function displayValue2() {
    var theSrc = document.getElementById("textareaID").value;
	const myArray = theSrc.split(/\r?\n/);
	const PetTestArray = [];
	const PetIDArray = [];
	const PetNameArray = [];
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
	var CheckHeader = document.getElementById("check_header").checked;
	var CheckName = document.getElementById("check_name").checked;
	var CheckLink = document.getElementById("check_link").checked;
	var CheckActive = document.getElementById("check_active").checked;
	var CheckPen = document.getElementById("check_pen").checked;
	var CheckPat = document.getElementById("check_pat").checked;

	
	
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
		if (myArray[i].search("pet-name") > 0)
		{
			PetNameArray.push(myArray[i].replace(/\s/g, '').substring(31, myArray[i].replace(/\s/g, '').length-7));
		}
		else
		{
			PetNameArray.push([""]);
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
	
	for (let i = 0; i < PenFinalArray.length; i++)
	{
		let AppendCode = "";
		let InnerCode = "";
		let TempPetID = "";
		let PenCode = "<p>" + PenFinalArray[i][0].toUpperCase() + "</p>";
		let PenFinalArrayLast = 0;
		if (i == PenFinalArray.length - 1)
		{
			PenFinalArrayLast = PenFinalArray[i][2] + 305;
		}
		else
		{
			PenFinalArrayLast = PenFinalArray[i+1][2];
		}
		
		//alert(PenCode);
		for (let j = PenFinalArray[i][2]; j < PenFinalArrayLast; j++)
		{

			
			if (PetIDArray[j] != "")
			{
				TempPetID = PetIDArray[j];
				
			}

			if (PetCodeArray[j] != "" && PetCodeArray[j] != undefined)
			{
				let HeaderID = "x";
				let IncludeName = "";
				let LinkBack = "";
				let SetActive = "";
				if (CheckHeader == true)
				{
					HeaderID = PenFinalArray[i][1];
				}
				else
				{
					HeaderID = "x";
				}
				
				if (CheckName == true)
				{
					IncludeName = "InsertPetName<br>";
				}
				
				if (CheckLink == true)
				{
					LinkBack = "<a href=\"/pet/" + TempPetID + "\"><img src=\"" + PetCodeArray[j] + "\" /></a>";
				}
				else
				{
					LinkBack = "<img src=\"" + PetCodeArray[j] + "\" />";
				}
				
				if (CheckActive == true)
				{
					SetActive = "<a href=\"/pet/active/" + WardrobeID + "/" + TempPetID + "\">Set Active</a><br>";
				}
				
				if (CheckPat == false)
				{
					AppendCode = AppendCode + "<div class=\"flex-item pen " + HeaderID + "\">" + LinkBack + "<br>" + IncludeName + SetActive + "<a href=\"/pet/pat/" 
					+ TempPetID + "\">Pat</a> | <a href=\"/pet/chat/"
					+ TempPetID + "\">Chat</a></div>";
				}
				else
				{
					AppendCode = AppendCode + "<div class=\"flex-item pen " + HeaderID + "\"><a href=\"/pet/pat/" + TempPetID + "\"><img src=\"" + PetCodeArray[j] + "\" /></a><br>" + IncludeName + "</div>";
				}
				
			}
			
			if (PetNameArray[j] != "")
			{
				AppendCode = AppendCode.replace(/InsertPetName/g, PetNameArray[j]);
				
			}

		}
		if (CheckPen == true)
		{
			AppendCode = PenCode + AppendCode;
		}

		PetFinalCodeArray.push(AppendCode);
	}
	

		
	
	var str = PetFinalCodeArray.join('');
	
    document.getElementById("textareaID2").innerHTML = "<div class=\"bg\"><div class=\"container-center\"><div class=\"container-main\"><div align=\"center\"><span style=\"text-transform:uppercase; font-family:\"Roboto Condensed\", \"Helvetica\", \"Arial\", sans-serif\"><a href=\"/profile/" + UserID + "\"><b><< Return to " + Username + " (#" + UserID + ")'s Profile >></b></a></span></div><div class=\"flex-container wrap\">" + str + "<br><br></div><div class=\"footer-body\"><div class=\"row\"><div><a href=\"/profile/3988\">This pet page's coding has been put together by Misha#3988</a><br>-<br><a href=\"/forum/topic/38037-quick-pat-page-auto-generator\">Click here to generate your own patpage</a></div></div></div></div></div>";
}

function CheckBoxDisable()
{
	var CheckPat = document.getElementById("check_pat").checked;
	ChangeImage();
	if (CheckPat == true)
	{
		document.getElementById("check_link").disabled = true;
		document.getElementById("check_active").disabled = true;
	}
	else
	{
		document.getElementById("check_link").disabled = false;
		document.getElementById("check_active").disabled = false;
	}
}

function ChangeImage()
{
	var CheckCombo = "" + document.getElementById("check_header").checked + document.getElementById("check_name").checked + document.getElementById("check_active").checked + document.getElementById("check_pat").checked;
	if(CheckCombo == "truetruetruefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/TRm9AYp.png";
	}
	else if(CheckCombo == "truefalsetruefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/g2lsWqQ.png";
	}
	else if(CheckCombo == "truetruefalsefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/ObuXMkY.png";
	}
	else if(CheckCombo == "truefalsefalsefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/r91AxnU.png";
	}
	else if(CheckCombo == "falsetruetruefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/kDLPeK5.png";
	}
	else if(CheckCombo == "falsetruefalsefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/YZTpZ3P.png";
	}
	else if(CheckCombo == "falsefalsetruefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/lZbJQua.png";
	}
	else if(CheckCombo == "falsefalsefalsefalse")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/6Cef94d.png";
	}
	else if(CheckCombo == "truetruetruetrue")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/tMDnqhz.png";
	}
	else if(CheckCombo == "truefalsetruetrue")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/xT2pSIM.png";
	}
	else if(CheckCombo == "falsetruetruetrue")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/mRpgHA6.png";
	}
	else if(CheckCombo == "falsefalsetruetrue")
	{
		document.getElementById("PreviewImg").src = "https://i.imgur.com/gNWxWeJ.png";
	}
	

}