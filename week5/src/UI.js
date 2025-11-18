const UI = ({ user }) => {
  return (
    <div style={{ border: '7px solid #ccc', padding: '5px', margin: '5px'}}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};
export default UI;