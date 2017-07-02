(function executeRule(current, previous /*null when async*/) {
	 
       var comm = current.comments.toString().replace(/\n{2,}/g, '\n\n'); 
       current.comments = comm + "\n\nOriginal Input:";

})(current, previous);
