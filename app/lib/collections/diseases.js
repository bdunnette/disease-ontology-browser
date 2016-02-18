Diseases = new Mongo.Collection('diseases');

DiseasesIndex = new EasySearch.Index({
  collection: Diseases,
  fields: ['PreferredLabel', 'Synonyms'],
  engine: new EasySearch.MongoDB()
});

if (Meteor.isServer) {
  Diseases.allow({
    insert: function(userId, doc) {
      return true;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function(userId, doc) {
      return true;
    }
  });

  Diseases.deny({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function(userId, doc) {
      return false;
    }
  });
}
