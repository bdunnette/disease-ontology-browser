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
      var linkedDefinition = definition.replace(this.parent.PreferredLabel, "<a href=/disease/" + this.parent.id + ">" + this.parent.PreferredLabel + "</a>")
      return linkedDefinition;
    } else {
      return null;
    }
  }
});

/*****************************************************************************/
/* Disease: Lifecycle Hooks */
/*****************************************************************************/
Template.Disease.onCreated(function() {});

Template.Disease.onRendered(function() {});

Template.Disease.onDestroyed(function() {});
