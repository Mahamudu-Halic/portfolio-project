let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
let sidemenu = document.getElementById('sidemenu')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }


    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function closemenu(){
    sidemenu.style.right = '-200px'
}

function openmenu(){
    sidemenu.style.right = "0"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxEl_1S5iD8fPISwISwxSSdL1aC2eKJ601yORXtWyyNyinDFs71TZWhtB4nv9OIe5e9/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })