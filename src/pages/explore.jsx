import * as React from 'react';
import PlasmicLoader from '@plasmicapp/loader';


function PageComponent() {
  // Use hooks to fetch data, read from React context, etc.

  return (
    <PlasmicLoader projectId="4rRjJBDqbJu5P9BrfPUQ2a"
    component="Explore"
    componentProps={{
    iFrame: {
      wrap: (content) => <iframe title="Blog" src="https://cascadr.co/blogs/cozykev" frameborder="0" width="100%" height="100%" allowFullScreen></iframe>
    }
  }}
/>
  );
}
