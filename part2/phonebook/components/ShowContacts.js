import React from 'react'
import Contact from './Contact'

const ShowContacts = ({filteredContacts}) => {
    return(
        <table>
        <thead>
          <tr>
            <td>
              Name:
            </td>
            <td>
              Number:
            </td>
          </tr>
        </thead>
        <tbody>
        {filteredContacts().map((person, i) => 
          <Contact key={i} person={person} />
        )}
        </tbody>
      </table> 
    )
}


export default ShowContacts