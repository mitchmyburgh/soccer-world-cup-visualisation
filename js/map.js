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
    defaultFill: "#d3d3d3",
    //overview
    champion: "#762a83",
    finalist: "#af8dc3",
    semifinalist: "#e7d4e8",
    quarterfinalist: "#a6dba0",
    last16: "#5aae61",
    groupstages: "#1b7837",
    championAndHost: "url(#championAndHost)",
    finalistAndHost: "url(#finalistAndHost)",
    semifinalistAndHost: "url(#semifinalistAndHost)",
    quarterfinalistAndHost: "url(#quarterfinalistAndHost)",
    last16AndHost: "url(#last16AndHost)",
    groupstagesAndHost: "url(#groupstagesAndHost)",
    //attendance
    attendance1: "#ece7f2",
    attendance2: "#d0d1e6",
    attendance3: "#a6bddb",
    attendance4: "#74a9cf",
    attendance5: "#3690c0",
    attendance6: "#0570b0",
    attendance7: "#045a8d",
    attendance8: "#023858",
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
  newMap=null;
}

var attendanceMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < attendanceMap.length; i ++){
    newMap[attendanceMap[i].country].fillKey = attendanceMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
  newMap=null;
}
var goalsScoredMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < goalsScoredMap.length; i ++){
    newMap[goalsScoredMap[i].country].fillKey = goalsScoredMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
  newMap=null;
}

var topScorerMapDisp = function(){
  var newMap = jQuery.extend(true, {}, cleanMap);
  for (var i = 0; i < topScorerMap.length; i ++){
    newMap[topScorerMap[i].country].fillKey = topScorerMap[i].fillKey;
  }
  world.updateChoropleth(newMap);
  newMap=null;
}
