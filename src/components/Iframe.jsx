// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
// import * as React from "react";
// import PlasmicLoader from '@plasmicapp/loader';

// function IFrame_(props, ref) {
  // Use PlasmicIFrame to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicIFrame are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all IFrameProps here, but feel free
  // to do whatever works for you.
//   return <PlasmicLoader
//   component="IFrame"
//   componentProps={{
//     root: {
//       render: () => <iframe src="https://cascadr.co/blogs/cozykev" width="100%" height="100%" position="relative" allowFullScreen></iframe>
//     }
//   }}
// />;
// }

// const IFrame = React.forwardRef(IFrame_);

// export default IFrame;



import * as React from 'react';
import PlasmicLoader from '@plasmicapp/loader';
import Iframe from 'react-iframe';


function IFrame_(props, ref) {

return <PlasmicLoader
component="IFrame"
componentProps={{
  root: {
    render: () => <div style={{marginTop: -120, height: "150%", marginLeft: -2}}> <Iframe url="https://cascadr.co/blogs/cozykev"
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
/>;
}

const IFrame = React.forwardRef(IFrame_);

export default IFrame;