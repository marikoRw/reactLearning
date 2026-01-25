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


interface floatingCards {
    bgColor: string;
    iconcolor: string;
    textColor: string;
    contentColor: string;
    icon: string;
    title: string;
    content: string;
}

export const floatingCards: Record<string, floatingCards> = {
    "App.tsx" : {
        bgColor: "bg-blue-500/20",
        iconcolor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
    },

    "Main.tsx" : {
        bgColor: "bg-purple-500/20",
        iconcolor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡",
        title: "Auto Animation",
        content: "qwerty uio sdfg hjk cvbn xrctvvffxf",
    },

    "index.css" : {
        bgColor: "bg-emerald-500/20",
        iconcolor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "💀",
        title: "Killer Styles",
        content: "what what ahwtanfowen fwoenwf",
    },
};