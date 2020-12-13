exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let listOfFiles = [];
    let dirs = [];

    function processDir(dir) {
      let i;
      let len;
      let file;
      let files = dir.files;
      dirs.push(dir.dir);
      
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
