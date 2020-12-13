export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd60defc6f49ca0d7ce8cf7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ovvn5yb7',
                  apiId: '27e66cb2-6159-4c74-9cb2-0ec221a27005'
                },
                {
                  buildHookId: '5fd60def2a4b8dd5319d90b0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u8rvn5ti',
                  apiId: '5db76064-c0b0-48c5-bafc-a8cc6ed79ca6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jhilbert/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u8rvn5ti.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
