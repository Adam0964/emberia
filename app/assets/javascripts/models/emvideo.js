// for more details see: http://emberjs.com/guides/models/defining-models/

Emberia.Emvideo = DS.Model.extend({
  url: DS.attr('string'),
  description: DS.attr('string'),
  uploader: DS.attr('string'),
  airDate: DS.attr('date')
});
