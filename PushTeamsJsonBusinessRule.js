(function executeRule(current, previous /*null when async*/) {

	var teams = new TeamsMessageCard();
	
	teams.payload.sections.push({
        	"activityTitle": '[' + current.number.toString() +']('+'https://' + gs.getProperty('instance_name') + '.service-now.com/nav_to.do?uri=incident.do?sys_id=' + current.sys_id + ')',
        	"activitySubtitle": current.sys_created_on.toString(),
        	"activityImage": gs.getProperty('owl_logo'),
        	"activityText": current.short_description.toString()
        	 });
	
	teams.send();
	
})(current, previous);
