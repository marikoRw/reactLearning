export const codeExamples: Record<string, string> = {

    // app
    "App.tsx" : `
    import Hero from "./components/Hero"
    import Navbar from "./components/Navbar"

    function App() {

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
        <Hero />
        </div>
    )
    }

    export default App
    `,
    
    // main
    "Main.tsx" : `
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import App from './App.tsx'
    import "./index.css"

    createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
    )
    `,

    // index
    "index.css" : `
    @import "tailwindcss";


    @layer utilities {
        .animate-in {
            animation-fill-mode: both;
        }

        .slide-in-form-top {
            animation-name: slideInFromTop;
        }

        .duration-300 {
            animation-duration: 300ms;
        }
    }

    @keyframes slideInFromTop {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    `
}