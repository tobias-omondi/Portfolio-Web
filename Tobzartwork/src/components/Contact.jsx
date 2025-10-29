import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // your personal Web3Forms access key
  const accessKey = 'ebccf34c-ba2d-47eb-bcd4-d0334895eee9' 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData()
    form.append('access_key', accessKey)
    form.append('name', formData.name)
    form.append('email', formData.email)
    form.append('phone', formData.phone)
    form.append('message', formData.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        Swal.fire({
          title: 'Successful sent!',
          text: 'Your message has been successfully delivered!',
          // icon: 'success',
          confirmButtonText: 'Awesome!',
          color: '#fff',
          iconColor: '#4ade80',
          customClass: {
            popup: 'swal-glass',
          },
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: 'Failed to send message. Try again later!',
        icon: 'error',
        confirmButtonText: 'okay',
        background: 'rgba(0,0,0,0.7)',
        color: '#fff',
        iconColor: '#f87171',
        customClass: {
          popup: 'swal-glass',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-20">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@email.com*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can I help you..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
