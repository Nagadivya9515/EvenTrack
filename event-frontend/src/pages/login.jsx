import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    });

    const data = await res.json();
    login(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <input name="email" placeholder="Email" className="input" />
      <input name="password" type="password" placeholder="Password" className="input" />
      <button className="btn-primary">Login</button>
    </form>
  );
}
