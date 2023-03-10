function handleSubmit(event) {
    event.preventDefault();
   
    const data = new FormData(event.target);
   
    const value = Object.fromEntries(data.entries());
   
    console.log('Values: ' + {value});
   
    var jsonPayload = JSON.stringify(value);
   
    var request = new XMLHttpRequest();
    try {
    request.open('POST', 'https://dev.rms.emberp.com/rmssaas/api/waitinglist');   
     //request.open('POST', 'http://localhost:8080/rmssaas/api/waitinglist');
     request.setRequestHeader('Accept', 'application/json');
     request.setRequestHeader('Content-Type', 'application/json');
     request.send(jsonPayload);
     alert("Thank you. We will notify you via email/sms once we go live");
     var form = document.getElementById("waitingListForm");
     form.reset();
    } catch (e) {
     alert(e);
    }
   }
   
   const form = document.querySelector('form');
   console.log('form: ' + form);
   form.elements["addedFrom"].value = Intl.DateTimeFormat().resolvedOptions().timeZone;
   form.addEventListener('submit', handleSubmit);