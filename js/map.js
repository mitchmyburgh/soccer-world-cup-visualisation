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
   //champ and host
    URY: { fillKey: "championAndHost", text: "Hosted once: 1930 <br> Won twice: 1930, 1950", flag: '../data/flags/uy.png'},
    ITA: { fillKey: "championAndHost", text: "Hosted once: 1934, 1990 <br> Won 4 Times: 1934, 1938, 1982, 2006", flag: '../data/flags/it.png'},
    FRA: { fillKey: "championAndHost", text: "Hosted once: 1938, 1998 <br> Won once: 1998", flag: '../data/flags/fr.png'},
    BRA: { fillKey: "championAndHost", text: "Hosted twice: 1950, 2014 <br> Won 5 times: 1958, 1962, 1970, 1994, 2002", flag: '../data/flags/br.png'},
    DEU: { fillKey: "championAndHost", text: "Hosted once: 1974, 2006 <br> Won 4 times: 1954, 1974, 1990, 2014", flag: '../data/flags/de.png'},
    ARG: { fillKey: "championAndHost", text: "Hosted once: 1978 <br> Won twice: 1978, 1986", flag: '../data/flags/ar.png'},
    ESP: { fillKey: "championAndHost", text: "Hosted once: 1982 <br> Won once: 2010", flag: '../data/flags/es.png'},
    GBR: { fillKey: "championAndHost", text: "Hosted once: 1966 <br> Won once: 1966", flag: '../data/flags/gb.png'},

    //hosts
    USA: { fillKey: "semifinalistAndHost", text: "Hosted once: 1994", flag: '../data/flags/us.png'},
    MEX: { fillKey: "quarterfinalistAndHost", text: "Hosted twice: 1970, 1986", flag: '../data/flags/mx.png'},
    CHE: { fillKey: "quarterfinalistAndHost", text: "Hosted once: 1954", flag: '../data/flags/ch.png'},
    SWE: { fillKey: "finalistAndHost", text: "Hosted once: 1958", flag: '../data/flags/se.png'},
    CHL: { fillKey: "semifinalistAndHost", text: "Hosted once: 1962", flag: '../data/flags/cl.png'},
    KOR: { fillKey: "semifinalistAndHost", text: "Hosted once: 2002", flag: '../data/flags/kr.png'},
    JPN: { fillKey: "last16AndHost", text: "Hosted once: 2002", flag: '../data/flags/jp.png'},
    ZAF: { fillKey: "groupstagesAndHost", text: "Hosted once: 2010", flag: '../data/flags/za.png'},

    //Countries that competed
    HND: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/hn.png'},
    SLV: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/sl.png'},
    HTI: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ht.png'},
    JAM: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/jm.png'},
    TTO: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/tt.png'},
    CAN: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ca.png'},
    CUB: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/cu.png'},
    CRI: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/cr.png'},
    COL: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/co.png'},
    ECU: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/ec.png'},
    PER: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/pe.png'},
    BOL: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/bo.png'},
    PRY: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/py.png'},

