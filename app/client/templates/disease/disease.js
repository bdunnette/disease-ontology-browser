/*****************************************************************************/
/* Disease: Event Handlers */
/*****************************************************************************/
Template.Disease.events({});

/*****************************************************************************/
/* Disease: Helpers */
/*****************************************************************************/
Template.Disease.helpers({
  linkedDefinition: function() {
    console.log(this);
    if (this.disease && this.disease.Definitions && this.parent) {
      var definition = null;
      if (Array.isArray(this.disease.Definitions)) {
        definition = this.disease.Definitions[0];
      } else {
        definition = this.disease.Definitions;
      }
      var linkedDefinition = definition.replace(this.parent.PreferredLabel, "<a href=/disease/" + this.parent.id + ">" + this.parent.PreferredLabel + "</a>").replace("_", " ");
      return linkedDefinition;
    } else {
      return null;
    }
  },

  symptomsFromDefinition: function() {
    console.log(this);
    var definition = null;
    if (Array.isArray(this.Definitions)) {
      definition = this.Definitions[0];
    } else {
      definition = this.Definitions;
    }
    console.log(definition);
    var re = /has_symptom(.*?)(?=,)/g
    var parsedSymptoms = definition.match(re);
    console.log(parsedSymptoms);
    return parsedSymptoms;
  }
});

Template.DiseaseReferences.helpers({
  sortedReferences: function() {
    return this.disease.database_cross_reference.sort();
  },

  linkedReference: function() {
    var refSplit = this.valueOf().split(":");
    var refType = refSplit[0];
    var refCode = refSplit[1];
    var linkedReference = this.valueOf();
    var link = null;
    switch (refType) {
      case "NCI":
        link = "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=NCI_Thesaurus&code=" + refCode;
        break;
      case "MSH":
        link = "http://www.ncbi.nlm.nih.gov/mesh/?term=" + refCode;
        break;
      case "OMIM":
        link = "http://omim.org/entry/" + refCode;
        break;
      case "WIKIDATA":
        link = "https://www.wikidata.org/wiki/Q" + refCode;
        break;
      default:
        link = null;
    }
    if (link) {
      linkedReference = "<a target=_blank href=" + link + ">" + this.valueOf() + "</a>"
    }
    return linkedReference;
  }
});

/*****************************************************************************/
/* Disease: Lifecycle Hooks */
/*****************************************************************************/
Template.Disease.onCreated(function() {});

Template.Disease.onRendered(function() {});

Template.Disease.onDestroyed(function() {});
