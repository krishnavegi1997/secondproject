
import {Formik} from 'formik'
function User() {
  return (
    <div>
        <h1>Formik-Validation</h1>
        <Formik
           initialValues={
            {
                name:'',
                email:''
            }
           }
           onSubmit={(uobj)=>{
          console.log(uobj)
           }}
        >
      {
        (fobj)=>{
          return(
           <form onSubmit={fobj.handleSubmit}>
              <input type="text" name='name' onChange={fobj.handleChange}/><br/>
              <input type="text" name='email' onChange={fobj.handleChange}/><br/>
              <button >AddUser</button>
           </form>
          )
        }
      }
        </Formik>
    </div>
  )
}

export default User