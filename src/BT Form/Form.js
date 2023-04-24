import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state= {
            isGoing: true,
            guestName: 'Y Kim Tra',
            courst: 'HTML',
            massages: ''

        };
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) =>{
        alert('Tham gia: '
        + this.state.isGoing + ', Họ và tên: '
        + this.state.guestName + ', Môn học: '
        + this.state.courst + ' và '
        + this.state.massages
        );
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                        <label>
                            Tham gia:
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked= {this.state.isGoing}
                                onChange={ this.handleInputChange}/>
                        </label>
                        <br/><br/>
                        <label>
                            Ghi rõ họ tên:
                            <input
                                name="guestName"
                                type="text"
                                value= {this.state.guestName}
                                onChange={ this.handleInputChange}/>
                        </label>
                        <br/><br/>
                        <label>
                            Chọn khóa học:
                            <select
                                name= "const"
                                value= {this.state.courst}
                                onChange={ this.handleInputChange}
                            >

                                <option value="html">HTML</option>
                                <option value="html">CSS</option>
                                <option value="html">ReactJS</option>
                                <option value="html">Laravel</option>
                                
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            Massages:
                            <textarea
                                name="massages"
                                type="text"
                                value= {this.state.massages}
                                onChange={ this.handleInputChange}/>
                        </label>
                        <br/><br/>
                        <input type="submit" value="submit"/>

                    </form>
        );
    }
}

export default Form;