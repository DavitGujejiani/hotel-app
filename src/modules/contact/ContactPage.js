import React from 'react';
import ContactForm from "./components/ContactForm";
import InfoCard from "./components/InfoCard";

function ContactPage() {
    return (
        <div className="w-full flex justify-center py-24 border">
            <div className="w-full max-w-2xl">

                <ContactForm />
                <InfoCard />
            </div>
        </div>
);
}

export default ContactPage;