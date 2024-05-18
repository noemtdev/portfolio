import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Tos = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto px-8 py-12 flex-grow">
                <section className="text-left">
                    <h2 className="text-5xl font-bold mb-8">pixly - Terms of Service</h2>
                    <h2 className="bolded text-2xl">1. Terms</h2>
                    <p>
                    By using this app, you are agreeing to be bound by this apps Terms and Conditions of Use and
                    agree that you are responsible for the agreement with any applicable local laws. If you disagree
                    with any of these terms, you are prohibited from accessing this site. The materials contained in
                    this app are protected by copyright and trade mark law.
                    </p>
                    <h2 className="bolded text-2xl">2. Use License</h2>
                    <p>
                    Permission is granted to temporarily download one copy of the materials on pixly's app for
                    personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                    </p>
                    <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained in the pixly app;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>
                    transferring the materials to another person or "mirror" the materials on any other server.
                    </li>
                    </ul>
                    <p>
                    This will let pixly to terminate upon violations of any of these restrictions. Upon
                    termination, your viewing right will also be terminated and you should destroy any downloaded
                    materials in your possession whether it is printed or electronic format.
                    </p>
                    <h2 className="bolded text-2xl">3. Disclaimer</h2>
                    <p>
                    All the materials on pixly’s app are provided "as is". pixly makes no warranties, may it
                    be expressed or implied, therefore negates all other warranties. Furthermore, pixly does not
                    make any representations concerning the accuracy or reliability of the use of the materials on
                    its app or otherwise relating to such materials or any sites linked to this app.
                    </p>
                    <h2 className="bolded text-2xl">4. Limitations</h2>
                    <p>
                    pixly or its suppliers will not be hold accountable for any damages that will arise with the
                    use or inability to use the materials on pixly’s app, even if pixly or an authorize
                    representative of this app has been notified, orally or written, of the possibility of such
                    damage. Some jurisdiction does not allow limitations on implied warranties or limitations of
                    liability for incidental damages, these limitations may not apply to you.
                    </p>
                    <h2 className="bolded text-2xl">5. Revisions and Errata</h2>
                    <p>
                    The materials appearing on pixly’s app may include technical, typographical, or photographic
                    errors. pixly will not promise that any of the materials in this app are accurate, complete,
                    or current. pixly may change the materials contained on its app at any time without notice.
                    pixly does not make any commitment to update the materials.
                    </p>
                    <h2 className="bolded text-2xl">6. Links</h2>
                    <p>
                    pixly has not reviewed all of the sites linked to its app and is not responsible for the
                    contents of any such linked site. The presence of any link does not imply endorsement by
                    pixly of the site. The use of any linked website is at the user’s own risk.
                    </p>
                    <h2 className="bolded text-2xl">7. Site Terms of Use Modifications</h2>
                    <p>
                    pixly may revise these Terms of Use for its Website at any time without prior notice. By
                    using this app, you are agreeing to be bound by the current version of these Terms and
                    Conditions of Use.
                    </p>
                    <h2 className="bolded text-2xl">8. Your Privacy</h2>
                    <p>Please read our Privacy Policy. It can be found at https://noemt.dev/privacy.</p>
                    <h2 className="bolded text-2xl">9. Governing Law</h2>
                    <p>
                    Any claim related to pixly's app shall be governed by the laws of de without regards to its
                    conflict of law provisions.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Tos;
