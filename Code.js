function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getPage(page) {
  return HtmlService.createHtmlOutputFromFile(page).getContent();
}

function includePage(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

