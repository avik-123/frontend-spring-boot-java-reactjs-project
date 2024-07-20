import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email_Id, setemail_Id] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, email_Id }


        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                //history.push('/employees')
                navigate('/employees');
            }).catch(error => {
                console.log(error)
            })

        } else {
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data)

                // history.push('/employees');
                navigate('/employees');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setlastName(response.data.lastName)
            setemail_Id(response.data.email_Id)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }


    return (

        <div>
            <br /> <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-lable'>First Name :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter first name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-lable'>Last Name :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter last name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-lable'>Email Id :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter EmailId'
                                        name='emailId'
                                        className='form-control'
                                        value={email_Id}
                                        onChange={(e) => setemail_Id(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to={'/employees'} className='btn btn-danger'>cancle</Link>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddEmployeeComponent