/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'getWikidataId': function(doid) {
    var queryUrl = "http://wdq.wmflabs.org/api?q=string[699:\"" + doid + "\"]";
    var wikidataId = HTTP.get(queryUrl, {}, function(error, result) {
      if (result.data && result.data.items) {
        var xrefs = result.data.items.map(function(ref) {
          return "WIKIDATA:" + ref;
        });
        Diseases.update({
          id: doid
        }, {
          $push: {
            database_cross_reference: {
              $each: xrefs
            }
          }
        })
      }
    });
  }
});
