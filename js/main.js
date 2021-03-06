// var data = [
//   {id: 0, date: '2011-01-01', x: 1, y: 2, z: 3, country: 'DE', geo: {lat:52.56, lon:13.40} },
//   {id: 1, date: '2011-02-02', x: 2, y: 4, z: 24, country: 'UK', geo: {lat:54.97, lon:-1.60}},
//   {id: 2, date: '2011-03-03', x: 3, y: 6, z: 9, country: 'US', geo: {lat:40.00, lon:-75.5}},
//   {id: 3, date: '2011-04-04', x: 4, y: 8, z: 6, country: 'UK', geo: {lat:57.27, lon:-6.20}},
//   {id: 4, date: '2011-05-04', x: 5, y: 10, z: 15, country: 'UK', geo: {lat:51.58, lon:0}},
//   {id: 5, date: '2011-06-02', x: 6, y: 12, z: 18, country: 'DE', geo: {lat:51.04, lon:7.9}}
// ];

// var dataset = new recline.Model.Dataset({
//   records: data
// });

var dataset = new recline.Model.Dataset({
  url: '../data/sample_event.csv',
  backend: 'csv',
  delimiter: ',',
  quotechar: '"',
  encoding: 'utf8'
});

dataset
  .fetch()
  .done(function(dataset) {
    console.log(dataset.recordCount);
  });

var $el = $('#mygrid');
var grid = new recline.View.SlickGrid({
  model: dataset,
  el: $el,
  state: {
    gridOptions: {
      editable: true,
      enabledAddRow: true,
      enabledDelRow: true,
      autoEdit: false,
      enableCellNavigation: true
    },
    columnsEditor: [
      // { column: 'date', editor: Slick.Editors.Date },
      { column: 'title', editor: Slick.Editors.Text }
    ]
  }
});
grid.visible = true;
grid.render();
