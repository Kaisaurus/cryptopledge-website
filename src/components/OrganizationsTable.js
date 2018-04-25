import React from 'react'

const OrganizationsTable = ({ organizations }) => {
  return (
    <table className="table is-narrower is-hoverable">
      <thead>
        <tr>
          <th>Organization</th>
          <th>Offsetting effectiveness tonnes of CO2 offset per euro</th>
          <th>Suggested donation per transaction (euro)</th>
        </tr>
      </thead>
      <tbody>
        {organizations ? (
          organizations.map((organization, i) => {
            return (
              <tr key={i}>
                <td>
                  <a href={organization.url}>{organization.name}</a>
                </td>
                <td>{organization.effectiveness}</td>
                <td>{organization.donation}</td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td>Loading data..</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default OrganizationsTable
