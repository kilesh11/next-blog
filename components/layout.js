import {useEffect} from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Prism from 'prismjs';
import '@/styles/prism';

export default function Layout({preview, children}) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);

    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <Alert preview={preview} />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
}
