import React, { useState, useEffect, } from "react"
import { Header, } from 'semantic-ui-react'
import Department from "./Department"
import { Link, } from 'react-router-dom'
import axios from 'axios'
import DepartmentForm from './DepartmentForm'

const Departments = (props) => {
  const [departments, setDepartments] = useState([])
  useEffect( () => {
    axios.get('/api/departments')
    .then( res => {
      setDepartments(res.data);
    })
  }, []);






  const renderDept = () => {


    console.log("renderDept")

  }

    return (
      <>
      <Header as="h1">Departments</Header>
      {renderDept()}
      <DepartmentForm add={useEffect}/>

      </>

    )


    }




export default Departments;
