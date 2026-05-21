import { Form } from '@adonisjs/inertia/react'

export default function Login() {
  return (
    <>
      <div className="form-container">
        <Form route="session.store">
          {({ errors }) => (
            <>
              <div className="form-container-inputs">
                <div className="form-email form-option">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  data-invalid={errors.email ? 'true' : undefined}
                />
                {errors.email && <div>{errors.email}</div>}
              </div>

              <div className="form-password form-option">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name='password' id='password' autoComplete='current-password' />
              </div>

              <div className="form-submit">
                <button className="global-button" type='submit'>Se connecter</button>
              </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </>
  )
}

{
  // <div className="form-container">
  //     <div>
  //       <h1> Login </h1>
  //       <p>Enter your details below to login to your account</p>
  //     </div>

  //     <div>
  //       <Form route="session.store">
  //         {({ errors }) => (
  //           <>
  //             <div>
  //               <label htmlFor="email">Email</label>
  //               <input
  //                 type="email"
  //                 name="email"
  //                 id="email"
  //                 autoComplete="username"
  //                 data-invalid={errors.email ? 'true' : undefined}
  //               />
  //               {errors.email && <div>{errors.email}</div>}
  //             </div>

  //             <div>
  //               <label htmlFor="password">Password</label>
  //               <input
  //                 type="password"
  //                 name="password"
  //                 id="password"
  //                 autoComplete="current-password"
  //               />
  //               {errors.password ? <span>{errors.password}</span> : ''}
  //             </div>

  //             <div>
  //               <button type="submit" className="button">
  //                 Login
  //               </button>
  //             </div>
  //           </>
  //         )}
  //       </Form>
  //     </div>
  //   </div> 
}
