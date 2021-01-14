import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Facility from '../components/shop-style-one/Facility';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import Head from 'next/head'

const ThankYou = () => {
    return (
        <React.Fragment>
            <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar />

            <div className="thank-you-area">
                <div className="container">
                    <h1>Thank You: Your Message Has Been Successfully Delivered</h1>
                    <Link href="/">
                        <a className="btn btn-primary">Go Home</a>
                    </Link>
                </div>
            </div>

            <Facility />
            <Subscribe />
            <Partner />
            <InstagramPhoto />
            <Footer />
        </React.Fragment>
    );
}

export default ThankYou;
