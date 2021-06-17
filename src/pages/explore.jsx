import * as React from 'react';
import PlasmicLoader from '@plasmicapp/loader';


export default function PageComponent() {
    return <PlasmicLoader projectId="4rRjJBDqbJu5P9BrfPUQ2a"
      component="Explore"
      componentProps={{
        iFrame: {
          wrap: (content) => <iframe title= "blog" src="https://cascadr.co/blogs/cozykev" width="100%" height="100%" allowFullScreen></iframe>
        }
      }}
    />
}
