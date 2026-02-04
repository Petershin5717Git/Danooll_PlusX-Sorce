import React, { useState } from 'react';

// [Danool Design Studio V10.0]
// Core Engine: Hybrid Layout System (Design + DB)

function DanoolStudio() {
  const [selectedMode, setMode] = useState('design'); // 'design' or 'db'

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial' }}>
      
      {/* 1. Left Toolbar (Danool Original Icons) */}
      <div style={{ width: '80px', background: '#333', color: 'white', padding: '10px' }}>
        <div style={{ marginBottom: '20px' }}>📁</div> {/* File */}
        <div style={{ marginBottom: '20px' }}>T</div>  {/* Text */}
        <div style={{ marginBottom: '20px' }}>barcode</div> {/* Barcode */}
        <div style={{ marginBottom: '20px' }}>🖼️</div> {/* Image */}
      </div>

      {/* 2. Main Workspace (Canvas) */}
      <div style={{ flex: 1, background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ 
          width: '325px', height: '512px', // CR80 Standard Size
          background: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          position: 'relative' 
        }}>
          {/* Card Preview Area */}
          <h3 style={{ textAlign: 'center', marginTop: '50px' }}>EMPLOYEE ID</h3>
          <div style={{ width: '100px', height: '120px', background: '#ddd', margin: '20px auto' }}>Photo</div>
          <p style={{ textAlign: 'center' }}>Name: Gildong Hong</p>
          <p style={{ textAlign: 'center' }}>Dept: Development Team</p>
        </div>
      </div>

      {/* 3. Right Property Panel (DB Connection) */}
      <div style={{ width: '300px', background: '#fff', borderLeft: '1px solid #ddd', padding: '20px' }}>
        <h3>Danool Properties</h3>
        <hr />
        <label>Name Mapping:</label>
        <input type="text" value="{DB.Name}" style={{ width: '100%', marginBottom: '10px' }} />
        
        <label>Photo Folder:</label>
        <button style={{ width: '100%' }}>Select Folder...</button>
        
        <div style={{ marginTop: '20px', padding: '10px', background: '#eef' }}>
          <strong>⚡ Excel Status:</strong><br/>
          Ready to Connect...
        </div>
      </div>

    </div>
  );
}

export default DanoolStudio;