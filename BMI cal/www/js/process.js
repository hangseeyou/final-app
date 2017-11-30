
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


function calculation(){ 
	var result="";
	var div1 = document.getElementById('w').value*1; 
	var div2 = document.getElementById('h').value*1; 
	var rr= parseFloat(Math.round(div1/(div2/100*div2/100))).toFixed(2);

		 if ((div1 <= 0) && (div2 <= 0)){ 
		 	result = "Please Fill in everything correctly";
		 }
    else if (rr < 18.5) {

       result  = "Underweight" ;
     }
    else if (rr > 18.5 && rr < 25) {
       result = "Normal";
     }
    else if (rr > 25 && rr < 29) {
       result = "overweight";
    }
    else if (rr > 30) {
       result = "Obese";
    }
let r = `${rr}     ${result}`;

	let def = document.getElementById('calc'); 
	ReactDOM.render(r, def); 
};

let _root = document.getElementById('root');
let dom =   <div>
					<div id="up"><center>BMI Calculator</center></div><br/><br/>

				
				<center><div id='a'></div> Age:
					<input type='number' placeholder="enter" align="center"/>
<br/>
				<div>

					
					<input type="radio"selected/>Male
					<input type="radio"/>Female


						</div>
<br/>
				<div></div> height:
					<input type='number' id='h' align="center" placeholder="enter" /> cm
<br/><br/>
				<div></div> weight: 
					<input type='number' id='w' placeholder="enter" /> kg
				
<br/>
<br/>
				<div>
			
				<button type='sub' onClick={calculation} value='calc'>Calculate</button></div></center> 
				<br/>
				<center>BMI:<div id='calc'> </div>
<br/>

				

				</center>
			</div>;
ReactDOM.render(dom,_root);
