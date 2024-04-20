'use client'
import { useRouter } from "next/navigation";

export default function Page() {
    const buttonCustom = {
        color: '#eee',
        backgroundColor: '#595959',
    }

    const lift = {
        marginBottom: '30px',
    }

    const router = useRouter()
    return (
        <main>
            <div className="actions" style={lift}>
                <div className="subAction">
                    <button title="button1" className="button" style={buttonCustom} onClick={() => router.push('/home')}><p className="text" style={{color: '#eee'}}>Cancel</p></button>
                </div>
                <div className="subAction">
                    <button title="button1" className="button"><p className="text">Submit</p></button>
                </div>
            </div>
        </main>
    );
}