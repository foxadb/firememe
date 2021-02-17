import React, { Component } from 'react';
import { getMemes } from '../../services/store';

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
            <div>
                {this.state.memes.map(meme => (
                    <ul key={meme.id}>
                        <li>
                            <span>{meme.id}</span>
                        </li>
                        <li>
                            <span>{meme.author}</span>
                        </li>
                        <li>
                            <span>{meme.date}</span>
                        </li>
                        <li>
                            <img src={meme.file} />
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
}
