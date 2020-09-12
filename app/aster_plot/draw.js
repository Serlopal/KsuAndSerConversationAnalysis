let width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    innerRadius = 0.3 * radius;

// convenience layout that makes it easier to compute the class angles
let pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.weight; });

// on hover, display this info
let tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function(d) {
    return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
  });

// classes arcs
let arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) {
    return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
  });

// internal and external radiuses for the plot
let outlineArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

// appends a NEW svg to the body, resizes it and it adds a g group inside i, that
// is translated to the middle
let svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// to make tooltip appear on hover over
svg.call(tip);

d3.csv('aster_data.csv', function(error, data) {

  // cast necessary attributes to Number type
  data.forEach(function(d) {
    d.weight = Number(d.weight);
  });

  let path = svg.selectAll(".solidArc")
      .data(pie(data))
      .enter().append("path")
      .attr("fill", function(d) { return d.data.color; })
      .attr("class", "solidArc")
      .attr("stroke", "gray")
      .attr("d", arc)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  let outerPath = svg.selectAll(".outlineArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("class", "outlineArc")
      .attr("d", outlineArc);


  // calculate the weighted mean score
  let score =
    data.reduce(function(a, b) {
      return a + (b.score * b.weight);
    }, 0) /
    data.reduce(function(a, b) {
      return a + b.weight;
    }, 0);

  svg.append("svg:text")
    .attr("class", "aster-score")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle") // text-align: right
    .text(Math.round(score));

});