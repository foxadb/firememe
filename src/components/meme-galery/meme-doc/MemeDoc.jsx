import React, { Component } from 'react';
import './MemeDoc.css';

export class MemeDoc extends Component {
    render() {
        return (
            <div className="container">
                <img className="image"
                     src={this.props.meme.file} />
                <div className="author">
                    {this.props.meme.author}
                </div>
            </div>
        );
    }
}
