import React from 'react';
import {Statusbar} from 'framework7-react';
import 'styles/main.scss';
import AppViewLoader from './AppViewLoader';


class App extends React.Component {
    render() {
        return (
            <main>
                <Statusbar>
                </Statusbar>

                {/* main view loaders */}
                <AppViewLoader/>

            </main>
        );
    }
}

export default App;
