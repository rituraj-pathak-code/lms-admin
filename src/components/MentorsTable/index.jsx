import { DataGrid } from '@mui/x-data-grid';
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
        field: 'course',
        headerName: 'Course',
        width: 360,
        editable: true,
      },
      {
        field: 'view',
        headerName: 'View Employee',
        width: 150,
        editable: false,
        renderCell: (params) => (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button><FaRegEye color='green' size={18}/></button>
            <button><CiEdit color='yellow' size={18}/></button>
            <button><MdDeleteOutline color='red' size={18}/></button>
            </div>
          ),
      },
    
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', course: 'Stress Management'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', course: 'Stress Management' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', course: 'Stress Management'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', course: 'Stress Management' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', course: 'Stress Management' },
    { id: 6, lastName: 'Melisandre', firstName: null, course: 'Stress Management'},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', course: 'Stress Management' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', course: 'Stress Management' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', course: 'Stress Management'},
  ];

const MentorsTable = () => {
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'bg-[#F0FFFF]' : 'bg-white'
          }
      />
  )
}

export default MentorsTable