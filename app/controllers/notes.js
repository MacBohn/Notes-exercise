import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy'),
      title = this.get('titleCopy');

      var note = this.store.createRecord('note',{ body: body, title: title });
      this.set('noteCopy','');
      this.set('titleCopy','');
      note.save();
    },
    deleteNote: function (id) {
      var self = this;
      self.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      self.flashMessage('Congratulations! Your note has been deleted!');
      });
    },
    delete: function() {
      this.get('content').delete().then(function() {
        this.formDeleted();
      });
    },
  }
});
