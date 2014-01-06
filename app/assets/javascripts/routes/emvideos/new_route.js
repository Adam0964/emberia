// For more information see: http://emberjs.com/guides/routing/

Emberia.EmvideosNewRoute = Ember.Route.extend({
     model: function() {
     	return this.store.createRecod('emvideo');
     },

	actions: {
       create: function(emvideo) {
       	 var route = this;
       	 emvideo.save().then function() {
       	   route.transitionTo('emvideos');
       	 });
       }
	} 
});
