let allMatches = [];
let matches = [];

function displayValue() {
    var theSrc = document.getElementById("textareaID").value;
	let myArray = theSrc.split(/\r?\n/);
	let PetTestArray = [];
	let PetIDArray = [];
	let PetCodeTestArray = [];
	let PetCodeArray = [];
	let PetFinalCodeArray = [];
	var incr = 0;
	var incrCode = 0;
	var numberOfPages = 1;
	var numPensVal = 1;
	let tempArray = [];
	
	var checkBox = document.getElementById("myCheck");
	if (checkBox.checked) {
		numPensVal = parseInt(document.getElementById("numPens").value, 10);
		/// Keep only the HTML belonging to selected pens
		tempArray = [];

		for (var i = 0; i < matches.length; i++) {
			var startPen = matches[i][0];

			var startIndex = myArray.findIndex(line =>
				line.includes(`data-pen="${startPen}"`)
			);

			if (startIndex === -1) continue;

			var endIndex = myArray.findIndex((line, index) =>
				index > startIndex && /data-pen="\d+"/.test(line)
			);

			if (endIndex === -1) {
				endIndex = myArray.length;
			}

			tempArray.push(...myArray.slice(startIndex, endIndex));
		}

		myArray = tempArray;
		
	}
    function generateTextareas() {
		var container = document.getElementById("HTMLoutput");
		
		// Clear previously generated textareas
		container.innerHTML = "";

		// Calculate number of textareas needed
		if (checkBox.checked) {
			numberOfPages = Math.ceil(matches.length / numPensVal);
		}
		else {
			numberOfPages = 1
		}
		
		for (let i = 0; i < numberOfPages; i++) {

			let textarea = document.createElement("textarea");
			textarea.id = "textareaID" + (i + 1);
			textarea.rows = 7;
			textarea.cols = 100;

			let button = document.createElement("button");
			button.textContent = "Copy HTML to clipboard";
			button.id = "buttonID" + (i + 1);
			button.onclick = function() {
				copyHTML(textarea.id, button.id);
			};
			container.appendChild(document.createElement("br"));
			if(numberOfPages > 1) {
				container.appendChild(document.createTextNode("Page #" + (i + 1)));
				container.appendChild(document.createElement("br"));
			}
			container.appendChild(textarea);
			container.appendChild(document.createElement("br"));
			container.appendChild(document.createElement("br"));
			container.appendChild(button);
			container.appendChild(document.createElement("br"));
			container.appendChild(document.createElement("br"));
		}
	}

	generateTextareas();
	
	if (checkBox.checked) {
		var splitArrays = [];
		
		
		for (var i = 0; i < matches.length; i += numPensVal) {
		var startPen = matches[i][0];
		var startIndex = myArray.findIndex(line =>
			line.includes(`data-pen="${startPen}"`)
		);

		var endIndex;
		
		if (i + numPensVal >= matches.length) {
			// Last group: take everything until the end
			splitArrays.push(myArray.slice(startIndex));
		}
		else {
			var endPen = matches[i + numPensVal][0];

			endIndex = myArray.findIndex(line =>
            line.includes(`data-pen="${endPen}"`)
			);

			splitArrays.push(myArray.slice(startIndex, endIndex + 1));
			}
		}
		//generate individual html
		for (var j = 0; j < splitArrays.length; j++)
		{
			PetTestArray = [];
			PetIDArray = [];
			PetCodeTestArray = [];
			PetCodeArray = [];
			PetFinalCodeArray = [];
			incr = 0;
			incrCode = 0;
			for (let i = 0; i < splitArrays[j].length; i++) {
			if (splitArrays[j][i].search("text-center pet-li") > 0)
			{
				PetTestArray.push(splitArrays[j][i]);
				incr += 1;
			}
			if (splitArrays[j][i].search("img/pet") > 0 || splitArrays[j][i].search("img/custom") > 0 )
			{
				PetCodeTestArray.push(splitArrays[j][i]);
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
			var str = PetFinalCodeArray.join('');
			
			document.getElementById("textareaID" + (j + 1)).value = "<div class=\"bg\"><div class=\"content\"><center><p>Pat Page</p>" + str + "<br><br><div class=\"footer-body\"><a href=\"/forum/topic/38037-quick-pat-page-auto-generator\">Click here to generate your own patpage</a></div></div></div>";
		
		}
			
	}
	//normal code
	else {	
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
	var str = PetFinalCodeArray.join('');

    document.getElementById("textareaID1").value = "<div class=\"bg\"><div class=\"content\"><center><p>Pat Page</p>" + str + "<br><br><div class=\"footer-body\"><a href=\"/forum/topic/38037-quick-pat-page-auto-generator\">Click here to generate your own patpage</a></div></div></div>";
	
	}
	
	//reset button text
	document.getElementById("buttonID1").innerHTML = "Copy HTML to clipboard";
	document.getElementById("CSSButton").innerHTML = "Copy CSS to clipboard";
}

function copyHTML(textareaID1, buttonID1)
{
	// Get the text field
	var copyText = document.getElementById(textareaID1);

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	document.getElementById(buttonID1).innerHTML = "Copied!";
}

function copyCSS()
{
	// Get the text field
	var copyText = document.getElementById("textareaIDC");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	document.getElementById("CSSButton").innerHTML = "Copied!";
}

function splitPage() {
    var theSrc = document.getElementById("textareaID").value;

    allMatches = [...theSrc.matchAll(/data-pen="(\d+)"\s+data-name="([^"]+)"/g)]
        .map(match => [Number(match[1]), match[2]]);

    // Initially, all pens are selected
    matches = [...allMatches];

    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("pens");
	
    if (checkBox.checked) {
        text.style.display = "block";

        text.innerHTML = "Check the pens to be included.<br>";
			text.innerHTML += `
			 <label for="numPens">Number of pens per page: </label>
			 <select name="numPens" id="numPens">
				${Array.from({length: 10}, (_, i) =>
					`<option value="${i + 1}" ${i + 1 === 9 ? 'selected' : ''}>
						${i + 1}
					</option>`
				).join('')}
			</select><br>
	`;
	if (allMatches.length === 0) {
		text.innerHTML = "No pens detected. Please paste source code first";
	}
		

        matches.forEach(function(item) {
            text.innerHTML += `
                <input type="checkbox" id="${item[0]}" value="${item[1]}" checked onchange="addPen(this)">
                <label for="${item[0]}">${item[1]}</label>
                <br>
            `;
        });

    } else {
        text.style.display = "none";
    }
}

function addPen(checkbox) {
    var penID = Number(checkbox.id);

    if (checkbox.checked) {
        // Find the original item
        var item = allMatches.find(item => item[0] === penID);

        // Find its original position
        var originalIndex = allMatches.findIndex(item => item[0] === penID);

        // Insert it back in the correct order
        var insertIndex = matches.findIndex(existing =>
            allMatches.findIndex(original => original[0] === existing[0]) > originalIndex
        );

        if (insertIndex === -1) {
            matches.push(item);
        } else {
            matches.splice(insertIndex, 0, item);
        }

    } else {
        // Remove the unchecked pen
        matches = matches.filter(item => item[0] !== penID);
    }

    //alert(matches);
}

document.getElementById("textareaID").addEventListener("input", function() {
    document.getElementById("myCheck").checked = false;
    splitPage();
});

