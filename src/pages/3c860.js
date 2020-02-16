
import Layout from "../components/layout"
import SEO from "../components/seo"


import React, { Component } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import LinkedInCertificate from 'react-linkedin-certification'; // import the component

export default class NotFoundPage extends Component {
  state = {
    hash: '3c860'
  }
  componentDidMount() {
    // window.location.replace("/");
  }

  downloadPdf() {
    let element = document.createElement('a');
    element.setAttribute('href', `/certificates/${this.state.hash}.pdf`);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  render() {
    return (
      <Layout>
        <SEO title="Orgil Batbold" />
        <div style={{ display: "flex", flex: '1', marginTop: '50px', cursor: 'pointer' }}>
          <PDFViewer
            onDocumentClick={() => this.downloadPdf()}
            document={{
              url: `/certificates/${this.state.hash}.pdf`,
            }}
            style={{ width: "300px", height: "300px" }}
          />
          <div style={{display: 'flex', flex: '4'}}>
          <LinkedInCertificate lang="en_US" certificationName="Oluulaa" />
          </div>
        </div>
      </Layout>
    )
  }
}

