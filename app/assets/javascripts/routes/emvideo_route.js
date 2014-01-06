// For more information see: http://emberjs.com/guides/routing/

Emberia.EmvideoRoute = Ember.Route.extend({
	model: function(params) {
       return this.store.find(emvideo, params.emvideo_id);
	}

});
