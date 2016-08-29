var svg = d3.select('.main').append('svg');

// Give the SVG some size
svg.attr("width", 600).attr('height', 300);

//Use linear Scale and Log scale
//domain 15 - 90 years to a range of 250 px
//Creates a linear scale of domain that maps these values to a range scale. Backwards because of how y works in D3.
var y = d3.scale.linear().domain([15,90]).range([250,0]); //y for y-axis and check for corresponding values
y(15) -> 250
y(90) ->0

//X is normal because of how it travels to the right in SVG graphic form
var x = d3.scale.log().domain([250,100000]).range([0,600]);

//Drawing a Circle
//population = 52070 - 1.38 billion map to range 10 - 50px;
//sqrt because we are workig with circles
var r = d3.scale.sqrt().domain([52070, 130000000]).range([10,50]);

//Append the circle to a location using x, y radius

console.log(y(77), x(13330), r(130000000
	--> returns//43.333333333333314 398.1976156961321 50 pixel value

	svg

	svg.append('circle');

	svg.append('circle').attr('fill','red').attr('r',r(130000000)).attr('cx',x(13330)).attr('cy',y(77));