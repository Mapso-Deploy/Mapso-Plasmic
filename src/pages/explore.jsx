// import * as React from 'react';
// import PlasmicLoader from '@plasmicapp/loader';


// export default function PageComponent() {
//     return <PlasmicLoader projectId="4rRjJBDqbJu5P9BrfPUQ2a"
//       component="Explore"
//       componentProps={{
//         iFrame: {
//           wrap: (content) => <iframe title= "blog" src="https://cascadr.co/blogs/cozykev" width="100%" height="100%" allowFullScreen></iframe>
//         }
//       }}
//     />
// }


import * as React from 'react';
import PlasmicLoader from '@plasmicapp/loader';
import Iframe from 'react-iframe';



export default function PageComponent() {
    return <PlasmicLoader projectId="4rRjJBDqbJu5P9BrfPUQ2a"
      component="Explore"
      componentProps={{
        iFrame: {
          wrap: (content) => <div style={{marginTop: -120, height: "150%", marginLeft: -2}}> <Iframe url="https://cascadr.co/blogs/cozykev"
          title= "Mapso Blog"
          width="100%"
          height="100%"
          marginheight="50"
          id="myId"
          className="myClassname"
          display="initial"
          loading="lazy"
          position="relative"/> </div> 
        }
      }}
    />
}


{/* <Iframe url="https://cascadr.co/blogs/cozykev"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> 
      
      
      <div style={{marginheight: 120 }}> <Iframe url="https://cascadr.co/blogs/cozykev"
          width="450px"
          height="1050px"
          marginheight="50"
          id="myId"
          className="myClassname"
          display="initial"
          top="-50px"
          position="absolute"/> </div>
      




style={{marginTop: -120, height: "150%", animation: easings.easeInExpo }}
      
      */}




