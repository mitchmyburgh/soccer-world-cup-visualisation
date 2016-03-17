function barChartsWrap(query)
{
	var clicked={};
	if(query=="Top scorer"){selectedquery="topscorer";}
	if(query=="Attendance"){selectedquery="attendance";}
	if(query=="World cup goals"){selectedquery="wcgoals";}
	
	var margin = {top: 20, right: 20, bottom: 30, left: 70},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10);
		document.getElementById("tumelosChart").innerHTML = '';
		document.getElementById("output").innerHTML = '';
	var tip = d3.tip()
	  .attr('class', 'd3-tip')
	  .offset([-10, 0])
	  .html(function(d) {
	    return "<strong>"+query+":</strong> <span style='color:red'>" + d.frequency + "</span>";
	  })
	var svg = d3.select(".charting").append("svg")
		.attr("class", "bigGraph")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	svg.call(tip);
	d3.tsv("data/"+selectedquery+".tsv", type, function(error, data) {
	  if (error) throw error;

	  x.domain(data.map(function(d) { return d.letter; }));
	  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

	  svg.append("g")
		  .attr("class", "x axis")
		  .style("fill", "#fff")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

	  svg.append("g")
		  .attr("class", "y axis")
		  .style("fill", "#fff")
		  .call(yAxis)
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .style("fill", "#fff")
		  .text(query);

	  svg.selectAll(".bar")
		  .data(data)
		.enter().append("rect")
		  .attr("class", "bar "+selectedquery)
		  .attr("x", function(d) { return x(d.letter); })
		  .attr("width", x.rangeBand())
		  .attr("y", function(d) { return y(d.frequency); })
		  .attr("height", function(d) { return height - y(d.frequency); }).on("click", click)
		  .on('mouseover', tip.show)
      	  .on('mouseout', tip.hide);
		/*switch (selectedquery){
			case "topscorer":
				svg.selectAll(".bar").style("fill", "#e7298a");
				break;
			case "attendance":
				svg.selectAll(".bar").style("fill", "#3690c0");
				break;
			case "wcgoals":
				svg.selectAll(".bar").style("fill", "#ec7014");
				break;
			default:
				break;
		}*/
		
	});

	function type(d) {
	  d.frequency = +d.frequency;
	  return d;
	}

	function click (d) {
		if(selectedquery=="wcgoals")
		{
			if(clicked[d.letter]==true)
			{
				clicked[d.letter]=null;
				//d3.select(this).style("fill", "#ec7014");
				d3.select(this).classed("clickedBigBarGraph", false )
				console.log(d3.select(this).attr("class"));
				document.getElementById('output').removeChild(document.getElementById('aWrapper'+d.letter));
			}
			else
			{
				clicked[d.letter]=true;
				var quickClass = d3.select(this).attr("class") + " clickedBigBarGraph"
				d3.select(this).classed("clickedBigBarGraph", true )//.style("fill", "url(#pattern-stripe-goalsScored)");//.attr("class", quickClass)//.style("fill", "url(#pattern-stripe-goalsScored)");//.attr('fill', 'url(#pattern-stripe-goalsScored)')
				console.log(d3.select(this).attr("class"));
				wrapperFunction(d.letter);
			}
		}
	}

	function wrapperFunction(WrapperName)
	{
	var theName=WrapperName;


	var ele = document.createElement("canvas");
	ele.setAttribute("height","300");
	ele.setAttribute("width","950");
	ele.setAttribute("id","wrapper"+theName);


	var output = document.getElementById('output');
	var theTitle = document.createElement("h3");
	theTitle.setAttribute("class","smallGraphHeader");
	theTitle.innerText=theName;
	var elements = document.createElement("div");
	elements.setAttribute("id","aWrapper"+theName);
	elements.setAttribute("width","100%");
	elements.setAttribute("style","display:inline-block");
	elements.appendChild(theTitle);
	output.appendChild(elements);
	
	var outputs = document.getElementById('aWrapper'+theName);
	outputs.appendChild(ele);

	var randomScalingFactor = function(){	
			 return Math.round(Math.random()*100);
			
	};

	var WCOneGoals = {
	labels : ["Uruguay","Argentina","United States","Yugoslavia","Chile","Brazil","France","Romania","Paraguay","Peru","Belgium","Bolivia","Mexico"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [15,18,7,7,5,5,4,3,1,1,0,0,4]
					}
				]

			};
			
	var WCTwoGoals = {
	labels : ["Italy","Czechoslovakia","Germany","Austria","Spain","Hungary","Switzerland","Sweden","Argentina","France","Netherlands","Romania","Egypt","Brazil","Belgium","United States"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [11,9,11,7,4,5,5,4,2,2,2,1,2,1,2,1]
					}
				]

			};		
	var WCThreeGoals = {
	labels : ["Italy","Hungary","Brazil","Sweden","Czechoslovakia","France","Switzerland","Cuba","Romania","Germany","Poland","Norway","Belgium","Netherlands","Dutch East Indies"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [11,15,12,11,4,4,1,3,3,1,5,1,1,0,0]
					}
				]

			};
			
	var WCFourGoals = {
	labels : ["Uruguay","Brazil","Sweden","Spain","Yugoslavia","Switzerland","Italy","England","Chile","United States","Paraguay","Mexico","Bolivia"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [15,22,11,10,7,4,4,2,5,4,2,2,0]
					}
				]

			};
	var WCFiveGoals = {
	labels : ["West Germany","Hungary","Austria","Uruguay","Switzerland","Brazil","England","Yugoslavia","Turkey","Italy","France","Belgium","Mexico","Czechoslovakia","Scotland","South Korea",],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [25,27,17,16,11,8,8,2,10,6,3,5,2,0,0,0]
					}
				]

			};
	var WCSixGoals = {
	labels : ["Brazil","Sweden","France","West Germany","Wales","Soviet Union","Northern Ireland","Yugoslavia","Czechoslovakia","Hungary","England","Paraguay","Argentina","Scotland","Austria","Mexico"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [16,12,23,12,5,5,6,7,9,7,4,9,5,4,2,1]
					}
				]

			};

	var WCSevenGoals = {
	labels : ["Brazil","Czechoslovakia","Chile","Yugoslavia","Hungary","Soviet Union","West Germany","England","Italy","Argentina","Mexico","Uruguay","Spain","Colombia","Bulgaria","Switzerland"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [14,7,10,10,8,9,4,5,3,2,3,4,2,5,1,2]
					}
				]

			};

	var WCEightGoals = {
	labels : ["England","West Germany","Portugal","Soviet Union","Argentina","Hungary","Uruguay","North Korea","Italy","Spain","Brazil","Mexico","Chile","France","Bulgaria","Switzerland"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [11,15,17,10,4,8,2,5,2,4,4,1,2,2,1,1]
					}
				]

			};
	var WCNineGoals = {
	labels : ["Brazil","Italy","West Germany","Uruguay","Soviet Union","Mexico","Peru","England","Sweden","Belgium","Romania","Israel","Bulgaria","Morocco","Czechoslovakia","El Salvador"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [19,10,17,4,6,6,9,4,2,4,4,1,5,2,2,0]
					}
				]

			};
	var WCTenGoals = {
	labels : ["West Germany","Netherlands","Poland","Brazil","Sweden","East Germany","Yugoslavia","Argentina","Scotland","Italy","Chile","Bulgaria","Uruguay","Australia","Haiti","Zaire"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [13,15,16,6,7,5,12,9,3,5,1,2,1,0,2,0]
					
					}
				]
			};
	var WCElevenGoals = {
	labels : ["Argentina","Netherlands","Brazil","Italy","Poland","West Germany","Austria","Peru","Tunisia","Spain","Scotland","France","Sweden","Iran","Hungary","Mexico"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [15,15,10,9,6,10,7,7,3,2,5,5,1,2,3,2]
					}
				]

			};

	var WCTwelveGoals = {
	labels : ["Italy","West Germany","Poland","France","Brazil","England","Soviet Union","Austria","Northern Ireland","Belgium","Argentina","Spain","Algeria","Hungary","Scotland","Yugoslavia","Cameroon","Honduras","Czechoslovakia","Peru","Kuwait","Chile","New Zealand","El Salvador"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [12,12,11,16,15,6,7,5,5,3,8,4,5,12,8,2,1,2,2,2,2,3,2,1]
					}
						
				]

			};		

	var WCThirteenGoals = {
	labels : ["Argentina","West Germany","France","Belgium","Brazil","Mexico","Spain","England","Denmark","Soviet Union","Morocco","Italy","Paraguay","Poland","Bulgaria","Uruguay","Portugal","Hungary","Scotland","South Korea","Northern Ireland","Algeria","Iraq","Canada"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [14,8,12,12,10,6,11,7,10,12,3,5,4,1,2,2,2,2,1,4,2,1,1,0]
					}
				]

			};
	var WCFourteenGoals = {
	labels : ["West Germany","Argentina","Italy","England","Yugoslavia","Czechoslovakia","Cameroon","Republic of Ireland","Brazil","Spain","Belgium","Romania","Costa Rica","Colombia","Netherlands","Uruguay","Soviet Union","Austria","Scotland","Egypt","Sweden","South Korea","United States","United Arab Emirates"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [15,5,10,8,8,10,7,2,4,6,6,4,4,4,3,2,4,2,2,1,3,1,2,2]
					}
				]

			};
	var WCFifteenGoals = {
	labels : ["Brazil","Italy","Sweden","Bulgaria","Germany","Romania","Netherlands","Spain","Nigeria","Argentina","Belgium","Saudi Arabia","Mexico","United States","Switzerland","Republic of Ireland","Norway","Russia","Colombia","South Korea","Bolivia","Cameroon","Morocco","Greece"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [11,8,15,10,9,10,8,10,7,8,4,5,4,3,5,2,1,7,4,4,1,3,2,0]
					}
				]

			};
	var WCSixteenGoals = {
	labels : ["France","Brazil","Croatia","Netherlands","Italy","Argentina","Germany","Denmark","England","Yugoslavia","Romania","Nigeria","Mexico","Paraguay","Norway","Chile","Spain","Morocco","Belgium","Iran","Colombia","Jamaica","Austria","South Africa","Cameroon","Tunisia","Scotland","Saudi Arabia","Bulgaria","South Korea","Japan","United States"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [15,14,11,13,8,10,8,9,7,5,4,6,8,3,5,5,8,5,3,2,1,3,3,3,2,1,2,2,1,2,1,1]
					}
				]

			};
	var WCSeventeenGoals = {
	labels : ["Brazil","Germany","Turkey","South Korea","Spain","England","Senegal","United States","Japan","Denmark","Mexico","Republic of Ireland","Sweden","Belgium","Italy","Paraguay","South Africa","Argentina","Costa Rica","Cameroon","Portugal","Russia","Croatia","Ecuador","Poland","Uruguay","Nigeria","France","Tunisia","Slovenia","China PR","Saudi Arabia"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [18,14,10,8,10,6,7,7,5,5,4,6,5,6,5,6,5,2,5,2,6,4,2,2,3,4,1,0,1,2,0,0]
					}
				]

			};
	var WCEighteenGoals = {
	labels : ["Italy","France","Germany","Portugal","Brazil","Argentina","England","Ukraine","Spain","Switzerland","Netherlands","Ecuador","Ghana","Sweden","Mexico","Australia","South Korea","Paraguay","Ivory Coast","Czech Republic","Poland","Croatia","Angola","Tunisia","Iran","United States","Trinidad and Tobago","Japan","Saudi Arabia","Togo","Costa Rica","Serbia and Montenegro"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [12,9,14,7,10,11,6,5,9,4,3,5,4,3,5,5,3,2,5,3,2,2,1,3,2,2,0,2,2,1,3,2]
					}
				]

			};
	var WCNineteenGoals = {
	labels : ["Spain","Netherlands","Germany,","Uruguay","Argentina","Brazil","Ghana","Paraguay","Japan","Chile","Portugal","United States","England","Mexico","South Korea","Slovakia","Ivory Coast","Slovenia","Switzerland","South Africa","Australia","New Zealand","Serbia","Denmark","Greece","Italy","Nigeria","Algeria","France","Honduras","Cameroon","North Korea"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [8,12,16,11,10,9,5,3,4,3,7,5,3,4,6,5,4,3,1,3,3,2,2,3,2,4,3,0,1,0,2,1]
					}
				]

			};
	var WCTwentyGoals = {
	labels : ["Germany","Argentina","Netherlands","Brazil","Colombia","Belgium","France","Costa Rica","Chile","Mexico","Switzerland","Uruguay","Greece","Algeria","United States","Nigeria","Ecuador","Portugal","Croatia","Bosnia and Herzegovina","Ivory Coast","Italy","Spain","Russia","Ghana","England","South Korea","Iran","Japan","Australia","Honduras","Cameroon"],
				datasets : [
					{
						fillColor : "#fec44f",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "#993404",
						highlightStroke : "rgba(151,187,205,1)",
						data : [19,16,17,11,12,12,10,9,7,7,6,6,5,4,4,4,4,4,3,3,3,3,3,2,1,1,1,1,1,0,0,0]
					}
				]

			};		
			window.onload = function(){
			var ctx = document.getElementById("wrapper"+WrapperName).getContext("2d");
			if(WrapperName=="1930")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCOneGoals, {
						responsive: true,
					barShowStroke: false
					});
				
					 
			}
			if(WrapperName=="1934")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCTwoGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1938")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCThreeGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1950")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCFourGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1954")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCFiveGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1958")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCSixGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1962")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCSevenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1966")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCEightGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1970")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCNineGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1974")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCTenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1978")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCElevenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1982")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCTwelveGoals, {
						responsive: true,
					barShowStroke: false
					});
					console.log(JSON.stringify(WCTwelveGoals.datasets));
			}
			if(WrapperName=="1986")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCThirteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1990")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCFourteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1994")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCFifteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="1998")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCSixteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="2002")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCSeventeenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="2006")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCEighteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="2010")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCNineteenGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			if(WrapperName=="2014")
			{
				  var chart = new Chart(ctx).HorizontalBar(WCTwentyGoals, {
						responsive: true,
					barShowStroke: false
					});
			}
			};
	window.onload();
	}
}
