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
    <div className="min-h-screen flex flex-col md:flex-row bg-background font-pin-sans">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12 bg-background">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-muted-foreground font-semibold tracking-wide text-sm">START FOR FREE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center gap-2">
              Create new account
              <span className="inline-block w-3 h-3 rounded-full bg-brand" />
            </h1>
            <div className="text-muted-foreground text-base mb-2">
              Already A Member?{' '}
              <button
                className="text-brand font-medium hover:underline focus:outline-none"
                type="button"
                onClick={() => setTab('signin')}
              >
                Log In
              </button>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8">
            <div className="flex mb-6 gap-2">
              <button
                className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${tab === 'signin' ? 'bg-brand text-white shadow' : 'bg-muted text-foreground'}`}
                onClick={() => setTab('signin')}
                type="button"
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${tab === 'signup' ? 'bg-brand text-white shadow' : 'bg-muted text-foreground'}`}
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
                  className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand"
                />
                <Button type="submit" className="w-full rounded-xl bg-brand hover:bg-brand-700 text-white text-lg font-semibold py-3 shadow-md transition-colors" disabled={loading}>
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
                    className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand flex-1"
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={fullName.split(' ')[1] || ''}
                    onChange={(e) => setFullName((fullName.split(' ')[0] || '') + ' ' + e.target.value)}
                    required
                    className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand flex-1"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl bg-muted/60 border border-input px-4 py-3 text-lg shadow-sm focus:ring-2 focus:ring-brand"
                />
                <Button type="submit" className="w-full rounded-xl bg-brand hover:bg-brand-700 text-white text-lg font-semibold py-3 shadow-md transition-colors" disabled={loading}>
                  {loading ? 'Signing Up...' : 'Create account'}
                </Button>
              </form>
            )}

            {error && (
              <Alert className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
      {/* Right: Decorative image/shape */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-tr from-brand-50 to-brand-100 relative overflow-hidden">
        <img
          src="/images/loggin.png"
          alt="Decorative background"
          className="object-cover w-full h-full max-h-[90vh] rounded-l-3xl shadow-2xl"
        />
        {/* Optional: Add a logo or watermark at the bottom right */}
        {/* <div className="absolute bottom-8 right-8 opacity-70">
          <img src="/logo.svg" alt="Logo" className="h-10" />
        </div> */}
      </div>
    </div>
  );
};

export default Auth;
