import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

///////////// import apps ////////////////////////////////////////////////

import App from './root/app.js';

///////////// import f7 bootstrap files ////////////////////////////////////////////////

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js';
import 'framework7/css/framework7.bundle.min.css';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

///////////////////////////////////////////////////////////////////////////////


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
