function startCalculator()
{
document.getElementById("display").value="0";
	
}


function nextMove(Button)
{
  var msg=(Button.value);
	
	
if((Button.value=="1")||(Button.value=="2")||(Button.value=="3")||(Button.value=="4")||(Button.value=="5")||(Button.value=="6")||(Button.value=="7")||(Button.value=="8")||(Button.value=="9"))
	{
		if(document.operand1===undefined)
			{
				document.operand1=0;
			}
	 document.operand1=document.operand1*10+ Number.parseInt(Button.value);
		
	}

	if((Button.value=="*")||(Button.value=="/")||(Button.value=="+")||(Button.value=="-"))
		{
			
			document.operator=Button.value;
			
		} 
	
	if(document.num1!=null)
		{
			
			if((Button.value==1)||(Button.value==2)||(Button.value==3)||(Button.value==4)||(Button.value==5)||(Button.value==6)||(Button.value==7)||(Button.value==8)||(Button.value==9))
				{
					document.num2+=Button.value;
				}
			
		}
	
	document.getElementById('display').value+=msg;
	
	
} 



 function setMessage(msg)
        {
            document.getElementById("display").value = msg;
        
		}
function E()
{
var xyz=eval(document.getElementById("display").value);
	document.getElementById("display").value=xyz;
}
function off()
{
	document.getElementById("display").value=" ";
}
function clearScreen(Button)
{
	document.getElementById("display").value="0";
}
function deleted()
{
	var xyz=document.getElementById("display").value;
     xyz = xyz.substring(0, xyz.length - 1);

	document.getElementById("display").value=xyz;
	
}


