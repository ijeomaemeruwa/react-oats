import React from 'react'
import '../Services/Services.scss'

export const Services = () => {
    return (
    <div>
    <section className="services_section">
    <div className="services_content row m-auto">
    <div className="col-md-6 text-center content">
    <img src={require('../../assets/icons/tag.png')} alt="tags" /><br />
    <h5>Discover</h5>
    <p>Discover and shop your favorite brands</p>
    </div>

    <div className="col-md-6 text-center content">
    <img src={require('../../assets/icons/delivery.png')} alt="tags" /><br />
    <h5>Delivery</h5>
    <p>Easy and fast delivery, worldwide.</p>
    </div>
    </div>
    </section>
    </div>
    )
}
