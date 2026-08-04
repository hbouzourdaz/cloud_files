const fs = require('fs');

const testUrl = "https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf";
const pdfJsViewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(testUrl)}`;

console.log("PDF.js URL:", pdfJsViewerUrl);
