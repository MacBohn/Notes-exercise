import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy'),
      title = this.get('titleCopy');

      var note = this.store.createRecord('note',{ body: body, title: title });
      this.set('noteCopy','');
      note.save();
    },
    deleteNote: function (id) {
      var note = this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    }
  }
});
