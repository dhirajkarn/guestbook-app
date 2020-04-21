import React from "react"
import { Guest } from '../Guest/Guest'

export const GuestList = (props) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Guest guest={props.guest} /></td>
                    <td className="align-middle">
                        <button type="button" className="btn btn-warning mr-2">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}