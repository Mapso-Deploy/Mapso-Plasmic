// module.exports = {
//   siteMetadata: {
//     title: "Mapso-Codegen-v2",
//   },
//   plugins: ["gatsby-plugin-sitemap"],
//   {
//   resolve: "@plasmicapp/loader/gatsby",
//   options: {
//     projects: ["4rRjJBDqbJu5P9BrfPUQ2a"],
//     substitutions: {
//     components:  [{ name: 'iFrame', path: '.cache/.plasmic/components/IFrame.jsx' },{ name: 'Header', path: '.cache/.plasmic/components/Header.jsx' }],
//   }
// } // An array of project ids.
//   },
// ],
// };


module.exports = {
  siteMetadata: {
      title: "Mapso-Plasmic",
    },
  plugins: [
    {
      resolve: "@plasmicapp/loader/gatsby",
      options: {
        projects: ["4rRjJBDqbJu5P9BrfPUQ2a"],
        substitutions: {
  components:  [{ name: 'IFrame', path: 'src/components/Iframe.jsx' }],
}
      },
    },
  ],
};
