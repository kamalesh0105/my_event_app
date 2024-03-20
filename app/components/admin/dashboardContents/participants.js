const Participants = () => {
  return (
    // <div>
    //   <h2>Particiipants list......</h2>
    //   {/* Add your Option 1 specific content here */}
    // </div>
    <div className="container mt-2">
      <h3 className="mb-4">Participants</h3>
      <table className="table table-striped rounded-3 table-light ">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">EVENTS</th>
            <th scope="col">COLLEGE</th>
            <th scope="col">YEAR</th>
            <th scope="col">MOBILE</th>
            {/* <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Kamalesh</td>
            <td>KamaleshSelvam75@gmail.com</td>
            <td>CODE_RPG ,SQL </td>
            <td>Velammal Institute of Technology</td>
            <td>2nd</td>
            <td>6365882222</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Kamalesh</td>
            <td>KamaleshSelvam75@gmail.com</td>
            <td>CODE_RPG ,SQL </td>
            <td>Velammal Institute of Technology</td>
            <td>2nd</td>
            <td>6365882222</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success">Add User</button>
    </div>
  );
};

export default Participants;
