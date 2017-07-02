(function transformRow(source, target, map, log, isUpdate) {

	var inc = new GlideRecord('incident');
    inc.caller_id = source.u_caller;
    inc.short_description = source.u_short_description;
    inc.insert();

})(source, target, map, log, action==="update");
