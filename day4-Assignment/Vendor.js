import React, { useState } from 'react';
import axios from 'axios';

function Vendor() 
{
    const [vendorName, setVendorName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();


    const onSubmit = (e) => {
        e.preventDefault();
        const vendor = {vendorname : vendorName, address: address, phone: phone};

        axios.post("http://localhost:4000/vendor", vendor).then(res => {
            console.log(res);
        })
    }
    
    return (
        <>
            <h4>Add new Vendor</h4>
            <form className='form-group'>

                <div className='form-group'>
                    <label>Vendor Name</label>
                    <input type='text' className='form-control' onChange={(e) => setVendorName} />
                </div>


                <div className='form-group'>
                    <label>Address</label>
                    <input type='text' className='form-control' onChange={(e) => setAddress} />
                </div>

                <div className='form-group'>
                    <label>Phone</label>
                    <input type='number' className='form-control' onChange={(e) => setPhone} />
                </div>

                <div className='form-group'>
                    <button className='btn btn-success' onClick={onSubmit}> Submit </button>
                </div>

            </form>
        </>
    )

}
export default Vendor;