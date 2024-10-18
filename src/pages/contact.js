import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Us">
            <p>Want to get in touch? My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact Us" />


export default ContactPage