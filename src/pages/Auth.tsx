import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'signin' | 'signup'>('signup');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/');
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: { full_name: fullName }
        }
      });
      if (error) throw error;
      setError('Check your email for the confirmation link!');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      {/* Background image container with white spacing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/5 h-4/5 max-w-2xl max-h-[800px] bg-cover bg-center bg-no-repeat rounded-3xl" style={{ backgroundImage: 'url(/images/loggin.png)' }}>
          {/* Overlay for better readability */}
          <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-3xl"></div>
        </div>
      </div>
      
      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-transparent backdrop-blur-md rounded-3xl p-8">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white font-semibold tracking-wide text-sm drop-shadow-lg">START FOR FREE</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2 drop-shadow-lg">
              Create new account
              <span className="inline-block w-3 h-3 rounded-full bg-blue-400" />
            </h1>
            <div className="text-white/90 text-base mb-2 drop-shadow-lg">
              Already A Member?{' '}
              <button
                className="text-blue-300 font-medium hover:text-blue-200 hover:underline focus:outline-none transition-colors"
                type="button"
                onClick={() => setTab('signin')}
              >
                Log In
              </button>
            </div>
          </div>

          <div className="flex mb-6 gap-2">
            <button
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-200 ${
                tab === 'signin' 
                  ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-600/25 backdrop-blur-sm' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
              onClick={() => setTab('signin')}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-200 ${
                tab === 'signup' 
                  ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-600/25 backdrop-blur-sm' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
              onClick={() => setTab('signup')}
              type="button"
            >
              Sign Up
            </button>
          </div>

          {tab === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-5 animate-fade-in">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600"
              />
              <Button 
                type="submit" 
                className="w-full rounded-xl bg-blue-600/90 hover:bg-blue-700/90 text-white text-lg font-semibold py-3 shadow-lg shadow-blue-600/25 transition-all duration-200 transform hover:scale-[1.02] backdrop-blur-sm" 
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          )}

          {tab === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-5 animate-fade-in">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="First name"
                  value={fullName.split(' ')[0] || ''}
                  onChange={(e) => setFullName(e.target.value + (fullName.includes(' ') ? ' ' + fullName.split(' ').slice(1).join(' ') : ''))}
                  required
                  className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600 flex-1"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={fullName.split(' ')[1] || ''}
                  onChange={(e) => setFullName((fullName.split(' ')[0] || '') + ' ' + e.target.value)}
                  required
                  className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600 flex-1"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl bg-white/90 border border-white/30 px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-600"
              />
              <Button 
                type="submit" 
                className="w-full rounded-xl bg-blue-600/90 hover:bg-blue-700/90 text-white text-lg font-semibold py-3 shadow-lg shadow-blue-600/25 transition-all duration-200 transform hover:scale-[1.02] backdrop-blur-sm" 
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Create account'}
              </Button>
            </form>
          )}

          {error && (
            <Alert className="mt-4 bg-red-500/20 border-red-400/30 backdrop-blur-sm">
              <AlertDescription className="text-red-200 drop-shadow-lg">{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
