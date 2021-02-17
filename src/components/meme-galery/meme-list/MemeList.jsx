import React, { Component } from 'react';
import { getMemeCollection } from '../../../services/store';
import { MemeDoc } from '../meme-doc';
import './MemeList.css';

export class MemeList extends Component {
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
            <div className="list">
                {this.state.memes.map(meme => (
                    <div key={meme.id}
                         className="element">
                        <MemeDoc meme={meme} />
                    </div>
                ))}
            </div>
        );
    }
}
