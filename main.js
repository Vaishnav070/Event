function phoneNumberValidation(phoneNumber)  
{  
	var phoneno = /^\d{10}$/;  
	if(phoneNumber.match(phoneno))  
	{  
		return true;  
	}  
	else  
	{  
		$('#phone_error').html("* Enter valid 10 digit number like this 9876543210.");
		return false;
	}  
} 
function validate(){
	var valid = true;
	var f_name = $('#f_name').val();
	var l_name = $('#l_name').val();
	var email = $('#email').val();
	var address = $('#address').val();
	var city = $('#city').val();
	var gender = $('#gender').val();
	
	var checkedData=[];
	$('.language').each(function(i){
		if($(this).is(':checked'))
		{
			checkedData.push($(this).val());
		}
	});
	var state = $('#state').val();;
	var phone = $('#phone').val();;
	
	if(f_name=='' || f_name==null)
	{
		valid=false;
		$('#f_name_error').html("* Please enter firstname."); 
	}
	else
	{
		$('#f_name_error').html("");
	}
	if(l_name=='' || l_name==null)
	{
		valid=false;
		$('#l_name_error').html("* Please enter lastname.");
	}
	else
	{
		$('#l_name_error').html("");
	}
	if(email=='' || email==null)
	{
		valid=false;
		$('#email_error').html("* Please enter email.");
	}
	else
	{
		$('#email_error').html("");	
	}
	if(address=='' || address==null)
	{
		valid=false;
		$('#address_error').html("* Please enter address.");
	}
	else
	{
		$('#address_error').html("");
	}
	if(city=='' || city==null)
	{
		valid=false;
		$('#city_error').html("* Please enter city.");
	}
	else
	{
		$('#city_error').html("");
	}
	
	}
	if(state=='' || state==null)
	{
		valid=false;
		$('#state_error').html("* Please choose your state.");
	}
	else
	{
		$('#state_error').html("");
	}
	if(phone=='' || phone==null)
	{
		valid=false;
		$('#phone_error').html("* Please enter your phone number.");
	}
	else
	{
		$('#phone_error').html("");
	}
	if(phone!='')
	{
		valid = phoneNumberValidation(phone);
	}
	if(password != retype_password)
	{
		valid=false;
		$('#re_password_error').html("* Please retype password same as password.");
	}
	if(password == retype_password)
	{
		$('#re_password_error').html("");
	}	
	if(valid==false)
	{
		return false;
	}
	else
	{
		alert("You form is ready to submit.");
		return true;
	}	
}