import React from 'react'
import ControlledFormComponent from '../../Components/Forms/ControlledFormComponent/ControlledFormComponent'
import Nav from '../../Components/Nav/Nav'
import UnControlledFormComponent from '../../Components/Forms/UnControlledFormComponent/UnControlledFormComponent'
import FormikForm from '../../Components/Forms/FormikForm/FormikForm'

function AddProduct() {
  return (
    <>
        <Nav isAdminPage={true} />
        <ControlledFormComponent />
        {/* <UnControlledFormComponent /> */}
        {/* <FormikForm /> */}
    </>
  )
}

export default AddProduct