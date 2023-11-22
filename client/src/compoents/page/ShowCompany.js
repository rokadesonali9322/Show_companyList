import React from 'react'

function ShowCompany({ getcompany }) {
  console.log(getcompany)
  //   console.log(getCompany.name)

  return (
    <tr>
      <td className="py-2">{getcompany.companyname}</td>
      <td>{getcompany.industry}</td>
      <td>{getcompany.location}</td>
      <td>{getcompany.headquators}</td>
      <td>{getcompany.email}</td>
    </tr>
  )
}

export default ShowCompany
