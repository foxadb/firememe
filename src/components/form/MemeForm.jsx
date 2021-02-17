import React, { Component } from 'react';
import { fileToBase64 } from '../../services/file';
import { createMeme } from '../../services/store';

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
                <div>
                    <label>Your name</label>
                    <input type="text"
                        placeholder="Thomas"
                        value={this.state.author}
                        onChange={this.changeAuthor}
                    ></input>
                </div>
                <div>
                    <label>Select your meme</label>
                    <input type="file"
                        onChange={this.changeFile}
                    ></input>
                </div>
                <div>
                    <input type="submit"
                        value="Send"
                    ></input>
                </div>
            </form>
        );
    }
}
