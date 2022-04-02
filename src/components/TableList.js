import {Table} from "reactstrap"
import {useContext} from "react"
import {TrackerContext} from "../context/GeneralContext"
import {TiDeleteOutline} from "react-icons/ti";

const TableList = () => {

  const {list, setList} = useContext(TrackerContext)

  const handleRemove = (currentIndex) => {
    let removeList = list.filter((item, index) => index !== currentIndex)
    setList(removeList)
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Title
          </th>
          <th>
            Amount
          </th>
          <th>
            Type
          </th>
          <th className="text-center">
            Remove
          </th>
        </tr>
      </thead>

      {

        list.map((item, index) => {
          return (
            <tbody>
              <tr key={item + index}>
                <th scope="row"> {index + 1}</th>
                <td> {item.title}</td>
                <td> {item.amount}</td>
                <td> {item.type}</td>
                <td className="text-center"><TiDeleteOutline onClick={() => handleRemove(index)} size={20} color="orangered">Delete</TiDeleteOutline> </td>

              </tr>
            </tbody>
          )
        })

      }


    </Table>

  )
}
export default TableList


