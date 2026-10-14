import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, selectedRole } = useApp();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase().includes('already') || email.toLowerCase() === 'test@company.com') {
      setErrorMessage('This demo email is already registered. Try logging in.');
      return;
    }
    register(firstName, email, password);
    navigate('/app/home');
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-8 bg-white max-w-xl mx-auto w-full overflow-y-auto">
      <div>
        <button onClick={() => navigate(-1)} className="text-xs font-semibold text-[#005596] flex items-center gap-1 mb-6">
          ‹ Back
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-[#005596] text-white flex items-center justify-center text-xs">💼</div>
          <span className="font-bold text-lg text-[#005596]">hotel<span className="text-[#E05638]">connect</span></span>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold mb-1">
          CREATE A DEMO ACCOUNT
        </p>
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Your next chapter starts here.</h1>
        <p className="text-xs text-slate-500 mb-6">
          Join as a {selectedRole === 'retailer' ? 'Retailer / Travel Agent' : 'Hotel Agent / Manager'}.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">First name</label>
            <input
              type="text"
              required
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#005596]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                errorMessage ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-[#005596]'
              }`}
            />
            {errorMessage && (
              <p className="text-[11px] text-red-500 mt-1">{errorMessage}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#005596] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#005596] hover:bg-[#004478] text-white font-semibold rounded-xl text-sm transition-all shadow-md mt-4"
          >
            Create demo account
          </button>
        </form>
      </div>

      <p className="text-xs text-center text-slate-500 mt-6">
        Already registered?{' '}
        <button onClick={() => { register(firstName || 'Noha', email || 'demo@company.com', password); navigate('/app/home'); }} className="text-[#005596] font-bold hover:underline">
          Log in
        </button>
      </p>
    </div>
  );
};