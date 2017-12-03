function openNav() {
    document.getElementById("mySidenav").style.width = "560px";
}



let process = {
	menu:function(){
		let content = <ul>
		<div id="mySidenav" class="sidenav">
            <li><a href='#'><button><font face="arial" size="5" color="white" onClick={process.b}> back </font></button></a></li><br/>
            <li><a href='#'><button><font face="times new roman" size="5" color="white" onClick={process.a}><b>About</b></font></button></a></li>
			<br/>
            <li><font face="times new roman" size="8" color="black">Tips for:</font></li>
            <li><a href='#'><button><font face="times new roman" size="4" color="white" onClick={process.uw}><i>Underweight</i></font></button></a></li>
			<br/>
            <li><a href='#'><button><font face="times new roman" size="6" color="#57FF00" onClick={process.n}><i>Normal</i></font></button></a></li>
			<br/>
            <li><a href='#'><button><font face="times new roman" size="4" color="#EA8E46" onClick={process.ow}><i>Overweight</i></font></button></a></li>
			<br/>
            <li><a href='#'><button><font face="times new roman" size="6" color="#984200" onClick={process.o}><i>Obese</i></font></button></a></li>
			</div>

                    <div id="up"><center></center></div>

                
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
      

		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},

    a:function(){
        let content = <div><center>
                 About:<br/><br/>

BMI(Body Mass Index) is person's weight in kilograms(kg) devide by his/her height in meters squared.The National Institutes of Health(NIH) now defines normal weight,overweight,underweight and obesity according to BMI rather than the traditional height/weight charts.
    <br/>
    <br/>
    <br/>
    <a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
            </div>;
            ReactDOM.render(content,document.getElementById('root'));
    },



	uw:function(){
		let content = <div><center>
				 Tips:Underweight<br/><br/>

You must eat all nutritious foods so that you can increase your weight.dont run just walk only because we avoiding an accident if the wind is strong maybe you flied away.
     
    <br/>
    <br/>
    <br/>
    <a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	n:function(){
		let content = <div><center>
				Tips:Normal<br/><br/>

        You need to have a balance diet and exercise.walking is good for your health.Sometimes share your foods.
        <br/>
        <br/>
        <br/>
        <a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	ow:function(){
		let content = <div><center>
				Tips:Overweight<br/><br/>

        You need to have a balance diet and exercise.walking is good for your health.Sometimes share your foods.
        <br/>
        <br/>
        <br/>
        <a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	o:function(){
	let content = <div><center>
				Tips:Obese<br/><br/>

You need an ultra diet and daily exercise.Release some foods in your fridge don't stack a lot of food because "It's better to give than to receive".
<br/>
<br/>
<br/>
<a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

    b:function(){
    let content = <div><center>
                Try to convert again :) <br/><br/>


<br/>
<br/>
<br/>
<a href='#'><button type='tae' onClick={process.menu}>back</button></a></center>
            </div>;
            ReactDOM.render(content,document.getElementById('root'));
    },
	loading:function(){
		let content = <div class="blink">
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}


process.loading();
setTimeout(function(){
	process.menu();
},10000);




//this is all the function



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

//body


