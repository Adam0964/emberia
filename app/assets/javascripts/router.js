// For more information see: http://emberjs.com/guides/routing/

Emberia.Router.map(function() {
    this.resource('emvideos', function() {
        this.resource('emvideo', {path: ':emvideo_id'}, function() {
            this.route('edit');
        });
        this.route('new');
        this.route('how-to');
        this.route('about');
    });

});