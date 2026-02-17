import React from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-red-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={submitHandler}>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
            placeholder="Email"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
