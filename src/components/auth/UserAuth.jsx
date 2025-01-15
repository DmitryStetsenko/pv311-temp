const UserAuth = (props) => {
  const {isAdmin, setIsAdmin} = props;

  const textBtn = isAdmin ? 'Logout' : 'Login';

  return (
    <button 
      className="auth-btn"
      onClick={() => setIsAdmin(prev => !prev)}
    >
        { textBtn }
    </button>
  )
}

export default UserAuth;