//asia australasia
    RUS: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ru.png'},
    CHN: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/cn.png'},
    PRK: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/kp.png'},
    AUS: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/au.png'},
    NZL: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/nz.png'},

  //africa
  AGO: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ao.png'},
  COD: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/cd.png'},
  EGY: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/eg.png'},
  TUN: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/tn.png'},
  CIV: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/ci.png'},
  TGO: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/TG.png'},
  DZA: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/dz.png'},
  MAR: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/ma.png'},
  NGA: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/ng.png'},
  GHA: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/gh.png'},
  CMR: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/cm.png'},
  SEN: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/sn.png'},

  //europe
  SVK: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/sk.png'},
  GRC: { fillKey: "groupstages", text: "Never won and never hosted", flag: '../data/flags/gr.png'},
  SRB: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/rs.png'},
  BIH: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/ba.png'},
  SVN: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/si.png'},
  CZE: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/cz.png'},
  NOR: { fillKey: "last16", text: "Never won and never hosted", flag: '../data/flags/no.png'},
  
  UKR: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/ua.png'},
  ROU: { fillKey: "quarterfinalist", text: "Never won and never hosted", flag: '../data/flags/ro.png'},
  PRT: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/pt.png'},
  BEL: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/be.png'},
  POL: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/pl.png'},
  AUT: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/at.png'},
  HRV: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/hr.png'},
  BGR: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/bg.png'},
  TUR: { fillKey: "semifinalist", text: "Never won and never hosted", flag: '../data/flags/tr.png'},
  NLD: { fillKey: "finalist", text: "Never won and never hosted", flag: '../data/flags/nl.png'},
  
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
   //champ and host
    URY: { fillKey: "defaultFill", text: "Hosted once: 1930 <br> Won twice: 1930, 1950", flag: '../data/flags/uy.png'},
    ITA: { fillKey: "defaultFill", text: "Hosted once: 1934, 1990 <br> Won 4 Times: 1934, 1938, 1982, 2006", flag: '../data/flags/it.png'},
    FRA: { fillKey: "defaultFill", text: "Hosted once: 1938, 1998 <br> Won once: 1998", flag: '../data/flags/fr.png'},
    BRA: { fillKey: "defaultFill", text: "Hosted twice: 1950, 2014 <br> Won 5 times: 1958, 1962, 1970, 1994, 2002", flag: '../data/flags/br.png'},
    DEU: { fillKey: "defaultFill", text: "Hosted once: 1974, 2006 <br> Won 4 times: 1954, 1974, 1990, 2014", flag: '../data/flags/de.png'},
    ARG: { fillKey: "defaultFill", text: "Hosted once: 1978 <br> Won twice: 1978, 1986", flag: '../data/flags/ar.png'},
    ESP: { fillKey: "defaultFill", text: "Hosted once: 1982 <br> Won once: 2010", flag: '../data/flags/es.png'},
    GBR: { fillKey: "defaultFill", text: "Hosted once: 1966 <br> Won once: 1966", flag: '../data/flags/gb.png'},

    //hosts
    USA: { fillKey: "defaultFill", text: "Hosted once: 1994", flag: '../data/flags/us.png'},
    MEX: { fillKey: "defaultFill", text: "Hosted twice: 1970, 1986", flag: '../data/flags/mx.png'},
    CHE: { fillKey: "defaultFill", text: "Hosted once: 1954", flag: '../data/flags/ch.png'},
    SWE: { fillKey: "defaultFill", text: "Hosted once: 1958", flag: '../data/flags/se.png'},
    CHL: { fillKey: "defaultFill", text: "Hosted once: 1962", flag: '../data/flags/cl.png'},
    KOR: { fillKey: "defaultFill", text: "Hosted once: 2002", flag: '../data/flags/kr.png'},
    JPN: { fillKey: "defaultFill", text: "Hosted once: 2002", flag: '../data/flags/jp.png'},
    ZAF: { fillKey: "defaultFill", text: "Hosted once: 2010", flag: '../data/flags/za.png'},

    //Countries that competed
    HND: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/hn.png'},
    SLV: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/sl.png'},
    HTI: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ht.png'},
    JAM: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/jm.png'},
    TTO: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/tt.png'},
    CAN: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ca.png'},
    CUB: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cu.png'},
    CRI: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cr.png'},
    COL: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/co.png'},
    ECU: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ec.png'},
    PER: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/pe.png'},
    BOL: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/bo.png'},
    PRY: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/py.png'},

//asia australasia
    RUS: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ru.png'},
    CHN: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cn.png'},
    PRK: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/kp.png'},
    AUS: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/au.png'},
    NZL: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/nz.png'},

  //africa
  AGO: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ao.png'},
  COD: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cd.png'},
  EGY: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/eg.png'},
  TUN: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/tn.png'},
  CIV: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ci.png'},
  TGO: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/TG.png'},
  DZA: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/dz.png'},
  MAR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ma.png'},
  NGA: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ng.png'},
  GHA: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/gh.png'},
  CMR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cm.png'},
  SEN: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/sn.png'},

  //europe
  SVK: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/sk.png'},
  GRC: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/gr.png'},
  SRB: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/rs.png'},
  BIH: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ba.png'},
  SVN: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/si.png'},
  CZE: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/cz.png'},
  NOR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/no.png'},
  
  UKR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ua.png'},
  ROU: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/ro.png'},
  PRT: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/pt.png'},
  BEL: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/be.png'},
  POL: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/pl.png'},
  AUT: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/at.png'},
  HRV: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/hr.png'},
  BGR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/bg.png'},
  TUR: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/tr.png'},
  NLD: { fillKey: "defaultFill", text: "Never won and never hosted", flag: '../data/flags/nl.png'},
  
  });
});
