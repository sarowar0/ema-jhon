import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        < form onSubmit={handleSubmit(onSubmit)} className='shipment'>
            
            < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='Your name'/>
            { errors.nameRequired && <span>Name field is required</span>}

            < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='Your email address'/>
            { errors.exampleRequired && <span>Email field is required</span>}

            < input name="phone" ref={register({ required: true })} placeholder='Your phone number'/>
            { errors.exampleRequired && <span>Phone number is required</span>}

            < input name="address" ref={register({ required: true })} placeholder='Your address'/>
            { errors.exampleRequired && <span>Address is required</span>}

            <input type="submit" className='w-50 mx-auto btn btn-success'/>
        </form >
    );
};

export default Shipment;