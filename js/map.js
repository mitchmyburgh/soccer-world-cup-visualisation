var world = new Datamap({
  element: document.getElementById("world"),
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#000000',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo" style="font-size: 17px; background-color: rgba(255,255,255,0.7);"><strong>' + geography.properties.name + '</strong><img src=' + data.flag + ' width = 20 height = 13 style="float: right;">' + '<br>' +
              data.text+"</div>";
    },
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 3,
  },
  fills: {
    defaultFill: "#d3d3d3",
    defaultFill2: "#868686",
    //overview
    champion: "#640075",
    finalist: "#8a329a",
    semifinalist: "#9970ab",
    quarterfinalist: "#5aae61",
    last16: "#1f893f",
    groupstages: "#006629",
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
    //goals scored
    goalsScored1: "#fee391",
    goalsScored2: "#fec44f",
    goalsScored3: "#fe9929",
    goalsScored4: "#ec7014",
    goalsScored5: "#cc4c02",
    goalsScored6: "#993404",
    goalsScored7: "#662506",
    //Top scorer
    topScorer1: "#c994c7",
    topScorer2: "#df65b0",
    topScorer3: "#e7298a",
    topScorer4: "#ce1256",
    topScorer5: "#91003f",
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
