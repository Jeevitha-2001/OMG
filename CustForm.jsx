import React from 'react';
import './CustForm.css';
import UploadImage from "../Image/Upload image.png";


function CustForm() {
    return (
        <div className='main'>
            <div className='sub-main'>


                <div>

                    <h1>Customize Options</h1>

                    <div >

                        <input type='text' placeholder='Enter Text here' className='name' />
                    </div>
                    <div className='second-input'>

                        {/* <input type='Colour' placeholder='Choose your colour' className='name' /> */}
                        <select >
                            <option disabled="true">Choose your colour</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Pink</option>

                        </select>
                    </div>
                    <div className='second-input'>

                        {/* <input type='Shape' placeholder='Choose your shape' className='name' /> */}

                        <select>
                            <option disabled="true" >Choose your shape</option>
                            <option>Circle</option>
                            <option>Square</option>
                            <option>Rectangle</option>
                            <option>Heart</option>


                        </select>
                    </div>
                    <div className='second-input'>
                        {/* <img src={UploadImage} alt="UploadImage" className='UploadImage' /> */}
                        <input type='file' placeholder='Upload your Image here' />

                    </div>
                    <br />

                    <button>Save Changes</button>
                </div>
            </div>


        </div>
    )
}

export default CustForm