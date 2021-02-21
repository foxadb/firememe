import React, { Component } from 'react';
import { MemeList } from './meme-list';
import { getMemeCollection } from '../../services/store';

export class MemeGalery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: []
        };
    }
    componentDidMount() {
        getMemeCollection().onSnapshot(snapshot => {
            const memes = snapshot.docs.map(doc => {
                const meme = doc.data();
                return {
                    id: doc.id,
                    author: meme.author,
                    date: meme.date.toString(),
                    file: meme.file
                };
            });
            this.setState({ memes });
        });
    }

    render() {
        return (
            <div>
                <MemeList memes={this.state.memes} />
            </div>
        );
    }
}
