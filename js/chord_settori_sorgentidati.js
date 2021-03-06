var mmap_settori_sorgentidati = {
  "Energia":{"name":"Energia","id":0,"data":"settore"},
  "Ambiente e clima":{"name":"Ambiente e clima","id":1,"data":"settore"},
  "Finanza e Investimenti":{"name":"Finanza","id":2,"data":"settore"},
  "Salute":{"name":"Salute","id":3,"data":"settore"},
  "Formazione":{"name":"Formazione","id":4,"data":"settore"},
  "Servizi legali":{"name":"Servizi legali","id":5,"data":"settore"},
  "Immobiliare":{"name":"Immobiliare","id":6,"data":"settore"},
  "Turismo e cultura":{"name":"Turismo e cultura","id":7,"data":"settore"},
  "Trasporti":{"name":"Trasporti","id":8,"data":"settore"},
  "Mappe/Geospaziale":{"name":"Mappe/Geospaziale","id":9,"data":"settore"},
  "Cominicazione e media":{"name":"Cominicazione e media","id":10,"data":"settore"},
  "Agricoltura e settore alimentare":{"name":"Agricoltura e settore alimentare","id":11,"data":"settore"},
  "Ricerca e consulenza":{"name":"Ricerca e consulenza","id":12,"data":"settore"},
  "Ricerca scientifica":{"name":"Ricerca scientifica","id":13,"data":"settore"},
  "Governo e pubblica amministrazione":{"name":"Servizi per la P.A.","id":14,"data":"settore"},
  "Tecnologia e dati":{"name":"Tecnologia e dati","id":15,"data":"settore"},
  "Software":{"name":"Software","id":16,"data":"settore"},
  "dati.gov.it":{"name":"dati.gov.it","id":17,"data":"sorgente"},
  "Camera dei Deputati":{"name":"Camera dei Deputati","id":18,"data":"sorgente"},
  "Senato":{"name":"Senato","id":19,"data":"sorgente"},
  "Consiglio Nazionale delle Ricerche":{"name":"CNR","id":20,"data":"sorgente"},
  "Funzione Pubblica":{"name":"Funzione Pubblica","id":21,"data":"sorgente"},
  "INAIL":{"name":"INAIL","id":22,"data":"sorgente"},
  "INPS":{"name":"INPS","id":23,"data":"sorgente"},
  "ISTAT":{"name":"ISTAT","id":24,"data":"sorgente"},
  "Min. Affari Esteri":{"name":"Min. Affari Esteri","id":25,"data":"sorgente"},
  "Min. Beni Culturali e Turismo":{"name":"Min. Beni Culturali e Turismo","id":26,"data":"sorgente"},
  "Min. Economia e Finanze":{"name":"Min. Economia e Finanze","id":27,"data":"sorgente"},
  "Min. Salute":{"name":"Ministero Salute","id":28,"data":"sorgente"},
  "Min. Sviluppo Economico":{"name":"Min. Sviluppo Economico","id":29,"data":"sorgente"},
  "OpenCoesione":{"name":"OpenCoesione","id":30,"data":"sorgente"},
  "Soldi Pubblici":{"name":"Soldi Pubblici","id":31,"data":"sorgente"},
  "Italia Sicura":{"name":"Italia Sicura","id":32,"data":"sorgente"},
  "OpenEXPO":{"name":"OpenEXPO","id":33,"data":"sorgente"},
  "Portale Cartografico Nazionale":{"name":"Portale Cartografico Naz.","id":34,"data":"sorgente"},
  "Scuola in Chiaro":{"name":"Scuola in Chiaro","id":35,"data":"sorgente"},
  "Regionali":{"name":"Regionali","id":36,"data":"sorgente"},
  "Comunali":{"name":"Comunali","id":37,"data":"sorgente"},
  "Wikipedia":{"name":"Wikipedia","id":38,"data":"sorgente"},
  "OpenStreetMap":{"name":"OpenStreetMap","id":39,"data":"sorgente"},
};

var matrix_settori_sorgentidati = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,2,0,0,0,0,1,0,0,0,0,0,0,0,1,0,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,3],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,2,0,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,2,3,2,5],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,1,0,0,0,9,0,0,0,0,1,0,0,2,0,3,0,6,3,1,8],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,0,0,0,1,2,1,1,0,2,2,2,0,0,0,0,0,0,1,4,3],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,2,1,0,0,0,0,0,0,0,1,0,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,2,3,4,0,2,0,2,1,1,0,0,0,0,0,1,2,3,4],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,0,0,0,0,1,3,1,1,1,1,2,1,0,0,1,1,0,1,3,1,4],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,1,0,0,2,3,6,1,2,2,3,3,2,0,0,0,1,0,3,5,2,4],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,4,1,3,0,4,7,20,1,7,4,3,7,7,1,3,1,1,1,12,9,10,13],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,0,1,0,5,7,12,2,5,4,3,6,5,1,0,2,0,1,4,7,6,10],
  [1,2,1,1,1,1,2,2,1,4,3,1,2,4,5,14,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,0,1,1,0,0,2,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,1,0,0,0,2,0,2,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,1,0,0,1,0,1,0,3,1,3,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,1,0,0,1,1,1,0,9,2,1,4,3,6,20,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,2,0,0,1,1,2,1,2,7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,1,0,0,0,0,1,0,1,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0,2,2,2,1,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0,0,0,1,2,1,1,2,3,7,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,2,0,1,1,2,7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,3,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,0,0,0,2,2,6,0,0,1,1,3,12,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,1,0,2,3,1,3,1,1,2,3,5,9,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,1,0,2,1,1,4,0,3,1,2,10,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,3,2,1,1,1,2,5,1,8,3,2,4,4,4,13,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

colorsrange_settori_sorgentidati = [
        "#5F9EA0", "#5F9EA0","#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0",
        "#5F9EA0", "#5F9EA0","#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#483D8B", "#483D8B", "#483D8B",
        "#483D8B", "#483D8B","#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B",
        "#483D8B", "#483D8B","#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B", "#483D8B"
          ];

drawChords(matrix_settori_sorgentidati,mmap_settori_sorgentidati,"#chart_settori_sorgentidati",colorsrange_settori_sorgentidati);
/*
drawChordsSorgentidati = true;
//$('#relazioni_sorgentidati').hide();
//drawChords(matrix_settori_sorgentidati,mmap_settori_sorgentidati,"#chart_settori_sorgentidati",colorsrange_settori_sorgentidati);


var waypoints_sorgentidati = $('#relazioni_sorgentidati').waypoint(function(direction) {
     if (drawChordsSorgentidati) {
            $('#relazioni_sorgentidati').fadeIn();
            drawChords(matrix_settori_sorgentidati,mmap_settori_sorgentidati,"#chart_settori_sorgentidati",colorsrange_settori_sorgentidati);
              drawChordsSorgentidati = false;
      }
}, {
  offset: '5%'
})


*/