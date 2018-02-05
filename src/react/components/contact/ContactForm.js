import React from 'react';

import './contact.css';

export default class ContactForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "", nameValid: false,
            phone: "", phoneValid: true,
            email: "", emailValid: true,
            message: "", messageValid: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.isValid = this.isValid.bind(this);
        this.returnFields = this.returnFields.bind(this);
        if(this.props.validator) {
            this.props.validator(this.isValid);
        }
        this.props.setFields(this.returnFields);
    }
    returnFields() {
        return {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }
    }
    /**
     * After each update of a form input's value, check if the form is valid and
     * update both the field's value in state and the validity in the state.
     */
    handleChange(event) {
        const target = event.target;
        var fieldName = event.target.name;
        var fieldValidName = event.target.name + 'Valid';
        this.setState({
            [fieldName]: target.value,
            [fieldValidName]: target.validity.valid
        });
    }
    /**
     * Check all fields ending in 'Valid' and &amp;&amp; them together
     */
    isValid() {
        return Object.keys(this.state)
            .filter((key) => key.endsWith('Valid'))
            .map(key => this.state[key])
            .reduce((previous, current) => previous&&current, true);
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <input  type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.name}
                            style={nameStyle}
                    ></input>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" id="contact-form-phone" name="phone" placeholder="Phone number" onChange={this.handleChange} value={this.state.phone}></input>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="contact-form-email" name="email" placeholder="Your E-mail" onChange={this.handleChange} value={this.state.email}></input>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="contact-form-message" rows="3" name="message" placeholder="Your Message" required onChange={this.handleChange} value={this.state.message}></textarea>
                </div>
            </div>
        );
    }
}

var nameStyle = {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll", 
    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==')", 
    backgroundSize: "16px 18px", 
    backgroundPosition: "98% 50%",
}