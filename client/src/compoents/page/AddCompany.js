import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const AddCompany = () => {
  const navigate = useNavigate()

  // states
  const [getTaskData, setTaskData] = useState({
    companyname: '',
    industry: '',
    location: '',
    headquators: '',
    email: '',
  })

  const { companyname, industry, location, headquators, email } = getTaskData
  const OnInputChange = (e) => {
    setTaskData({ ...getTaskData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://showcompanylist.onrender.com/company', {
        companyname,
        industry,
        location,
        headquators,
        email,
      })
      toast.success('Company Name  added Successfully')

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 style={{ color: '#212121' }}>Add New Company Name</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* company name field */}
                <div className="form-group  my-2">
                  <label htmlFor="title">Company name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="Enter the company name"
                    name="companyname"
                    value={companyname}
                    // onChange={handleTitleChange}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>

                {/* <!-- industry Field --> */}
                <div className="form-group  my-2">
                  <label htmlFor="description">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter the company Industry type"
                    name="industry"
                    value={industry}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>
                {/* <!-- location Field --> */}
                <div className="form-group my-2">
                  <label htmlFor="description">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter the Company location"
                    name="location"
                    value={location}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>
                {/* <!-- headquotrs Field --> */}
                <div className="form-group  my-2">
                  <label htmlFor="description">headquators</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter the company heaquators"
                    name="headquators"
                    value={headquators}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>
                {/* <!-- email Field --> */}
                <div className="form-group  my-2">
                  <label htmlFor="description">Company Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter the Compnay email"
                    name="email"
                    value={email}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn w-100 "
                    value="Add "
                    style={{
                      textAlign: 'left',
                      marginTop: '5px',
                      backgroundColor: '#60bf70',
                      color: '#fff',
                      fontSize: '1.1rem',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddCompany
