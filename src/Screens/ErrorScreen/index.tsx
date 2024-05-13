import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="bg-primary-50 dark:bg-primary-dark-50 text-primary-100 dark:text-primary-dark-100 flex h-full items-center justify-center text-center">
      <Link to="/">Redirect to Home</Link>
    </div>
  );
};

export default ErrorScreen;
