const Login = () => {
  return (
    <>
      <div className="login_wrap">
        <form className="login">
          <div className="login error"></div>
          <input type="text" placeholder="Username" name="u_id" />
          <input type="text" placeholder="Password" name="u_password" />
          <button type="button" className="login_btn" button-32>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
