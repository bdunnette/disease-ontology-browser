var delimiters = [
  "",
  "|",
  ";",
  "!"
];

/*****************************************************************************/
/* Import: Event Handlers */
/*****************************************************************************/
Template.Import.events({
  'submit .upload-form': function(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    var subfieldDelimiter = event.target.subfieldDelimiter.value;
    console.log(subfieldDelimiter);
    // get name of collection to import to, and connect to that collection
    Papa.parse(event.target.importFile.files[0], {
      delimiter: "", // auto-detect
      newline: "", // auto-detect
      header: true,
      dynamicTyping: true,
      step: function(results, parser) {
        // console.log("Row data:", results.data);
        // console.log("Row errors:", results.errors);

        // get parsed CSV data
        var record = results.data[0];

        if (subfieldDelimiter) {
          Object.keys(record).forEach(function(key){if (typeof record[key] === 'string' && record[key].includes(subfieldDelimiter)) {record[key] = record[key].split(subfieldDelimiter)}})
        }

        console.log(record);
        Diseases.insert(record);

      },
      preview: 0,
      encoding: "",
      worker: false,
      comments: false,
      complete: undefined,
      error: undefined,
      download: false,
      skipEmptyLines: true,
      chunk: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined
    });
  }
});

/*****************************************************************************/
/* Import: Helpers */
/*****************************************************************************/
Template.Import.helpers({
  importTypes: function() {
    return importTypes;
  },

  delimiters: function() {
    return delimiters;
  }
});

/*****************************************************************************/
/* Import: Lifecycle Hooks */
/*****************************************************************************/
Template.Import.onCreated(function() {});

Template.Import.onRendered(function() {});

Template.Import.onDestroyed(function() {});
