import React, { Component } from 'react';
import { MemeForm } from './meme-form';
import { MemeGalery } from './meme-galery';
export class App extends Component {
    render() {
        return (
            <div>
                <MemeForm />
                <MemeGalery />
            </div>
        );
    }
}
