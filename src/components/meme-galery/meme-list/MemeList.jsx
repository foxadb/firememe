import React, { Component } from 'react';
import { MemeDoc } from '../meme-doc';
import './MemeList.css';

export class MemeList extends Component {
    render() {
        return (
            <div className="list">
                {this.props.memes.map(meme => (
                    <div key={meme.id}
                         className="element">
                        <MemeDoc meme={meme} />
                    </div>
                ))}
            </div>
        );
    }
}
