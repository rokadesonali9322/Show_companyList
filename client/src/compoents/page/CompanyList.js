import React from 'react'

import ShowCompany from './ShowCompany'

function CompanyList({ getcompanyData }) {
  //   console.log(getcompanyData)
  return (
    <div>
      {getcompanyData?.length === 0 ? (
        <p className="notfound">No Data is Found</p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div
                className="card-body"
                style={{
                  display: 'flex',
                }}
              >
                <table className="col-md-12">
                  <thead className="text-white bg-success text-center">
                    <tr style={{ marginBottom: '20px' }}>
                      <th className="tablehead">Company name</th>
                      <th>Industry</th>
                      <th>Location</th>
                      <th>headquators</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {getcompanyData?.map((ele, index) => {
                      console.log(ele)
                      return <ShowCompany key={index} getcompany={ele} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompanyList
