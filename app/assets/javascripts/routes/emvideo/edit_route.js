// For more information see: http://emberjs.com/guides/routing/

Emberia.EmvideosEditRoute = Ember.Route.extend({
    model: function() {
    	return.this.modelFor('emvideo');
    },

    actions: {
    	update: function(emvideo) {
    		emvideo.save();
    	}
    }
});
