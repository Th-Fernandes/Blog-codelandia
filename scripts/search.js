import {headlines, renderHeadlines} from './headlines.js'

function overWrhiteHedlines(arrayPosition) {
  const findHealines = document.querySelector('#headlines')

  findHealines.innerHTML =  `
  <img id="backButton" src="../images/back-icon.svg" style="display: block; width: auto; margin: 2rem auto;">
  <div class="headline">
  <header class="headline-header">
    <span class="date">02 de jul, 2021</span>
    <span class="like"> <img id="addToFavorite" src="./images/like-icon.svg" alt="curtir"> </span>
  </header>

  <article class="headline-article">
    <h2>${headlines[arrayPosition][0]}</h2>
    <p>
      ${headlines[arrayPosition][1]}
    </p>
  </article>
</div>
`

  function giveBackHeadlines() {
    const backButton = document.querySelector('#backButton');

    backButton.addEventListener('click', () => {
      findHealines.innerHTML = ""
      for(let i = 0; i < headlines.length; i++) {
        renderHeadlines({headlineTitle: headlines[i][0], headlineBody: headlines[i][1] })
      }
      
    })
  }

  giveBackHeadlines()
}

function searchMechanism() {
  function headlineVerifier(titlePosition) {
    const searchValue = document.querySelector('#searchValue').value.toLowerCase()
  
    for(let i = 0; i < 2 ; i++) {
      let search = headlines[titlePosition][i].indexOf(searchValue)
  
      if(search > 0) {
        overWrhiteHedlines(titlePosition)
        break
      }
    
      else {
        console.log('não encontrei :(')
      }
    }
  }

  for(let i = 0; i < headlines.length; i++) {
    headlineVerifier(i)
  }
  
}

function saveSearchValue() {
  const form = document.querySelector('#formSearchValue')
  form.addEventListener('submit', () => searchMechanism())
}

saveSearchValue()
//setTimeout( searchMechanism, 3000)



export {searchMechanism}