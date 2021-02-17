import React, { Component } from 'react';
import { fileToBase64 } from '../../services/file';
import { createMeme } from '../../services/store';
import './MemeForm.css';

export class MemeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            file: ''
        };
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeFile = this.changeFile.bind(this);
        this.sendMeme = this.sendMeme.bind(this);
    }

    changeAuthor(event) {
        this.setState({ author: event.target.value });
    }

    changeFile(event) {
        this.setState({ file: event.target.files[0] });
    }

    sendMeme(event) {
        fileToBase64(this.state.file).then(base64File => {
            createMeme({
                author: this.state.author,
                date: new Date(),
                file: base64File
            }).then(doc => {
                console.log(`Meme ${doc.id} created`);
            }).catch(error => {
                console.error('Error when creating meme', error);
            });
        });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.sendMeme}>
                <div className="form-group">
                    <label>Author</label>
                    <div>
                        <input type="text"
                               placeholder="Thomas"
                               value={this.state.author}
                               onChange={this.changeAuthor} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="file"
                           onChange={this.changeFile} />
                </div>
                <div className="form-group">
                    <input type="submit"
                           value="Submit" />
                </div>
            </form>
        );
    }
}
