import './ContactForm.css';

function ContactForm() {
    return(
        <div className="ContactContainer" id='ContactContainer'>
            <div className="contacttext">
                <div className="innertext" style={{fontSize: 50, color: 'white'}}>INTERESTED?</div>
                <div className="innertext" style={{fontSize: 25, color: '#14CC60'}}>SEND A MESSAGE</div>
            </div>
            <form>
                <div className="row">
                    <div className='inputgroups'>
                        <input type="text" id='name'></input>
                        <label for="name">Name</label>
                    </div>
                    <div className='inputgroups'>
                        <input type="text" id='company'></input>
                        <label for="company">Company</label>
                    </div>
                </div>
                <div className="row">
                    <div className='inputgroups'>
                        <input type="email" id='email'></input>
                        <label for="email">Email</label>
                    </div>
                    <div className='inputgroups'>
                        <input type="text" id='phone'></input>
                        <label for="phone">Phone #</label>
                    </div>
                </div>
                <div className="inputgroups">
                    <textarea id='message' rows='6' cols='50'></textarea>
                    <label for='message'>Messages</label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;