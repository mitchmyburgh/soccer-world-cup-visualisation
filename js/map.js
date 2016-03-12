var world = new Datamap({
  element: document.getElementById("world"),
  projection: 'mercator',
  geographyConfig: {
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<img src=' + data.flag + ' width = 20 height = 13 style="float: right;">' + '<br>' +
              data.numWins + ' Wins: ' +  data.wins + '<br>' + data.numHostNation + ' times hosted: ' + data.hostNation;
    },
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 3,
  },
  fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "url(#horizontal-stripe)"
  },
  data: {
    USA: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png'},
    JPN: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png' },
    ITA: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png' },
    CRI: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png' },
    KOR: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png' },
    DEU: { fillKey: "authorHasTraveledTo", numWins: 5,  wins: "1991, 1992, 1993, 1994", numHostNation: 1, hostNation: "1991", flag: '../data/flags/za.png' },
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