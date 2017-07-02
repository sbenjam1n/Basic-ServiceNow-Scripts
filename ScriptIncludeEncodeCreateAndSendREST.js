//Adapted from http://joeyday.com/2015/03/02/integrating-servicenow-with-slack/

var TeamsMessageCard = Class.create();
TeamsMessageCard.prototype = {
    initialize: function() {
    },
    
	send: function (text, channel) {

    this.payload.text = text;
    this.payload.channel = channel;
        
    // Encode the payload as JSON
    var SNJSON = JSON; 
    var myjson = new SNJSON();
    var encoded_payload = myjson.encode(this.payload);
        
    // Create and send the REST Message
    var msg = new RESTMessage('Teams', this.method);
    msg.setStringParameter('endpoint', this.endpoint);
    msg.setXMLParameter('payload', encoded_payload);
    var res = msg.execute();
    return res;
    },
	
	endpoint: gs.getProperty('teams_message.default_endpoint'),
    method: 'post',
    payload: {
              "themeColor": "0078D7",
              "sections": [],
              "potentialAction": []
    },

    type: 'TeamsMessageCard'
};
