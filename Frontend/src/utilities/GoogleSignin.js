import { googleProvider, signInWithPopup, auth } from "../config/firebase.js";

const handleGoogleSignin = async (setLoading, setError, navigate) => {
  setLoading(true);
  setError(null);

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Firebase se user ka data
    const userData = {
      firstName: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      provider: "Google",
    };

    // Backend API ko bhejo jo MongoDB me store karega
    const response = await fetch("http://localhost:5000/api/social-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Google Sign-in failed");

    localStorage.setItem("token", data.token);
    navigate("/leads"); // Redirect to dashboard
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export default handleGoogleSignin;
