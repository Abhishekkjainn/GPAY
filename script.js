function savedata() {
  let mainamount = document.getElementById('amountmain').value;
  let paytomain = document.getElementById('payingtomain').value;
  let upiid = document.getElementById('upimain').value;
  let trnsid = document.getElementById('upitransactionmain').value;
  if (mainamount == '' && paytomain == '' && upiid == '' && trnsid == '') {
    console.log('nothing to show');
  } else {
    localStorage.setItem('mainamount', mainamount);
    localStorage.setItem('paytomain', paytomain);
    localStorage.setItem('upiid', upiid);
    localStorage.setItem('trnsid', trnsid);
  }
}

function topaidpage() {
  window.location.assign('paid.html');
}
