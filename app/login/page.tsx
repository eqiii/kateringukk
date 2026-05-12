"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      // Redirect berdasarkan role yang dipilih
      switch (role) {
        case "admin":
          router.push("/admin");
          break;
        case "owner":
          router.push("/owner");
          break;
        case "kurir":
          router.push("/dashboard/kurir");
          break;
        default:
          router.push("/"); // customer ke home
          break;
      }
    } catch (err: any) {
      setError(err.message || "Login gagal. Cek email/password Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* LEFT SIDE - VISUAL BRANDING */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop"
            alt="background"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Katering Berkah</h1>
          <p className="text-white/90 text-lg max-w-md mx-auto drop-shadow">
            Solusi cerdas manajemen kebutuhan makan perusahaan dengan paket hemat dan pengiriman terpercaya.
          </p>
        </div>
        
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
            <p className="mt-2 text-gray-500">Masuk ke akun Anda untuk melanjutkan</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 text-sm text-center text-red-200 bg-red-500/20 border border-red-500/50 rounded-lg">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="nama@perusahaan.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Role Selector */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Login Sebagai</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white"
              >
                <option value="customer">Customer</option>
                <option value="kurir">Kurir</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
              </select>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-end">
              <Link href="/forgot-password" className="text-sm text-red-600 hover:text-red-800 font-medium">
                Lupa Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Memproses..." : "Login"}
            </button>

          </form>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link href="/register" className="font-medium text-red-600 hover:text-red-800">
                Daftar sekarang
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}