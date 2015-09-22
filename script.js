
function question1(){
		var number = prompt("Enter mobile number to check with your country code:");
		var validate = /^(\+97798)([0-9]{8})$/; 		// Regular Expression that checks number starting with +97798 and eight numbers behind it.
		document.write("<br>You entered <b>"+number+"</b>");
		if(number.match(validate)){
			alert("valid phone number");
		}
		else{
			alert("your phone number is not valid");
		}
	}
	

function question2(){
		var domainname = prompt("Enter domain name:");
		var Check = /((w{3}).)?([a-z0-9\-])+((.com)|(.net)|(.edu))$/; 		// Regular Expression that checks domain name starting either with www. or without it and has name with alphanumeric characters and - which then ends with either .com, .net, .edu.
		document.write("<br>You entered <b>"+domainname+"</b>");
		if(Check.test(domainname)){
			alert("Valid Domain Name");
		}
		else{
			alert("Domain Name is not Valid");
		}
	}
	
	
function question3(){
		var string = prompt("Enter string to check containing A-Z, a-z, -, _:");
		var Check = /((a-zA-Z)|_|-)/;  // Regular Expression that checks whether the string consists of A-Z, a-z, - or _.
		document.write("<br>You entered <b>"+string+"</b>");
		if(Check.test(string)){
			alert("valid String");
		}
		else{
			alert("String is not Valid");
		}
	}
	

function question4(){
		var date = prompt("Enter date to check:");
		var Check = /^(1[0-2]|[1-9])\/([1-9]|[1-2][0-9]|3[0-2])\/([0-9]{4})$/;	  // Regular Expression that checks date with patterns mm/dd/yyyy, m/dd/yyyy, mm/d/yyyy, m/d/yyyy.
		document.write("<br>You entered <b>"+date+"</b>");
		if(Check.test(date)){
			alert("Date is Valid");
		}
		else{
			alert("Date is not Valid");
		}
	}
	

function question5(){
		var time = prompt("Enter time to check:");
		var Check = /^(2[0-3]|1[0-9]|[0-9]):([0-9]|[1-5][0-9]):([0-9]|[1-5][0-9])$/;	// Regular Expression that checks time with patterns hh:mm:ss, h:mm:ss.
		document.write("<br>You entered <b>"+time+"</b>");
		if(Check.test(time)){
			alert("Time is Valid");
		}
		else{
			alert("Time is not Valid");
		}
	}
	

function question6(){
		var hex= prompt("Enter hex color value to check:");
		var Check = /^#([0-9]|[a-f]|[A-F]){1,6}$/;	// Regular Expression that checks hex color with first character starting with # and then consists of hex value of atleast 1 to 6 characters.
		document.write("<br>You entered <b>"+hex+"</b>");
		if(Check.test(hex)){
			alert("Hex color value is valid");
		}
		else{
			alert("Hex color value is not valid");
		}
	}