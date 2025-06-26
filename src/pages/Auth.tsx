import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/');
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

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
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-black hover:text-white transition-colors bg-brand hover:bg-brand-700 rounded-lg px-4 py-2 border border-brand-600 font-medium shadow-lg"
      >
        ← Back
      </button>

      {/* Background image container with white spacing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/5 h-4/5 max-w-2xl max-h-[800px] bg-cover bg-center bg-no-repeat rounded-3xl" style={{ backgroundImage: 'url(/images/loggin.png)' }}>
        </div>
      </div>
      
      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-xs mx-4">
        <div className="bg-transparent backdrop-blur-md rounded-3xl p-6">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-black mb-2 flex items-center justify-center gap-2 drop-shadow-lg">
              Sign in to admin panel
              <span className="inline-block w-3 h-3 rounded-full bg-brand" />
            </h1>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4 animate-fade-in">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl bg-white/95 border border-white/50 px-4 py-3 text-base shadow-sm focus:ring-2 focus:ring-brand focus:border-transparent transition-all backdrop-blur-sm placeholder-orange"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-xl bg-white/95 border border-white/50 px-4 py-3 text-base shadow-sm focus:ring-2 focus:ring-brand focus:border-transparent transition-all backdrop-blur-sm placeholder-orange"
            />
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="w-1/3 rounded-xl bg-brand hover:bg-brand-700 text-black hover:text-white text-base font-normal py-3 shadow-lg border border-brand-600 transition-all duration-200 transform hover:scale-[1.02]" 
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>

          {error && (
            <Alert className="mt-4 bg-destructive/40 border-destructive/50 backdrop-blur-sm">
              <AlertDescription className="text-destructive-foreground drop-shadow-lg">{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
