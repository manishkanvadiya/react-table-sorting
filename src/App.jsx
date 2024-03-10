import { useState } from 'react';

const students = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    dob: '1990-01-01',
  },
  {
    id: '3',
    firstname: 'Aziz',
    lastname: 'Abdu',
    dob: '1994-03-03',
  },
  {
    id: '2',
    firstname: 'Jane',
    lastname: 'Doe',
    dob: '1992-02-02',
  },
  {
    id: '5',
    firstname: 'Ravi',
    lastname: 'Krishna',
    dob: '1998-08-03',
  },
  {
    id: '4',
    firstname: 'Rohan',
    lastname: 'Mathew',
    dob: '1995-05-02',
  },
];
function App() {
  const [data, setData] = useState(students);
  const [header, setHeader] = useState(Object.keys(students[0]));
  const [sortOrder, setSortOrder] = useState({ field: 'id', direction: 'asc' });

  const toggleSortOrder = (field) => {
    if (sortOrder.field === field) {
      setSortOrder({
        ...sortOrder,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortOrder({ field, direction: 'asc' });
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const field = sortOrder.field;
    const direction = sortOrder.direction === 'asc' ? 1 : -1;

    if (field === 'id') {
      return direction * a.id.localeCompare(b.id);
    } else if (field === 'dob') {
      return direction * new Date(a.dob) - new Date(b.dob);
    }
    return 0;
  });

  return (
    <>
      <button onClick={() => toggleSortOrder('id')}>Toggle Sort Id</button>
      <button onClick={() => toggleSortOrder('dob')}>Toggle Sort Dob</button>
      <table>
        <thead>
          <tr>
            {header.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              {header.map((items) => (
                <td key={items}>{item[items]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
