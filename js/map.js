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
  data: {
    CAN: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ca.png'},
    USA: { fillKey: "semifinalistAndHost", text: "Hosted once: 1994", flag: '../data/flags/us.png'},
    MEX: { fillKey: "quarterfinalistAndHost", text: "Hosted twice: 1970, 1986", flag: '../data/flags/mx.png'},
    CUB: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/cu.png'},
    URY: { fillKey: "championAndHost", text: "Hosted once: 1930 <br> Won twice: 1930, 1950", flag: '../data/flags/za.png'},
    ITA: { fillKey: "championAndHost", text: "Hosted once: 1934, 1990 <br> Won 4 Times: 1934, 1938, 1982, 2006", flag: '../data/flags/za.png'},
    FRA: { fillKey: "championAndHost", text: "Hosted once: 1938, 1998 <br> Won once: 1998", flag: '../data/flags/za.png'},
    BRA: { fillKey: "championAndHost", text: "Hosted twice: 1950, 2014 <br> Won 5 times: 1958, 1962, 1970, 1994, 2002", flag: '../data/flags/za.png'},
    CHE: { fillKey: "quarterfinalistAndHost", text: "Hosted once: 1954", flag: '../data/flags/za.png'},
    SWE: { fillKey: "finalistAndHost", text: "Hosted once: 1958", flag: '../data/flags/za.png'},
    CHL: { fillKey: "semifinalistAndHost", text: "Hosted once: 1962", flag: '../data/flags/za.png'},
    GBR: { fillKey: "championAndHost", text: "Hosted once: 1966 <br> Won once: 1966", flag: '../data/flags/za.png'},
    DEU: { fillKey: "championAndHost", text: "Hosted once: 1974, 2006 <br> Won 4 times: 1954, 1974, 1990, 2014", flag: '../data/flags/za.png'},
    ARG: { fillKey: "championAndHost", text: "Hosted once: 1978 <br> Won twice: 1978, 1986", flag: '../data/flags/za.png'},
    ESP: { fillKey: "championAndHost", text: "Hosted once: 1982 <br> Won once: 2010", flag: '../data/flags/za.png'},
    KOR: { fillKey: "semifinalistAndHost", text: "Hosted once: 2002", flag: '../data/flags/za.png'},
    JPN: { fillKey: "last16AndHost", text: "Hosted once: 2002", flag: '../data/flags/za.png'},
    ZAF: { fillKey: "groupstagesAndHost", text: "Hosted once: 2010", flag: '../data/flags/za.png'},
    //Countries that competed
    HND: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    SLV: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    HTI: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    JAM: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    TTO: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    CRI: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    COL: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    ECU: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    PER: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    BOL: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    PRY: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    RUS: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    CHN: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/za.png'},
    PRK: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/za.png'},
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


var colors = d3.scale.category10();

$("input[name='filter']").on("click", function () {
  alert($('input[name=filter]:checked', '#filterForm').val());
  world.updateChoropleth({
    USA: colors(Math.random() * 10),
    RUS: colors(Math.random() * 100),
    AUS: { fillKey: 'defaultFill' },
    BRA: colors(Math.random() * 50),
    CAN: colors(Math.random() * 50),
    ZAF: colors(Math.random() * 50),
    IND: colors(Math.random() * 50),
  });
});
