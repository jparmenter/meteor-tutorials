Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: -1}} );
}

Template.entryfield.events = {
  "keydown #message": function(event) {
    if (event.which == 13) {

      var name = "Anonymous";
      if (Meteor.user()) {
        name = Meteor.user().profile.name;
        console.log(Meteor.user().profile);
      }
      if (!name) {
        name = "Anonymous";
      }

      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now()
        });

        message.value = '';
      }
    }
  }
}
