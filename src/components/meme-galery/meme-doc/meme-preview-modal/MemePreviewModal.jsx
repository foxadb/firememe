import React, { Component } from 'react';
import './MemePreviewModal.css';

export class MemePreviewModal extends Component {
    render() {
        const showHideClassName = this.props.show
            ? 'modal display-block'
            : 'modal display-none';
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="modal-content">
                        <img src={this.props.meme.file} />
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            onClick={this.props.handleClose}>
                            Close
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}
