import React from "react";
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from "yup";




const ContactUs = () => {

    const registration = {
        name: "",
        email: "",
        password: "",
        mobileno :"",
      };
    
    
      const schema = Yup.object({
        name: Yup.string().required("Please Enter Name"),
        email: Yup.string().required("Please Enter Email"),
        password: Yup.string().required("Please Enter Password"),
        mobileno: Yup.string().required("Please Enter Mobile No."),
      });
    
      const handleSubmit = (values) => {  
        console.log("form values", values);
        const payload = {
          name: values.name,
          email: values.email,
          password: values.password,
          mobileno: values.mobileno,
        };
        alert(payload.email + payload.password);

      };
    
return (
    <>
     <section id="appointment" className="appointment section-bg">
      <div className="container">

            <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates tempore doloribus assumenda obcaecati! Ea enim saepe minus architecto quibusdam reiciendis officiis distinctio necessitatibus voluptatibus molestiae? Ipsa porro dolore atque nobis.</p>
        </div>

    <Formik initialValues={registration}
          validationSchema={schema}
          onSubmit={handleSubmit}>

         <Form >
          <div className="row">
          <div className="col-md-4 form-group mt-3">
            <Field  type="text" className="form-control" placeholder="username"  name="name"/>
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="name"
                  ></ErrorMessage>
 
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field type="text" class="form-control" placeholder="emailId" name="email" />
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="email"
                  ></ErrorMessage>
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="phone" type="text" class="form-control" placeholder="phone" />
            
            </div>
            </div>
       <div className="row">

       <div className="col-md-4 form-group mt-3">
            <Field name="Appointment" type="text" class="form-control" placeholder="Appointment" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Date" type="text" class="form-control" placeholder="Date" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Doctor" type="text" class="form-control" placeholder="Doctor" />
           </div>
    
           <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
        </div>

</div>

 </Form>


    </Formik>

        

      </div>
    </section>


    </>
);

};


export default ContactUs