//http://emberjs.com/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js/
//http://emberjs.jsbin.com/iCaGUne/4/edit
export default Ember.Handlebars.makeBoundHelper(function(date) {
	//var moment = ('moment');
	return moment(date).fromNow();
});