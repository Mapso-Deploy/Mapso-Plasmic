import * as React from "react";
import PlasmicLoader from '@plasmicapp/loader';


export default function stickyHeader(props) {

return ( <PlasmicLoader
component="Header"
componentProps={{
    white: true
style: {
position: 'sticky',
top: 0,
zIndex: 999
}
}}
/>
);
}