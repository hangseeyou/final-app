
function calculation(){ 
	var result= "";
	var div1 = document.getElementById('w').value*1; 
	var div2 = document.getElementById('h').value*1;
	//var div3 = document.getElementById('calc').value*1.11; 
	var rr= div1/(div2/100*div2/100);

		 if ((div1 <= 0) && (div2 <= 0)){ 
		 	result = "Please Fill in everything correctly";
		 }
    else if (result < 18.5) {

       result  = "Underweight" ;
     }
    else if (result > 18.5 && result < 25) {
       result = "Normal";
     }
    else if (result > 25 && result < 29) {
       result = "overweight";
    }
    else if (result > 30) {
       result = "Obese";
    }
let r = `${rr}     ${result}`;

	let def = document.getElementById('calc'); 
	ReactDOM.render(r, def); 
};

let _root = document.getElementById('root');
let dom =   <div>


<br/>
				<center><div id='a'></div> Age:
					<input type='number' placeholder="|" align="center"/>
<br/><br/>
				<div>

					
					<input type="radio" value="option1" if checked={true}/>Male
					<input type="radio" value="option2" checked={false}/>Famale


						</div>
<br/><br/>
				<div></div> height:
					<input type='number' id='h' align="center" placeholder="|" /> cm
<br/><br/>
				<div></div> weight: 
					<input type='number' id='w' placeholder="|" /> kg
				
<br/>
<br/>
				<div>
			
				<button type='sub' onClick={calculation} value='calc'>Calculate</button></div></center> 
				<center>BMI:<div id='calc'> </div>
<br/>

				<div>
				<a href="tips.html"> 
				<button type='tip' onClick={calculation} >Tips</button></a></div>

				</center>
			</div>;
ReactDOM.render(dom,_root);
