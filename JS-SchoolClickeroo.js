
		// c = click  m = multiplikator cl = Clicker Level
			var c, m, cl, cu;
			c = 1;
			m = 1.5;
			cl = 1;
			cu = 10;
			z = 500;
			l = elem.innerHTML = document.location; 
			lv11 = "Tutorial.html";
			lvl2 = "Deutsch.html"
			lvl3 = "Biologie.html"
			lvl4 = "Mathe.html"
			lvl5 = "Informatik.html"
			
		function ZielBerechnen()
		{
			if(l == lvl1)
			{
				z = 500;
			}
			else if(l == lvl2)
			{
				z = 1000;
			}
			else if(l == lvl3)
			{
				z = 2000;
			}
			else if(l == lvl4)
			{
				z = 5000;
			}
			else if(l == lvl5)
			{
				z = 15000;
			}
		}

		
		function Loading()
		{
			document.getElementById("cookies_produced").innerHTML=c;
			document.getElementById("clicker_level").innerHTML=cl;
			document.getElementById("upgrade_kosten").innerHTML=cu;
			document.getElementById("clicker_multiplikator").innerHTML=m;
			document.getElementById("ziel").innerHTML=z;
			ZielBerechnen();
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

