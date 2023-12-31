import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import axios from 'axios'

import CompanyList from './CompanyList'

const Home = () => {
  const [getcompanyData, setcompanyData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      LoadTodoTask()
    }, 1000)
  })

  const LoadTodoTask = async () => {
    // http://localhost:8080/company
    try {
      const result = await axios.get(
        'https://showcompanylist.onrender.com/company',
      )
      setcompanyData(result.data)
      //   console.log(result.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card col-md-12">
            <div
              className="card-body"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3>Show Company Name</h3>
              <div style={{ float: 'right' }}>
                <Link to="/newcompanyname">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    style={{
                      color: '#fff',
                    }}
                  >
                    Add Company Name
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="center_loading">
          <BeatLoader color={'#333'} loading={loading} size={20} />
        </div>
      ) : (
        <CompanyList getcompanyData={getcompanyData} />
      )}
    </div>
  )
}

export default Home
