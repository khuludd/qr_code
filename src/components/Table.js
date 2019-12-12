import React from "react";

const Table = ({ characterData, removeCharacter }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>QR</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {characterData.map(({ name, qr }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{qr}</td>
            <td>
              <button onClick={() => removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
