import React from 'react';
import {App, Appbar, Button, Views, View} from 'framework7-react';
import routes, {routeHome, routeSearch} from './routes';

const BAR_ENUM = {
    HOME: "HOME",
    SETTINGS: "SEARCH",
    MIDDLEWARE: "MIDDLEWARE"
}

class AppViewLoader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            barPage: BAR_ENUM.HOME
        }
    }

    getAppBarButtons(isMiddleWareView) {

        return (
            <Appbar>
                <div className="left">
                    <Button large
                        className="display-flex margin-left-half"
                        onClick={() => this.setState({barPage: BAR_ENUM.HOME})} 
                        iconF7="data_fill" />
                </div>
                <div className="right">
                    <Button large
                        className="display-flex margin-left-half"
                        onClick={() => this.setState({barPage: BAR_ENUM.SEARCH})} 
                        iconF7="bolt_round_fill" />
                </div>
            </Appbar>
        )

    }

    render() {
        const {barPage } = this.state;


        return (

            <App params={{
                theme: document.location.search.indexOf('theme=') >= 0 ? ( 
                    document.location.search.split('theme=')[1].split('&')[0]
                ) : 'auto',
                routes,
                }}
                className="color-theme-deeppurple"
            >

                {this.getAppBarButtons()}

                <Views tabs>

                    <View  tab  main home
                        name={BAR_ENUM.HOME}
                        url={routeHome} 
                        tabActive={barPage === BAR_ENUM.HOME} 
                        className="ios-edges">
                    </View>

                    <View  tab search
                        name={BAR_ENUM.SEARCH}
                        url={routeSearch} 
                        tabActive={barPage === BAR_ENUM.SEARCH} 
                        className="ios-edges">
                    </View>

                </Views>
                    
            </App>
        );
    }
}
export default AppViewLoader;