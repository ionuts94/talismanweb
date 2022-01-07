import React from 'react';
import './DownloadPage.css';

const DownloadPage = () => {
    return (
        <div className='download-page-container'>
            <div className='fake-nav'></div>
            <div className="download-container">
                <div className="download-table">
                    <div className="download-item">
                        <h1>Download from MEGA</h1>
                        <a className="mega-download" href="https://mega.nz/file/9VQBgaib#cmlJ61riUtxTyqEhFQMG0tC7xmKUd413I7EfkmKySUc" target="_blank"></a>
                    </div>

                    <div className="download-item">
                        <h1>Download from Mediafire</h1>
                        <a className="mediafire-download" href="https://www.mediafire.com/file/7mcossvz7pcvk0j/The+Classic+Talisman.rar/file" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadPage
