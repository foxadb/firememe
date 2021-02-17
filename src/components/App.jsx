import React, { Component } from 'react';
import { MemeForm } from './form';
import { MemeList } from './list';
export class App extends Component {
    render() {
        return (
            <div>
                <h1>Firememe</h1>
                <MemeForm />
                <MemeList />
            </div>
        );
    }
}
