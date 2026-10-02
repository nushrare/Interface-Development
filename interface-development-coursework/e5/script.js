function send() {

  var msg = $("#msg").val();
  var history = $ ("#history").text();

  // 1. Build the payload correctly
  var payload = {
    "contents": [
      {
        "parts": [
          { 
            "text": "You are a helpful assistant who represents George Brown College. Keep your answers short and respectful. Try to keep it upto two sentences whenever possible. Refer to the following chat history..." + history
          },
          { 
            "text": msg 
          }
        ]
      }
    ]
  }

  // 2. Show user message
  $("#history").append(`<div>💜 ${msg}</div>`)
  $("#msg").val("");

  // 3. AJAX settings
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-goog-api-key': 'YOUR_GEMINI_API_KEY'
    },
    processData: false,
    data: JSON.stringify(payload)
  };

  // 4. Send request
  $.ajax(settings).done(function (response) {
    console.log(response);
    process(response);
  });

}  // function ends HERE


function process(input) {
  var text = input.candidates[0].content.parts[0].text;
  $("#history").append(`<div>🤖 ${text}</div>`);
}

$(document).on("click", "#send", send);
