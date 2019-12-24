module.exports = {
  fr: {
    path: '/',
    name: 'Français',
    default: true,
    dateFormat: 'DD/MM/YYYY',
    metadata: {
      titleTemplate: '%s | Johan Soulet',
      defaultTitle: 'Johan Soulet | Développeur JavaScript à Nantes',
      description: 'Artisan du code, je donne vie à des projets qui rendent le monde meilleur',
      keywords: 'développeur nantes, développeur javascript, reactjs, nodejs',
    },
  },
  en: {
    path: '/en',
    name: 'English',
    default: false,
    dateFormat: 'DD/MM/YYYY',
    metadata: {
      titleTemplate: '%s | Johan Soulet',
      defaultTitle: 'Johan Soulet | Javascript Developer in Nantes',
      description:
        'Convinced by software craftmanship, I give birth to projects that make the world a better place',
      keywords: 'developer nantes, javascript developer, reactjs, nodejs',
    },
  },
}
