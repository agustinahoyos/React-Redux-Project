import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipient: '',
            subject: '',
            body: '',
            
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
         [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSend(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>To:</label>
                    <input type="text" id="recipient-field" name="recipient" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" id="subject-field" name="subject"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea id="body-field" name="body"  onChange={this.handleChange}/>
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }

}
