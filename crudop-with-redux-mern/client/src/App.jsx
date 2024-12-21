import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  // const [data, setData] = useState(Studentdata)

  const [data, setData] = useState([]);
  // const [id, setid] = useState(0);
  // const [name, setname] = useState("");
  // const [age, setage] = useState(0);
  // const [email, setemail] = useState("");
  // const [isupdate, setisupdate] = useState(false);

  // const [editId, seteditId] = useState();

  useEffect(() => {
    axios
      .post("https://crud-op-with-redux-in-mern.vercel.app/api/getStudents")
      .then((response) => {
        setData(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const haldleEdit = (id) => {
    const dt = data.filter((item) => item._id === id);
    console.log(id);
    setid(dt[0].id);
    setname(dt[0].name);
    setage(dt[0].age);
    setemail(dt[0].email);
    setisupdate(true);
    seteditId(id);

    cons;
  };
  const handledelete = async (id) => {
    console.log(id);
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    } else {
      try {
        await axios.delete(`https://curdopwithredux-in-mern.onrender.com/api/deleteStudent/${id}`);
        console.log("Post deleted:", id);
        setData(data.filter((post) => post._id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  // const handlesave = () => {
  //   axios
  //     .post("https://crud-op-with-redux-in-mern.vercel.app/api/create", {
  //       id,
  //       name,
  //       age,
  //       email,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setData([...data, response.data]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   handleclear();
  // };
  const handleclear = () => {
    setid(0);
    setname("");
    setage(0);
    setemail("");
    setisupdate(false);
  };

  // const handleUpdate = (_id) => {
  //   axios
  //     .put(`https://curdopwithredux-in-mern.onrender.com/api/updateStudent/${_id}`, {
  //       id,
  //       name,
  //       age,
  //       email,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(data.map((i) => (i._id === _id ? response.data : i)));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   handleclear();
  //   setisupdate(false);
  // };

  return (
    <>
      <Link className="btn btn-primary" to="/Save">
        Create
      </Link>

      {data.length === 0 ? (
        <h1> Please Create Student </h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Language</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {data?.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{student.language}</td>
                <td>{student.about}</td>
                <Link
                  to={`/Update/` + student._id}
                  className="btn btn-primary"
                  // onClick={() => haldleEdit(student._id)}
                >
                  edit
                </Link>
                &nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handledelete(student._id)}
                >
                  delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
