import React from 'react';

function FormHandle2(){

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [zipcode, setZipcode] = React.useState('')
    const [hobby, setHobby] = React.useState('')

    return (
        <form>
            <div>
                <label>Name : </label>
                <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label>Email : </label>
                <input type='email' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Gender : </label>
                <input></input>
            </div>
            <div>
                <label>Date Of Birth : </label>
                <input type='text'  onChange={(e)=>setHobby(e.target.value)} value={hobby}></input>
            </div>
            <div>
                <label>Phone No : </label>
                <input type='phone' placeholder='Enter Phone No' onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
            </div>
            <div>
                <label>Address : </label>
                <input type='text' placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            </div>
            <div>
                <label>Zip Code : </label>
                <input type='number' placeholder='Enter Zip Code' onChange={(e)=>setZipcode(e.target.value)} value={zipcode}></input>
            </div>
            <div>
                <label>Hobby : </label>
                <input type='text' placeholder='Enter Hobby' onChange={(e)=>setHobby(e.target.value)} value={hobby}></input>
            </div>
        </form>
    )
}
export default FormHandle2;