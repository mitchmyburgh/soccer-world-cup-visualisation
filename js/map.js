var world = new Datamap({
  element: document.getElementById("world"),
  projection: 'mercator',
  geographyConfig: {
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<img src=' + data.flag + ' width = 20 height = 13 style="float: right;">' + '<br>' +
              data.text;
    },
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 3,
  },
  fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "url(#horizontal-stripe)",
    champion: "#8b0000",
    finalist: "#E34234",
    semifinalist: "#ff4500",
    quarterfinalist: "#e6e600",
    last16: "#32CD32",
    groupstages: "#006400",
    championAndHost: "url(#championAndHost)",
    finalistAndHost: "url(#finalistAndHost)",
    semifinalistAndHost: "url(#semifinalistAndHost)",
    quarterfinalistAndHost: "url(#quarterfinalistAndHost)",
    last16AndHost: "url(#last16AndHost)",
    groupstagesAndHost: "url(#groupstagesAndHost)",
  },
  data:
  {

  },
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      //zoomEurope();
    });
    datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
    function redraw() {
        datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }
  }
});


var overviewMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < overviewMap.length; i ++){
    newMap[overviewMap[i].country].fillKey = overviewMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
}

var attendanceMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < attendanceMap.length; i ++){
    newMap[attendanceMap[i].country].fillKey = attendanceMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
}
var goalsScoredMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < goalsScoredMap.length; i ++){
    newMap[goalsScoredMap[i].country].fillKey = goalsScoredMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
}

var topScorerMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < topScorerMap.length; i ++){
    newMap[topScorerMap[i].country].fillKey = topScorerMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
}