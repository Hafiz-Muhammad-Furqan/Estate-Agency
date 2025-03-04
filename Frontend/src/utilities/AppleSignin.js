import { signInWithPopup, auth, appleProvider } from "../config/firebase.js";

const handleAppleSignin = async (setError, setLoading, navigate) => {
  setLoading(true);
  setError(null);

  try {
    const result = await signInWithPopup(auth, appleProvider);
    const user = result.user;

    const userData = {
      firstName: user.displayName || "Apple User",
      email: user.email || "No email provided",
      provider: "Apple",
    };

    const response = await fetch("http://localhost:5000/api/social-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Apple Sign-in failed");

    localStorage.setItem("token", data.token);
    navigate("/leads");
  } catch (err) {
    setError(err.message);
    console.log(err);
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};

export default handleAppleSignin;
