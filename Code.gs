function pushMessages(username, message) {
  var document = DocumentApp.getActiveDocument();
  var messages = JSON.parse(document.getBody().getText());
  messages.push({
    "username" : username,
    "content" : message,
    "date" : new Date().toLocaleTimeString();
  });
  document.getBody().setText(JSON.stringify(messages));
}
function importMessages() {
  var document = DocumentApp.getActiveDocument();
  var messages = JSON.parse(document.getBody().getText());
  return messages;
}
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}
