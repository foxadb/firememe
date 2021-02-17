import React, { Component } from 'react';
import { getMemes } from '../../../services/store';
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
        getMemes().then(snapshot => {
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
        }).catch(error => {
            console.error('Error when loading memes', error);
        });
    }

    render() {
        return (
            <div className="list">
                {this.state.memes.map(meme => (
                    <div className="element">
                        <MemeDoc meme={meme} />
                    </div>
                ))}
            </div>
        );
    }
}
