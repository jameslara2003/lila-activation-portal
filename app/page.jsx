"use client";

import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';

export default function LilaActivation() {
  const [activated, setActivated] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const validCode = 'MCFR3to6Ecole';

  const handleActivate = () => {
    if (code.trim() === validCode) {
      setActivated(true);
      setError('');
    } else {
      setError('Invalid activation code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-2xl rounded-2xl border-2 border-purple-300 bg-white">
        <CardContent className="p-6 space-y-6">
          {!activated ? (
            <>
              <h1 className="text-3xl font-bold text-center text-purple-700">Activate Lila AI Assistant</h1>
              <p className="text-center text-sm text-gray-600">
                Welcome Ms. Claudine! Please enter your activation code below to begin.
              </p>
              <Input
                placeholder="Enter activation code"
                className="border-purple-400 focus:border-purple-600"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button onClick={handleActivate} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Activate Lila
              </Button>
              {error && <p className="text-red-500 text-center text-sm">{error}</p>}
            </>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-700 text-center">Bonjour, Ms. Claudine! 🌸</h2>
              <p className="text-sm text-gray-700">
                I’m <strong>Lila</strong>, your AI assistant for Ecole Felix Reymond. I’m here to support you and your students in their learning journey — from creating lesson plans to offering real-time translations and engaging classroom support.
              </p>
              <p className="text-sm text-gray-700 italic">
                "Hello Ms. Claudine, this is James E.L.L. Thank you for using Lila. I hope this system brings you and your students the best possible experience this school year!"
              </p>
              <p className="text-xs text-gray-500 text-center">Session timeout: 10 minutes of inactivity</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
