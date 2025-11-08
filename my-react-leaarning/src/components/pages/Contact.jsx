function Contact() {
  return (
      <div style={{
          padding: '40px',
          textAlign: 'center',
          minHeight: '80vh'
      }}>
          <h1 style={{ 
              fontSize: '48px', 
              color: '#e74c3c',
              marginBottom: '20px' 
          }}>
              📧 Contact Us
          </h1>
          <div style={{
              maxWidth: '500px',
              margin: '30px auto',
              textAlign: 'left',
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
              <p style={{ marginBottom: '15px' }}>
                  <strong>Email:</strong> hello@reactapp.com
              </p>
              <p style={{ marginBottom: '15px' }}>
                  <strong>Phone:</strong> (123) 456-7890
              </p>
              <p style={{ marginBottom: '15px' }}>
                  <strong>Address:</strong> 123 React Street, Code City
              </p>
          </div>
      </div>
  );
}

export default Contact;