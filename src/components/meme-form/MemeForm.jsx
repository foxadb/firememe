import React, { Component } from 'react';
import { fileToBase64 } from '../../services/file';
import { getMemeCollection } from '../../services/store';
import './MemeForm.css';

export class MemeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            file: '',
            error: ''
        };
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeFile = this.changeFile.bind(this);
        this.submitMeme = this.submitMeme.bind(this);
    }

    changeAuthor(event) {
        this.setState({ author: event.target.value });
    }

    changeFile(event) {
        this.setState({ file: event.target.files[0] });
    }

    submitMeme(event) {
        const { author, file } = this.state;
        const isBigFile = file.size > 2097152;
        const isImageFile = /^image\/(jpeg|png)$/.test(file.type);
        if (isBigFile) {
            this.setState({ error: 'Maximum image size is 2 MB' });
        } else if (!isImageFile) {
            this.setState({ error: 'Only jpeg and png formats are supported' });
        } else {
            this.setState({ error: null });
            fileToBase64(file).then(base64File => {
                getMemeCollection().add({
                    author,
                    date: new Date(),
                    file: base64File
                }).then(doc => {
                    console.log(`Meme ${doc.id} created`);
                }).catch(error => {
                    console.error('Error when creating meme', error);
                });
            });
        }
        event.preventDefault();
    }

    render() {
        const errorMessage = this.state.error &&
            <div className="form-group">
                <span className="error">
                    {this.state.error}
                </span>
            </div>;
        return (
            <form onSubmit={this.submitMeme}>
                <div className="form-group">
                    <label>Author</label>
                    <div>
                        <input type="text"
                               placeholder="Thomas"
                               value={this.state.author}
                               onChange={this.changeAuthor}
                               required />
                    </div>
                </div>
                <div className="form-group">
                    <input type="file"
                           onChange={this.changeFile}
                           required />
                </div>
                <div className="form-group">
                    <input type="submit"
                           value="Submit" />
                </div>
                {errorMessage}
            </form>
        );
    }
}
