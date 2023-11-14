import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import "./components/styles/UserCard.css";
function App() {
  const [infoUpdate, setInfoUpdate] = useState();
  const [isDisable, setIsDisable] = useState(true);

  const url = "https://users-crud.academlo.tech";
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url);

  useEffect(() => {
    getUsers("/users");
  }, []);

  console.log(users);

  const handleCreateUser = () => {
    setIsDisable(false);
  };

  return (
    <div className="app">
      <h1 className="app__title">Users database</h1>
      <div className="app__btn--container">
        <button onClick={handleCreateUser} className="app__btn">
          Create new user
        </button>
      </div>
      <FormUser
        createUsers={createUsers}
        infoUpdate={infoUpdate}
        updateUsers={updateUsers}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      <div className="userCard__container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
