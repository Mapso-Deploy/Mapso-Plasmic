module.exports = {
  siteMetadata: {
    title: "Mapso-Codegen-v2",
  },
  plugins: ["gatsby-plugin-sitemap",
  {
  resolve: "@plasmicapp/loader/gatsby",
  options: {
    projects: ["4rRjJBDqbJu5P9BrfPUQ2a"],
    substitutions: {
    components: [{ name: 'iFrame', path: 'src/components/iFrame.tsx' },{ name: 'Header', path: 'src/components/Header.tsx' }],
  }
} // An array of project ids.
  },
],
};
