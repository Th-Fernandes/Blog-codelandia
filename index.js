function renderHeadlines({headlineTitle, headlineBody}) {
  const findHealines = document.querySelector('#headlines')

  findHealines.innerHTML +=  `
  <div class="headline">
  <header class="headline-header">
    <span class="date">02 de jul, 2021</span>
    <span class="like"> <img src="./images/like-icon.svg" alt="curtir"> </span>
  </header>

  <article class="headline-article">
    <h2>${headlineTitle}</h2>
    <p>
      ${headlineBody}
    </p>
  </article>
</div>
`
}

const headlines = {
  win11: renderHeadlines({
    headlineTitle: 'Agora é oficial: o Windows 11 está vindo',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),

  timBerners: renderHeadlines( {
    headlineTitle: 'Tim Berners-Lee vai leiloar código-fonte da web',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),

  newFirefox: renderHeadlines({
    headlineTitle: 'Tem Firefox novo no pedaço e você vai querer migrar',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
  }),

  jornMcAfee: renderHeadlines({
    headlineTitle: 'John McAfee, criador do antivírus McAfee, morre',
    headlineBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  }),
}

export {headlines}