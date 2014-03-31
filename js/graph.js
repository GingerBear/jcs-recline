var dataset = new recline.Model.Dataset({
  url: '../data/sample_event.csv',
  backend: 'csv',
  delimiter: ',',
  quotechar: '"',
  encoding: 'utf8'
});

dataset.fetch()
.done(function(dataset) {

});


  var $el = $('#mygraph');
  var graph = new recline.View.Graph({
    model: dataset,
    state: {
      group: "ID Number",
      series: ["month", "day"]
    }
  });
  $el.append(graph.el);
  graph.render();
  graph.redraw();
