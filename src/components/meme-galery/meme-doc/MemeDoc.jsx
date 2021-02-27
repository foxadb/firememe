import React, { Component } from 'react';
import { MemePreviewModal } from './meme-preview-modal';
import './MemeDoc.css';

export class MemeDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPreview: false
        };
        this.handleOpenPreview = this.handleOpenPreview.bind(this);
        this.handleClosePreview = this.handleClosePreview.bind(this);
    }

    handleOpenPreview() {
        this.setState({ showPreview: true });
    }

    handleClosePreview() {
        this.setState({ showPreview: false });
    }

    render() {
        return (
            <div className="container">
                <MemePreviewModal show={this.state.showPreview}
                    handleClose={this.handleClosePreview}
                    meme={this.props.meme}>
                </MemePreviewModal>
                <img className="image"
                    src={this.props.meme.file}
                    onClick={this.handleOpenPreview} />
                <div className="author">
                    {this.props.meme.author}
                </div>
            </div>
        );
    }
}
