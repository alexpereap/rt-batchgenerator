const FileSaver = require('file-saver');

function download(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  FileSaver.saveAs(blob, filename);
}

export default download;
