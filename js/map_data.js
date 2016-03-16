var cleanMap = {
   //champ and host
    URY: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1930 (<span class='fa fa-users'></span>) <br> <span class='icon-trophy'></span>Won twice: 1930, 1950 <br> <span class='icon-soccer-shoe'></span>Top Player: Diego Forlan(2010)", flag: '../data/flags/uy.png'},
    ITA: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted twice: 1934, 1990 <br> <span class='icon-trophy'></span>Won 4 Times: 1934, 1938, 1982, 2006<br> <span class='icon-soccer-shoe'></span>Top Player: Salvitore Sillacci(1982), Paolo Rossi 1990", flag: '../data/flags/it.png'},
    FRA: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted twice: 1938, 1998 <br> <span class='icon-trophy'></span>Won once: 1998<br> <span class='icon-soccer-shoe'></span>Top Player: Thierry Henry(1958)", flag: '../data/flags/fr.png'},
    BRA: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted twice: 1950, 2014 <br> <span class='icon-trophy'></span>Won 5 times: 1958, 1962, 1970, 1994, 2002 <br> <span class='icon-soccer-shoe'></span>Top Player: Leonidas(1938), Ademir(1950), Garrincha and Vava(1962), Ronaldo(2002)", flag: '../data/flags/br.png'},
    DEU: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted twice: 1974, 2006 <br> <span class='icon-trophy'></span>Won 4 times: 1954, 1974, 1990, 2014<br> <span class='icon-soccer-shoe'></span>Top Player:Gert Mueller(1970), Miroslav Klose(2006),Thomas Mueller(2010)", flag: '../data/flags/de.png'},
    ARG: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1978 <br> <span class='icon-trophy'></span>Won twice: 1978, 1986 <span class='icon-soccer-shoe'></span>Top Player: Guillermo Stabile(1930), Mario Kempes(1978)", flag: '../data/flags/ar.png'},
    ESP: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1982 <br> <span class='icon-trophy'></span>Won once: 2010<br> <span class='icon-soccer-shoe'></span>Top Player: David Villa(2010)", flag: '../data/flags/es.png'},
    GBR: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1966 <br> <span class='icon-trophy'></span>Won once: 1966<br> <span class='icon-soccer-shoe'></span>Top Player: Gary Linneker(1986)", flag: '../data/flags/gb.png'},

    //hosts
    USA: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1994", flag: '../data/flags/us.png'},
    MEX: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted twice: 1970, 1986", flag: '../data/flags/mx.png'},
    CHE: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1954", flag: '../data/flags/ch.png'},
    SWE: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1958", flag: '../data/flags/se.png'},
    CHL: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 1962<br> <span class='icon-soccer-shoe'></span>Top Player: Alexis Sanchez(1962)", flag: '../data/flags/cl.png'},
    KOR: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 2002", flag: '../data/flags/kr.png'},
    JPN: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 2002", flag: '../data/flags/jp.png'},
    ZAF: { fillKey: "defaultFill", text: "<span class='icon-soccer-court'></span>Hosted once: 2010", flag: '../data/flags/za.png'},

    //Countries that competed
    HND: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/hn.png'},
    SLV: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sl.png'},
    HTI: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ht.png'},
    JAM: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/jm.png'},
    TTO: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tt.png'},
    CAN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ca.png'},
    CUB: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cu.png'},
    CRI: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cr.png'},
    COL: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: James Rodriguez(2014)", flag: '../data/flags/co.png'},
    ECU: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ec.png'},
    PER: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/pe.png'},
    BOL: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/bo.png'},
    PRY: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/py.png'},

//asia australasia
    RUS: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Andrei Arshavin(1962),Olag Solenko(1994)", flag: '../data/flags/ru.png'},
    CHN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cn.png'},
    PRK: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/kp.png'},
    AUS: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/au.png'},
    NZL: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/nz.png'},

  //africa
  AGO: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ao.png'},
  COD: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cd.png'},
  EGY: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/eg.png'},
  TUN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tn.png'},
  CIV: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ci.png'},
  TGO: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/TG.png'},
  DZA: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/dz.png'},
  MAR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ma.png'},
  NGA: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ng.png'},
  GHA: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/gh.png'},
  CMR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cm.png'},
  SEN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sn.png'},

  //europe
  SVK: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sk.png'},
  GRC: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/gr.png'},
  SRB: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/rs.png'},
  BIH: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ba.png'},
  SVN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/si.png'},
  CZE: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted <span class='icon-soccer-shoe'></span>Top Player: Oldřich Nejedlý(1934)", flag: '../data/flags/cz.png'},
  NOR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/no.png'},
  HUN: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted <span class='icon-soccer-shoe'></span>Top Player: Sándor Kocsis(1954),Flórián Albert(1962)", flag: '../data/flags/no.png'},

  UKR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ua.png'},
  ROU: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ro.png'},
  PRT: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Eusabio(1966)", flag: '../data/flags/pt.png'},
  BEL: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/be.png'},
  POL: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Robert Lawandowski(1974)", flag: '../data/flags/pl.png'},
  AUT: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/at.png'},
  HRV: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Davor Suker(1998)", flag: '../data/flags/hr.png'},
  BGR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Hristo Stroikov(1994)", flag: '../data/flags/bg.png'},
  TUR: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tr.png'},
  NLD: { fillKey: "defaultFill", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Wesley Schneider(2010)", flag: '../data/flags/nl.png'},

};

var overviewMap = [
  {country: "URY", fillKey: "championAndHost"},
  {country: "ITA", fillKey: "championAndHost"},
  {country: "FRA",fillKey: "championAndHost"},
  {country: "BRA", fillKey: "championAndHost"},
  {country: "DEU", fillKey: "championAndHost"},
    {country: "ARG", fillKey: "championAndHost"},
    {country: "ESP", fillKey: "championAndHost"},
    {country: "GBR", fillKey: "championAndHost"},

    //hosts
    {country: "USA", fillKey: "semifinalistAndHost"},
    {country: "MEX", fillKey: "quarterfinalistAndHost"},
    {country: "CHE", fillKey: "quarterfinalistAndHost"},
    {country: "SWE", fillKey: "finalistAndHost"},
    {country: "CHL", fillKey: "semifinalistAndHost"},
    {country: "KOR", fillKey: "semifinalistAndHost"},
    {country: "JPN", fillKey: "last16AndHost"},
    {country: "ZAF", fillKey: "groupstagesAndHost"},

    //Countries that competed
    {country: "HND", fillKey: "groupstages"},
    {country: "SLV", fillKey: "groupstages"},
    {country: "HTI", fillKey: "groupstages"},
    {country: "JAM", fillKey: "groupstages"},
    {country: "TTO", fillKey: "groupstages"},
    {country: "CAN", fillKey: "groupstages"},
    {country: "CUB", fillKey: "quarterfinalist"},
    {country: "CRI", fillKey: "quarterfinalist"},
    {country: "COL", fillKey: "quarterfinalist"},
    {country: "ECU", fillKey: "last16"},
    {country: "PER", fillKey: "quarterfinalist"},
    {country: "BOL", fillKey: "groupstages"},
    {country: "PRY", fillKey: "quarterfinalist"},

//asia australasia
    {country: "RUS", fillKey: "groupstages"},
    {country: "CHN", fillKey: "groupstages"},
    {country: "PRK", fillKey: "quarterfinalist"},
    {country: "AUS", fillKey: "last16"},
    {country: "NZL", fillKey: "groupstages"},

  //africa
  {country: "AGO", fillKey: "groupstages"},
  {country: "COD",  fillKey: "groupstages"},
  {country: "EGY", fillKey: "groupstages"},
  {country: "TUN", fillKey: "groupstages"},
  {country: "CIV", fillKey: "groupstages"},
  {country: "TGO", fillKey: "groupstages"},
  {country: "DZA", fillKey: "last16"},
  {country: "MAR", fillKey: "last16"},
  {country: "NGA", fillKey: "last16"},
  {country: "GHA", fillKey: "quarterfinalist"},
  {country: "CMR", fillKey: "quarterfinalist"},
  {country: "SEN", fillKey: "quarterfinalist"},

  //europe
  {country: "SVK", fillKey: "groupstages"},
  {country: "GRC", fillKey: "groupstages"},
  {country: "SRB", fillKey: "last16"},
  {country: "BIH", fillKey: "last16"},
  {country: "SVN", fillKey: "last16"},
  {country: "CZE", fillKey: "last16"},
  {country: "NOR", fillKey: "last16"},

  {country: "UKR", fillKey: "quarterfinalist"},
  {country: "ROU", fillKey: "quarterfinalist"},
  {country: "PRT", fillKey: "semifinalist"},
  {country: "BEL", fillKey: "semifinalist"},
  {country: "POL", fillKey: "semifinalist"},
  {country: "AUT", fillKey: "semifinalist"},
  {country: "HRV", fillKey: "semifinalist"},
  {country: "BGR", fillKey: "semifinalist"},
  {country: "TUR", fillKey: "semifinalist"},
  {country: "NLD", fillKey: "finalist"}
];

var goalsScoredMap = [
  {country: "URY", fillKey: "championAndHost"},
  {country: "ITA", fillKey: "championAndHost"},
  {country: "FRA",fillKey: "championAndHost"},
  {country: "BRA", fillKey: "championAndHost"},
  {country: "DEU", fillKey: "championAndHost"},
    {country: "ARG", fillKey: "championAndHost"},
    {country: "ESP", fillKey: "championAndHost"},
    {country: "GBR", fillKey: "championAndHost"},

    //hosts
    {country: "USA", fillKey: "semifinalistAndHost"},
    {country: "MEX", fillKey: "quarterfinalistAndHost"},
    {country: "CHE", fillKey: "quarterfinalistAndHost"},
    {country: "SWE", fillKey: "finalistAndHost"},
    {country: "CHL", fillKey: "semifinalistAndHost"},
    {country: "KOR", fillKey: "semifinalistAndHost"},
    {country: "JPN", fillKey: "last16AndHost"},
    {country: "ZAF", fillKey: "groupstagesAndHost"},

    //Countries that competed
    {country: "HND", fillKey: "groupstages"},
    {country: "SLV", fillKey: "groupstages"},
    {country: "HTI", fillKey: "groupstages"},
    {country: "JAM", fillKey: "groupstages"},
    {country: "TTO", fillKey: "groupstages"},
    {country: "CAN", fillKey: "groupstages"},
    {country: "CUB", fillKey: "quarterfinalist"},
    {country: "CRI", fillKey: "quarterfinalist"},
    {country: "COL", fillKey: "quarterfinalist"},
    {country: "ECU", fillKey: "last16"},
    {country: "PER", fillKey: "quarterfinalist"},
    {country: "BOL", fillKey: "groupstages"},
    {country: "PRY", fillKey: "quarterfinalist"},

//asia australasia
    {country: "RUS", fillKey: "groupstages"},
    {country: "CHN", fillKey: "groupstages"},
    {country: "PRK", fillKey: "quarterfinalist"},
    {country: "AUS", fillKey: "last16"},
    {country: "NZL", fillKey: "groupstages"},

  //africa
  {country: "AGO", fillKey: "groupstages"},
  {country: "COD",  fillKey: "groupstages"},
  {country: "EGY", fillKey: "groupstages"},
  {country: "TUN", fillKey: "groupstages"},
  {country: "CIV", fillKey: "groupstages"},
  {country: "TGO", fillKey: "groupstages"},
  {country: "DZA", fillKey: "last16"},
  {country: "MAR", fillKey: "last16"},
  {country: "NGA", fillKey: "last16"},
  {country: "GHA", fillKey: "quarterfinalist"},
  {country: "CMR", fillKey: "quarterfinalist"},
  {country: "SEN", fillKey: "quarterfinalist"},

  //europe
  {country: "SVK", fillKey: "groupstages"},
  {country: "GRC", fillKey: "groupstages"},
  {country: "SRB", fillKey: "last16"},
  {country: "BIH", fillKey: "last16"},
  {country: "SVN", fillKey: "last16"},
  {country: "CZE", fillKey: "last16"},
  {country: "NOR", fillKey: "last16"},
  {country:"HUN", fillKey: "quarterfinalist"},

  {country: "UKR", fillKey: "quarterfinalist"},
  {country: "ROU", fillKey: "quarterfinalist"},
  {country: "PRT", fillKey: "semifinalist"},
  {country: "BEL", fillKey: "semifinalist"},
  {country: "POL", fillKey: "semifinalist"},
  {country: "AUT", fillKey: "semifinalist"},
  {country: "HRV", fillKey: "semifinalist"},
  {country: "BGR", fillKey: "semifinalist"},
  {country: "TUR", fillKey: "semifinalist"},
  {country: "NLD", fillKey: "finalist"}
];

var attendanceMap = [
  {country: "URY", fillKey: "attendance2"},
  {country: "ITA", fillKey: "attendance6"},
  {country: "FRA",fillKey: "attendance6"},
  {country: "BRA", fillKey: "attendance7"},
  {country: "DEU", fillKey: "attendance7"},
    {country: "ARG", fillKey: "attendance4"},
    {country: "ESP", fillKey: "attendance5"},
    {country: "GBR", fillKey: "attendance4"},

    //hosts
    {country: "USA", fillKey: "attendance8"},
    {country: "MEX", fillKey: "attendance5"},
    {country: "CHE", fillKey: "attendance2"},
    {country: "SWE", fillKey: "attendance2"},
    {country: "CHL", fillKey: "attendance2"},
    {country: "KOR", fillKey: "attendance6"},
    {country: "JPN", fillKey: "attendance6"},
    {country: "ZAF", fillKey: "attendance7"},
];

var topScorerMap = [
  {country: "BRA", fillKey: "championAndHost"}, //4, 1938(Leonidas),1950(Ademir),1962X2(Garrincha,Vava),2002(Ronaldo)
  {country: "ARG", fillKey: "championAndHost"},//2
  {country: "CZE", fillKey: "last16"},//1
  {country: "HUN", fillKey: "quarterfinalist"},//1
  {country: "FRA",fillKey: "championAndHost"},//1
  {country: "CHL", fillKey: "semifinalistAndHost"},//1
  {country: "RUS", fillKey: "groupstages"},//2
  {country: "PRT", fillKey: "semifinalist"},//1
  {country: "DEU", fillKey: "championAndHost"},//3
  {country: "POL", fillKey: "semifinalist"},//1
  {country: "ITA", fillKey: "championAndHost"},//2
  {country: "GBR", fillKey: "championAndHost"},//1
  {country: "BGR", fillKey: "semifinalist"},//1
  {country: "HRV", fillKey: "semifinalist"},//1
  {country: "ESP", fillKey: "championAndHost"},//1
  {country:"NLD", fillKey: "groupstages"},//1
  {country: "URY", fillKey:"championAndHost"},//1
  {country: "COL", fillKey: "quarterfinalist"},//1
];

var ScorerByYear = {"1930":[
  {country: "ARG", fillKey:"finalist"},
],
"1934":[
  {country:"CZE", fillKey: "semifinalist"},
],
"1962":[
  {country: "BRA", fillKey: "championAndHost"},//2
  {country: "HUN", fillKey: "quarterfinalist"},//1
  {country: "CHL", fillKey: "semifinalistAndHost"},//1
  {country: "RUS", fillKey: "groupstages"},//2
]}

var compByYear = {"1930":[
  {country: "URY", fillKey:"championAndHost"},
  {country: "ARG", fillKey:"finalist"},
  {country: "USA", fillKey:"semifinalist"},
  {country: "ROU", fillKey:"semifinalist"},
  {country: "BEL", fillKey:"groupstages"},
  {country: "FRA", fillKey:"groupstages"},
  {country: "MEX", fillKey:"groupstages"},
  {country: "BRA", fillKey:"groupstages"},
  {country: "CHL", fillKey:"groupstages"},
  {country: "PER", fillKey:"groupstages"},
  {country: "BOL", fillKey:"groupstages"},
  {country: "PRY", fillKey:"groupstages"}
],
"1934":[
  {country:"ITA", fillKey: "championAndHost"},
  {country:"CZE", fillKey: "semifinalist"},
  {country:"AUT", fillKey: "semifinalist"},
  {country:"DEU", fillKey: "semifinalist"},
  {country:"HUN", fillKey: "quarterfinalist"},
  {country:"SWE", fillKey: "quarterfinalist"},
  {country:"ESP", fillKey: "quarterfinalist"},
  {country:"CHE", fillKey: "quarterfinalist"},
  {country:"USA", fillKey: "groupstages"},
  {country:"BRA", fillKey: "groupstages"},
  {country:"ARG", fillKey: "groupstages"},
  {country:"EGY", fillKey: "groupstages"},
  {country:"ROU", fillKey: "groupstages"},
  {country:"BEL", fillKey: "groupstages"},
  {country:"NLD", fillKey: "groupstages"},
  {country:"FRA", fillKey: "groupstages"}
]}
