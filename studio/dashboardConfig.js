export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60f46211d73ef7b6b3d83c34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-17pqjad7',
                  apiId: 'f7cc9351-3ac5-484a-93f4-03b991c5d760'
                },
                {
                  buildHookId: '60f46211900ce0f17b88b5ac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pogn2k5h',
                  apiId: 'ee4742d0-d1ae-4232-a07a-c6813b8c34c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeortiz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pogn2k5h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
