const VerifyEmail = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h5 className="text-white pt-2">
          Verify your email to log in. Check your inbox and click 'Redirect'
          after confirmation.
        </h5>
      </div>
      <div>
        <a href="/auth/login" className="btn btn-danger">
          Redirect
        </a>
      </div>
    </div>
  );
};

export default VerifyEmail;
