/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'getWikidataId': function(purl) {
    var queryUrl = "http://wdq.wmflabs.org/api?q=string[1709:\"" + purl + "\"]";
    var wikidataId = HTTP.get(queryUrl, {}, function(error, result) {
      if (result.data && result.data.items) {
        var xrefs = result.data.items.map(function(ref) {
          return "WIKIDATA:" + ref;
        });
        Diseases.update({
          _id: purl
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
