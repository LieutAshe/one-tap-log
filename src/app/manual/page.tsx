import Header from '../statics/header/page'
import Footer from '../statics/footer/page'
import Twins from '../global/twins/page'
import '../globals.css';

export default function Page() {
    return (
        <main>
            <Header />
            <Footer />
            <Twins />
        </main>
    );
}