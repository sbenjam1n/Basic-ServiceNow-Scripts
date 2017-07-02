//Adapted from http://joeyday.com/2015/03/02/integrating-servicenow-with-slack/

var TeamsMessageCard = Class.create();
TeamsMessageCard.prototype = {
    initialize: function() {
    },
    
    send: function (text, channel) {

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
	
    endpoint: gs.getProperty('teams_message.default_endpoint'), //https://outlook.office.com/webhook/3049fda5-ff69-493f-872f-03050ef41cb3@cfa792cf-7768-4341-8857-81754c2afa1f/IncomingWebhook/77818fdedd634cae9a81b0df97509a9f/5ac349f8-262c-485e-95e6-7dae56724cc3
    method: 'post',
    payload: {
              "themeColor": "0078D7",
              "sections": [],
              "potentialAction": []
    },

    type: 'TeamsMessageCard'
};
