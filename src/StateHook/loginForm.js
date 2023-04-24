import React, { userState } from 'react';
const loginForm = () => {
    const [email, setEmail] = userState('');
    const[password, setPassword] = userState('');

        return (
            const {handleSubmit} = this.props;
            <div className='App'>
                <header className='App-header'>
                    <form onSubmit={handleSubmit}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Submit</button>
                    </form>

                </header>
                
            </div>
        );
    }


export default loginForm;