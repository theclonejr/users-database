import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({ createUsers, infoUpdate, updateUsers, setInfoUpdate, isDisable, setIsDisable }) => {

  

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
      if (infoUpdate ) {
        updateUsers('/users', infoUpdate.id, data)
        setInfoUpdate()
      } else {
        createUsers('/users', data)
      }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setIsDisable(true)
    }

    const handleDisable = () => {
      setIsDisable(true)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
      setInfoUpdate()
    }

    

  return (
    <div className={`form__container ${isDisable && 'form__disable'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Form User</h2>
      <div onClick={handleDisable} className="form__x">
      <i className='bx bx-x-circle'></i>
      </div>
        <label className="form__label">
            <span className="form__span">Email:</span>
          <input className="form__input" {...register('email')} type="email" />
        </label>
        <label className="form__label">
            <span className="form__span">Password</span>
          <input className="form__input"  {...register('password')} type="password" />
        </label>
        <label className="form__label">
            <span className="form__span">First Name</span>
          <input className="form__input" {...register('first_name')} type="text" />
        </label>
        <label className="form__label"> 
             <span className="form__span">Last Name</span>
          <input className="form__input" {...register('last_name')} type="text" />
        </label>
        <label className="form__label">
            <span className="form__span">Birthday</span>
          <input className="form__input" {...register('birthday')} type="date" />
        </label>
        <button className="form__btn">submit</button>
      </form>
    </div>
  );
};

export default FormUser;
