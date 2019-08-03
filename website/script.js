// Edited Jun 27, 2019
// Maintainer: @ookangzheng
// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
(function() {
  const url = "https://test.blahdns.com";
  let controller = new AbortController();
  let signal = controller.signal;
  let timeout = 1500;
  let time = setTimeout(() => {
    //console.log("TEST request timeout");
    controller.abort();
  }, timeout);
  fetch(url, {
    time,
    credentials: "same-origin",
    method: "HEAD",
    mode: "no-cors",
    cache: "no-cache"
  })
    .then(function(response) {
      clearTimeout(time);
      if (response.status == 0 || response.status == 403) {
        text.innerHTML = "You're <strong> using </strong> Blahdns";
      } else {
        text.innerHTML = "You're <strong> not </strong> using Blahdns";
      }
    })
    .catch(error => console.log(error));
})();

function handleErrors(response) {
  console.log("Resopone here");
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
const text = document.querySelector("#status");
//const domainRegex = /^([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}$/;
const domainRegex = /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9-\.]){1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/;
// const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/
const domainInput = document.querySelector("#domainName");
const btnCheck = document.querySelector("#btnCheck");
const returnStat = document.querySelector("#returnStatus");
btnCheck.addEventListener("click", queryStatus);

function queryStatus() {
  const url = `https://blahdns.com/api/${domainInput.value}`;
  if (!domainRegex.test(domainInput.value)) {
     return returnStat.innerHTML = `Please input valid URL and no space`
  }
  if (domainRegex.test(domainInput.value)) {
      
    returnStat.innerHTML = `loading....`;

    let controller = new AbortController();
    let signal = controller.signal;
    let timeout = 2000;
    let time = setTimeout(() => {
      console.log("Client request timeout");
      returnStat.innerHTML = `Request timeout`;
      controller.abort();
    }, timeout);
fetch(url, { time })
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
    let result = JSON.stringify(data.status);
        if (result === '"ok"') {
            clearTimeout(time);
          returnStat.innerHTML = `Domain: ${
            domainInput.value
          } is <strong>not</strong> block`;
        }
        if (result === '"failed"') {
            clearTimeout(time);
          returnStat.innerHTML = `Domain: ${
            domainInput.value
          } lookup <strong>failed or blocked</strong>`;
        }
  })
  .catch(error => console.log(error));
  }
  //return (returnStat.innerHTML = `Please input valid URL and no space`);
}


(function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
  h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
  l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
  r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
  n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
  A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
  sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
  void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
  (f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
  sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
  a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
  ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
  !1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
  y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
  d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
  a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
  trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
  (window,"UA-10405417-12",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(
      " w3-dark-grey",
      ""
    );
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
