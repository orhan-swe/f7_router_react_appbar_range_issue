import React from 'react';
import {Navbar, Page, BlockTitle, List, ListItem, Range } from "framework7-react";


class SearchPage extends React.Component {
    
    render() {

        return (
            <Page>
                <Navbar title="Search" />
                    <BlockTitle 
                        className="display-flex justify-content-space-between">
                        filter:
                    </BlockTitle>
                    <List simpleList>
                        <ListItem>
                            <Range
                                min={16}
                                max={100}
                                step={1}
                                dual
                                value={[30, 60]}
                                onRangeChange={([ low, high ]) => this.setState({ low, high })}
                            />
                        </ListItem>
                    </List>
                    <BlockTitle 
                        className="display-flex justify-content-space-between">
                            dist:
                    </BlockTitle>
                    <List simpleList>
                        <ListItem>
                            <Range
                                min={1}
                                max={100}
                                step={1}
                                value={10}
                                onRangeChange={(dist) => this.setState({ dist })}
                            />
                        </ListItem>
                    </List>
            </Page>
        );
    }
}

export default SearchPage;




