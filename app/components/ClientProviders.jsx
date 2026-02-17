"use client"
import { CookiesProvider } from 'react-cookie';

export default function ClientProviders({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
