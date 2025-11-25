import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-4">
      <div className="max-w-screen-lg w-full bg-slate-800 shadow-2xl rounded-2xl flex overflow-hidden border border-slate-700">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              Welcome Back
            </h1>
            <p className="text-slate-400 text-sm mt-2">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                  type="email"
                  placeholder="name@company.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <input
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transform transition-all duration-200 hover:-translate-y-0.5"
            >
              Sign In
            </button>

            <p className="text-center text-slate-400 text-sm mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-teal-400 hover:text-teal-300 font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side: Decorative Image/Gradient */}
        <div className="hidden lg:flex w-1/2 bg-slate-700 relative items-center justify-center overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-slate-800 to-slate-900 opacity-90"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Content overlay */}
            <div className="relative z-10 text-center px-10">
                <h2 className="text-3xl font-bold text-white mb-4">Secure & Fast</h2>
                <p className="text-slate-200">Manage your users efficiently with our modern dashboard system.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Login;