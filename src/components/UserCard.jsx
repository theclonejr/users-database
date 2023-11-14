import "./styles/UserCard.css";
const UserCard = ({ user, deleteUsers, setInfoUpdate, setIsDisable }) => {
  const handleDelete = () => {
    deleteUsers(`/users`, user.id);
  };

  const handleEdit = () => {
    setInfoUpdate(user);
    setIsDisable(false);
  };

  return (
    <article className="card">
      <h2 className="card__title">
        {user.first_name} {user.last_name}
      </h2>
      <ul className="card__ul">
        <li className="card_list">
          <span className="list__item">Email </span>
          <span className="list__value">{user.email}</span>
        </li>
        <hr />
        <li className="card_list">
          <span className="list__item">Birthday </span>
          <span className="list__value">{user.birthday}</span>
        </li>
      </ul>
      <div className="btn__container">
        <button className="card__btn" onClick={handleDelete}>
          <i className="bx bxs-trash-alt"></i>
        </button>
        <button className="card__btn" onClick={handleEdit}>
          <i className="bx bxs-edit-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
