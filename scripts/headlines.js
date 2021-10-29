function renderHeadlines({headlineTitle, headlineBody}) {
  const findHealines = document.querySelector('#headlines')

  findHealines.innerHTML +=  `
  <div class="headline">
  <header class="headline-header">
    <span class="date">02 de jul, 2021</span>
    <span class="like"> <img id="addToFavorite" src="./images/like-icon.svg" alt="curtir"> </span>
  </header>

  <article class="headline-article">
    <h2>${headlineTitle}</h2>
    <p>
      ${headlineBody}
    </p>
  </article>
</div>
`

  return [headlineTitle.toLowerCase(), headlineBody.toLowerCase()]
}

const headlines = [
  renderHeadlines({
    headlineTitle: 'Agora é oficial: o Windows 11 está vindo',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),

  renderHeadlines( {
    headlineTitle: 'Tim Berners-Lee vai leiloar código-fonte da web',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),

  renderHeadlines({
    headlineTitle: 'Tem Firefox novo no pedaço e você vai querer migrar',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
  }),

  renderHeadlines({
    headlineTitle: 'John McAfee, criador do antivírus McAfee, morre',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),
]
/* 
A IDEIA:

- com o techo que deseja pesquisar, ele vai comparar com a lista de arrays de noticias
- se o trecho tiver em alguma noticia, ela será imprimida na tela
- se não, aparecerá q o resultado n foi encontrado :(

*/
export {headlines, renderHeadlines}