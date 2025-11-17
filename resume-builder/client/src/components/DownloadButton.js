import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadButton = ({ resumeRef, fileName = 'resume' }) => {
  const downloadPDF = async () => {
    if (!resumeRef.current) {
      console.error('Resume reference not found');
      return;
    }

    try {
      // Show loading state
      const button = document.querySelector('.download-btn');
      const originalText = button.textContent;
      button.textContent = 'Generating PDF...';
      button.disabled = true;

      // Get the resume element
      const element = resumeRef.current;
      
      // Create canvas with higher quality for better PDF
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      pdf.save(`${fileName}.pdf`);

      // Restore button state
      button.textContent = originalText;
      button.disabled = false;

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
      
      // Restore button state
      const button = document.querySelector('.download-btn');
      button.textContent = 'Download PDF';
      button.disabled = false;
    }
  };

  return (
    <button 
      className="download-btn"
      onClick={downloadPDF}
      style={{
        background: '#4361ee',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        margin: '10px 0'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = '#3a56d4';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = '#4361ee';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;