import React from "react";

const TableList = ({ students }) => {
  if (students?.length === 0) return null
  return (<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
    <table className="mt-50" data-testid="app-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th className="numeric">Points</th>
          <th className="numeric">Age</th>
        </tr>
      </thead>
      <tbody data-testid="app-tbody">
        {students.map((data, index) => (<tr key={data?.rank}>
          <td data-testid={`rank-${index}`}>{data?.rank}</td>
          <td data-testid={`name-${index}`}>{data?.name}</td>
          <td data-testid={`points-${index}`} className="numeric">{data?.points}</td>
          <td data-testid={`age-${index}`} className="numeric">{data?.age}</td>
        </tr>))}
      </tbody>
    </table>
  </div>)
}

export default TableList;