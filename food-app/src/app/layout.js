import Header from "./components/Header";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Griffy } from 'next/font/google'
import Footer from "./components/Footer";
 
const griffy = Griffy({
  weight: '400',
  subsets: ['latin'],
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={griffy.className}>
        
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>

      </body>
    </html>
  );
}
