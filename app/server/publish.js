


Meteor.publish('diseases', function () {
  return Diseases.find();
});

Meteor.publish('disease', function (doid) {
  var disease = Diseases.findOne({id: doid});
  return Diseases.find({$or: [{id: doid}, {_id: disease.Parents}]})
});
