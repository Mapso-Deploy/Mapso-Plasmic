import * as React from "react";
import PlasmicLoader from '@plasmicapp/loader';

return <PlasmicLoader
  component="Header"
  componentProps={{
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 999
    }
  }}
/>;
}

const Header = React.forwardRef(Header_);

export default Header;