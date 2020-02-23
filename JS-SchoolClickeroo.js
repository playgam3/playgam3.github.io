
		// c = click  m = multiplikator cl = Clicker Level
			var c, m, cl, cu;
			c = 1;
			m = 1.5;
			cl = 1;
			cu = 10;




		
		function Loading()
		{
			document.getElementById("cookies_produced").innerHTML=c;
			document.getElementById("clicker_level").innerHTML=cl;
			document.getElementById("upgrade_kosten").innerHTML=cu;
			document.getElementById("clicker_multiplikator").innerHTML=m;
		}
		function Cookie()
		{
			if(c <= 2)
			{
			c ++;
			}
			else{
			c = Math.floor(c+m);
			}
			
			document.getElementById("cookies_produced").innerHTML = c;
			Loading();
		}
		
		
		function Upgrade()
		{
			if(c >= cu)
			{
				m +=0.5;
				c -= cu;
				cu += Math.floor(cu*1.5);
				cl++;
				Loading();
			}
		}

