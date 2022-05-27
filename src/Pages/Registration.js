import React from 'react'

const Registration = () => {
  return (
   <>
   <div>
       <h3 className='text-center text-info '>Registration</h3>
   </div>
   <div className='form'>
       <div className='form=body'>
           <div className='username'>
               <label className='form-label' for="fname">FirstName:</label>
               <input className='form-input' type="text" id='fname' placeholder='Enter First Name Here..'></input>
           </div>
           <div className='lastname'>
               <label className='form-label' for="lname" > LastName:</label>
               <input className='form-input' type="text" id="lname" placeholder='Enter LastName Here...'></input>

           </div>
           <div className='email'>
               <label className='form-label' for="email" >Email:</label>
               <input className='form-input' type="text" id="email" placeholder='Enter Email Here...'></input>

           </div>
           <div className='password'>
               <label className='form-label' for="password" > Password:</label>
               <input className='form-input' type="text" id="password" placeholder='Enter Password Here...'></input>

           </div>
           <div className='confirm-password'>
               <label className='form-label' for="cpassword" > Confirm Password:</label>
               <input className='form-input' type="text" id="cpassword" placeholder='Enter LastName Here...'></input>

           </div>
           
           <div className='button'>
              <button className='btn btn-ouline-dark ms-2 mt-5' type="submit">Register</button>
          </div>

       </div>


   </div>
   </>
  )
}

export default Registration;




// function RegistrationForm() {
//     return(
//       <div className="form">
//           <div className="form-body">
//               <div className="username">
//                   <label className="form__label" for="firstName">First Name </label>
//                   <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
//               </div>
//               <div className="lastname">
//                   <label className="form__label" for="lastName">Last Name </label>
//                   <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
//               </div>
//               <div className="email">
//                   <label className="form__label" for="email">Email </label>
//                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
//               </div>
//               <div className="password">
//                   <label className="form__label" for="password">Password </label>
//                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
//               </div>
//               <div className="confirm-password">
//                   <label className="form__label" for="confirmPassword">Confirm Password </label>
//                   <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//               </div>
//           </div>
//           <div class="footer">
//               <button type="submit" class="btn">Register</button>
//           </div>
//       </div>      
//     )       
// }
// export default RegistrationForm;
